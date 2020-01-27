import React from 'react';
import ReviewIndexContainer from '../reviews/review_index_container';

class WatchShowModal extends React.Component {
  constructor(props) {
    super(props)
  };

  render() {
    if (!this.props.currentWatch) return null;
    return (
      <div className='watch-show-modal-parent'>
        <div class-name='watch-show-modal-body'>
          <img alt='' className='watch-photo' src="https://us.tissotshop.com/media/catalog/product/cache/2/image/9df78eab33525d08d6e5fb8d27136e95/T/0/T0914204605101_1.png"></img>
          <div className='watch-information'>
            <div className='watch-title'>
              <div className='watch-brand'>{this.props.currentWatch.brand}</div>
              <div className='watch-model'>{this.props.currentWatch.model}</div>
            </div>
            <div className='watch-price'>
              {`$${this.props.currentWatch.price.toLocaleString()}`}
            </div>
            <div className='watch-details'>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='https://www.movado.com/on/demandware.static/-/Sites/default/dw1a6109c6/images/productattributes/gender.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Gender</div>
                  <div className='watch-value'>{this.props.currentWatch.gender ? this.props.currentWatch.gender : 'Details Unavailable'}</div>
                </div>
              </div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='https://www.movado.com/on/demandware.static/-/Sites/en_US/v1579968029533/images/productattributes/movement_type.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Movement Type</div>
                  <div className='watch-value'>{this.props.currentWatch.movement ? this.props.currentWatch.movement : 'Details Unavailable'}</div>
                </div>
              </div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='https://www.movado.com/on/demandware.static/-/Sites/en_US/v1579968029533/images/productattributes/case_material.png'></img>
                <div className='watch-detail-item-values'>
                  <div className='watch-detail-item-label'>Case Material</div>
                  <div className='watch-value'>{this.props.currentWatch.case ? this.props.currentWatch.case : 'Details Unavailable'}</div>
                </div>
              </div>
              <div className='watch-detail-item'>
                <img alt='' className='watch-detail-item-img' src='https://www.movado.com/on/demandware.static/-/Sites/en_US/v1579968029533/images/productattributes/water_resistance.png'></img>
                <div className='watch-detail-item'>
                  <div className='watch-detail-item-label'>Water Resistance</div>
                  <div className='watch-value'>{this.props.currentWatch.waterResistance ? this.props.currentWatch.waterResistance : 'Details Unavailable'}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <ReviewIndexContainer reviews={this.props.currentWatch.reviews} watchId={this.props.currentWatch._id} />
      </div>
    )
  }
};

export default WatchShowModal;