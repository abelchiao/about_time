import React from 'react';

class ReviewIndexItem extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      text: this.props.review.text
    }
    this.revealReviewDropdown = this.revealReviewDropdown.bind(this);
    this.handleDelete = this.handleDelete.bind(this);
    this.updateFormText = this.updateFormText.bind(this);
    this.handleUpdate = this.handleUpdate.bind(this);
    this.toggleEditField = this.toggleEditField.bind(this);
  };

  componentDidMount() {
    if (this.props.review.userId === this.props.currentUser.id) {
      let ownedReview = document.getElementById(`review-${this.props.review._id}`);
      ownedReview.classList.add('owned-review')
    };
  }
  
  revealReviewDropdown() {
    let dropdown = document.getElementById(`review-dropdown-${this.props.review._id}`)
    dropdown.classList.toggle('show')

    let modalChild = document.getElementsByClassName('modal-child')
    modalChild[0].onclick = () => dropdown.classList.remove('show')
    // let editButton = document.getElementById(`edit-button-${this.props.review._id}`)
    dropdown.onclick = () => dropdown.classList.remove('show')
  }

  toggleEditField(e) {
    // let dropdown = document.getElementById(`review-dropdown-${this.props.review._id}`)
    // let editButton = document.getElementById(`edit-button-${this.props.review._id}`)
    // editButton.onclick = () => dropdown.classList.remove('show')

    let reviewDisplay = document.getElementById(`review-text-${this.props.review._id}`);
    let reviewEditForm = document.getElementById(`review-edit-form-parent-${this.props.review._id}`);
    reviewDisplay.classList.toggle('hidden');
    reviewEditForm.classList.toggle('hidden');
  }

  updateFormText() {
    return e => this.setState({ text: e.currentTarget.value })
  }

  handleUpdate(e) {
    e.preventDefault()
    let reviewDisplay = document.getElementById(`review-text-${this.props.review._id}`);
    let reviewEditForm = document.getElementById(`review-edit-form-parent-${this.props.review._id}`);
    reviewDisplay.classList.toggle('hidden');
    reviewEditForm.classList.toggle('hidden');
    this.props.updateReview({
      text: this.state.text,
      watchId: this.props.watchId,
      reviewId: this.props.review._id
    })
      .then(() => this.props.fetchWatch(this.props.watchId))
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
      // let ownedReview = document.getElementById(`review-${this.props.review._id}`);
      // ownedReview.classList.add('owned-review')
      reviewItemHeader =
        <div className='review-item-header'>
          <div>You wrote:</div>
          {/* <div>Edit your review</div> */}
          <div onClick={this.revealReviewDropdown} className='review-dropdown-parent'>
            <svg className='review-dropdown-icon' viewBox='0 0 32 32'>
              <path d="M16,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S14.3,13,16,13z M3,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S1.3,13,3,13z M29,13c1.7,0,3,1.3,3,3s-1.3,3-3,3s-3-1.3-3-3S27.3,13,29,13z"></path>
            </svg>
            <div
              id={`review-dropdown-${this.props.review._id}`}
              className='review-dropdown-contents'
            >
              <div id={`edit-button-${this.props.review._id}`} onClick={this.toggleEditField} className='review-dropdown-item'>
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
        <div id={`review-text-${this.props.review._id}`} className='review-item-text'>
          {this.state.text}
        </div>
        <div
          id={`review-edit-form-parent-${this.props.review._id}`}
          className='review-edit-form-parent hidden'
        >
          <form 
            id={`review-edit-form-${this.props.review._id}`}
            className='review-edit-form'
            onSubmit={this.handleUpdate}
          >
            <textarea 
              className='review-edit-textarea' 
              value={this.state.text} 
              onChange={this.updateFormText()}
            />
            <button className='update-review-button' type='submit'>Update Review</button>
            {/* <input className='update-review-button' type='submit' value='Update Review'/> */}
          </form>
        </div>
      </div>
    );
  };
};

export default ReviewIndexItem;