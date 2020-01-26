import React from 'react';
import ReviewIndexItem from './review_index_item';

class ReviewIndex extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props) return null;
    return (
      <div className='review-index-parent'>Review Index!!!!
        {
          this.props.reviews.map(review => {
            return <ReviewIndexItem review={review} />
          })
        }
      </div>
    );
  };
};

export default ReviewIndex;