import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.revealReviewDropdown = this.revealReviewDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
  };

  revealReviewDropdown() {
    let dropdown = document.getElementById(`review-dropdown-${this.props.review._id}`)
    dropdown.classList.toggle('show')
  }

  handleEdit(e) {

  }

  handleDelete(e) {
    this.props.deleteReview({
      reviewId: this.props.review._id,
      watchId: this.props.watchId
    })
      .then(() => this.props.fetchWatch(this.props.watchId))
  }

  render() {
    // debugger
    let reviewItemHeader =
      <div className='review-item-header'>
        <div>{`${this.props.review.userHandle} wrote:`}</div>
      </div>

    if (this.props.review.userId === this.props.currentUser.id) {
      reviewItemHeader =
        <div className='review-item-header'>
          <div>You wrote:</div>
          {/* <div>Edit your review</div> */}
          <div className='review-dropdown-parent'>
            <svg onClick={this.revealReviewDropdown} className='review-dropdown-icon' viewBox='0 0 32 32'>
              <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
            </svg>
            <div
              id={`review-dropdown-${this.props.review._id}`}
              className='review-dropdown-contents'
            >
              <div onClick={this.handleEdit} className='review-dropdown-item'>
                Edit your review
              </div>
              <div onClick={this.handleDelete} className='review-dropdown-item'>
                Delete your review
              </div>
            </div>
          </div>
        </div>
      // document.getElementById(`review-${this.props.review._id}`).classList.add('owned-review');
    }

    return (
      <div id={`review-${this.props.review._id}`} className='review-item-parent'>
        {reviewItemHeader}
        <div className='review-item-text'>
          {this.props.review.text}
        </div>
      </div>
    );
  };
};

export default ReviewIndexItem;