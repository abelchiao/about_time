import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createReview , updateReview, deleteReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchWatch, fetchWatches } from '../../actions/watch_actions';

const mapStateToProps = state => {
  return {
    currentUser: state.session.user,
    query: state.searches.new
  }
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
  fetchWatch: (watchId) => dispatch(fetchWatch(watchId)),
  fetchWatches: (query) => dispatch(fetchWatches(query)),
  deleteReview: reviewId => dispatch(deleteReview(reviewId))
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);