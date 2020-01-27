import React from 'react';
import ReviewIndexItem from './review_index_item';

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
    this.props.createReview(this.state);
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
              return <ReviewIndexItem key={review._id} review={review} currentUser={this.props.currentUser} />
            })
          }
        </div>
      </div>
    );
  };
};

export default ReviewIndex;