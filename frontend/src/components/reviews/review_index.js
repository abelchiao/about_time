import React from 'react';
import ReviewIndexItem from './review_index_item';
import { openModal } from '../../actions/modal_actions';
import { fetchWatch } from '../../actions/watch_actions';

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
    this.props.createReview(this.state)
      .then(() => this.props.fetchWatch(this.props.watchId))
  }

  render() {
    if (!this.props.reviews) return null;
    // debugger
    let reviewForm = 
    <form onSubmit={this.handleSubmit}>
      <div className='review-form-header'>Own this watch? Tell us what you think!</div>
      <textarea value={this.state.text} onChange={this.update('text')} />
      <input type='submit' value='Submit Review' />
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
        <div className='review-index-header'>Our community's thoughts</div>
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