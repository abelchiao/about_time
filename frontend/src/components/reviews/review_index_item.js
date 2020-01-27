import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    let reviewItemHeader =
      <div className='review-item-header'>
        <div>{`${this.props.review.userHandle} wrote:`}</div>
      </div>

    if (this.props.review.userId === this.props.currentUser.id) {
      reviewItemHeader =
        <div className='review-item-header'>
          <div>You wrote:</div>
          <div>Edit your review</div>
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