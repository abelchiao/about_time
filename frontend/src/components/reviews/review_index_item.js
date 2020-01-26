import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    return (
      <div className='review-parent'>
        THIS IS A REVIEW
        {this.props.review.text}
      </div>
    );
  };
};

export default ReviewIndexItem;