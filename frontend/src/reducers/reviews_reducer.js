import { CREATE_REVIEW, EDIT_REVIEW, DELETE_REVIEW } from "../actions/review_actions";

const reviewsReducer = (state = {}. action) => {
    Object.freeze(state);
    let nextState = Object.assign({}, state);
    switch (action.type) {
        case CREATE_REVIEW:
            nextState = action.review.data;
            return nextState;
        case EDIT_REVIEW:
            nextState = action.review.data;
            return nextState;
        case DELETE_REVIEW:
            const targetIndex = state.findIndex(review => {
                return review._id === action.review.reviewId;
            })
            newState.splice(targetIndex, 1);
            return newState;
        default:
            return state;
    }
}

export default reviewsReducer;
