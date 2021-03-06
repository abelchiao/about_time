import React from 'react';
import ReviewIndexItem from './review_index_item';
// import { openModal } from '../../actions/modal_actions';
// import { fetchWatch } from '../../actions/watch_actions';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: '',
      watchId: this.props.watchId
    }
    this.handleSubmit = this.handleSubmit.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault();
    
    let alertText = document.getElementsByClassName("alert-text")[0];
    if (Object.entries(this.props.currentUser).length === 0 || !this.props.currentUser) {
      alertText.innerHTML = "LOG IN TO WRITE A REVIEW";
    } else {
      if (this.state.text === "") {
        alertText.innerHTML = "WRITE A REVIEW TO SUBMIT THE REVIEW";
      } else {
        const search = Object.assign({}, this.props.query);
        alertText.innerHTML = "REVIEW SAVING...";
        this.props.createReview(this.state)
          .then(() => {
            alertText.innerHTML = "REVIEW SAVED!"
            this.props.fetchWatches(search)
          })
          .catch(() => alertText.innerHTML = "ERROR: REVIEW NOT SAVED!");
      };
    };
    document.getElementsByClassName("alert")[0].style.display = "flex";
  }

  render() {
    if (!this.props.reviews) return null;
    // debugger
    let reviewForm = 
    <form onSubmit={this.handleSubmit}>
      <div className='review-form-header'>Write a new review:</div>
      <div className='review-form-body'>
        <textarea 
          value={this.state.text} 
          onChange={this.update('text')}
          className='new-review-textarea'
        />
        <button className='new-review-button' type='submit'>Submit Review</button>
      </div>
    </form>;
    this.props.reviews.forEach(review => {
      if (review.userId === this.props.currentUser.id) {
        reviewForm = null;
      }
    });

    return (
      <div className='review-index-parent'>
        <div className='review-form-container'>
          {reviewForm}
        </div>
        <div className='review-index-header'>Reviews:</div>
        <div className='review-index-items'>
          {
            this.props.reviews.map(review => {
              return (
                <ReviewIndexItem 
                  key={review._id} 
                  review={review}
                  watchId={this.props.watchId}
                  currentUser={this.props.currentUser}
                  updateReview={this.props.updateReview}
                  deleteReview={this.props.deleteReview}
                  fetchWatch={this.props.fetchWatch}
                  fetchWatches={this.props.fetchWatches}
                  query={this.props.query}
                />
              )
            })
          }
        </div>
      </div>
    );
  };
};

export default ReviewIndex;