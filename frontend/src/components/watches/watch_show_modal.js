import React from 'react';
import ReviewIndexContainer from '../reviews/review_index_container';

class WatchShowModal extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    // debugger
    if (!this.props.currentWatch) return null;
    return (
      <div className='watch-show-modal-parent'>
        <div className='watch-show-modal-body'>
          <div className='watch-photo-container'>
            <img alt='' className='watch-photo' src={this.props.currentWatch.imageURL}></img>
          </div>
          <div className='watch-information'>
            <div className='watch-title'>
              <div className='watch-brand'>{this.props.currentWatch.brand}</div>
              <div className='watch-model'>{this.props.currentWatch.model}</div>
            </div>
            <div className='watch-price'>
              <a className='retail-link' href={this.props.currentWatch.retailURL} target='_blank'>
                {`$${this.props.currentWatch.price.toLocaleString()}`}
              </a>
            </div>
            <div className='watch-details'>
              <div className='watch-details-label'>Details</div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='/img/gender.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Gender</div>
                  <div className='watch-value'>{this.props.currentWatch.gender ? this.props.currentWatch.gender : 'Details Unavailable'}</div>
                </div>
              </div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='/img/movement_type.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Movement Type</div>
                  <div className='watch-value'>{this.props.currentWatch.movement ? this.props.currentWatch.movement : 'Details Unavailable'}</div>
                </div>
              </div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='/img/case_material.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Case Material</div>
                  <div className='watch-value'>{this.props.currentWatch.case ? this.props.currentWatch.case : 'Details Unavailable'}</div>
                </div>
              </div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='/img/water_resistance.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Water Resistance</div>
                  <div className='watch-value'>{this.props.currentWatch.waterResistance ? this.props.currentWatch.waterResistance : 'Details Unavailable'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className='watch-description'>
          <div>{this.props.currentWatch.description}</div>
        </div>
        <ReviewIndexContainer 
          reviews={this.props.currentWatch.reviews} 
          watchId={this.props.currentWatch._id}
        />
      </div>
    )
  }
};

export default WatchShowModal;