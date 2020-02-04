import * as ReviewApiUtil from "../util/review_api_util"

export const CREATE_REVIEW = "CREATE_REVIEW";
export const UPDATE_REVIEW = "UPDATE_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

// const receiveReview = review => ({
//     type: RECEIVE_REVIEW,
//     review
// });

const createReviewAction = review => ({
  type: CREATE_REVIEW,
  review
});

const updateReviewAction = review => ({
  type: UPDATE_REVIEW,
  review
});

const deleteReviewAction = reviewId => ({
  type: DELETE_REVIEW,
  reviewId
});

export const createReview = review => dispatch => {
    return ReviewApiUtil.createReview(review)
    .then(review => dispatch(createReviewAction(review)))
    .catch(err => console.log(err))
}

export const updateReview = review => dispatch => {
  return ReviewApiUtil.editReview(review)
    .then(review => dispatch(updateReviewAction(review)))
    .catch(err => console.log(err))
}

export const deleteReview = review => dispatch => {
  return ReviewApiUtil.deleteReview(review)
    .then( () => dispatch(deleteReviewAction(review)))
    .catch(err => console.log(err))
}
