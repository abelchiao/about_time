import * as ReviewApiUtil from "../util/review_api_util"

export const CREATE_REVIEW = "CREATE_REVIEW";
export const EDIT_REVIEW = "EDIT_REVIEW";
export const DELETE_REVIEW = "DELETE_REVIEW";

// const receiveReview = review => ({
//     type: RECEIVE_REVIEW,
//     review
// });

const createReviewAction = review => ({
  type: types.CREATE_REVIEW,
  review
});

const updateReviewAction = review => ({
  type: types.UPDATE_REVIEW,
  review
});

const deleteReviewAction = review => ({
  type: types.DELETE_REVIEW,
  review
});

export function createReview(review) {
    return ReviewApiUtil.createReview(review)
    .then(review => dispatch(createReviewAction(review)))
    .catch(err => console.log(err))
}

export function updateReview(review) {
  return ReviewApiUtil.editReview(review)
    .then(review => dispatch(updateReviewAction(review)))
    .catch(err => console.log(err))
}

export function deleteReview(review) {
  return ReviewApiUtil.deleteReview(review)
    .then(review => dispatch(deleteReviewAction(review)))
    .catch(err => console.log(err))
}


