import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createReview , updateReview } from '../../actions/review_actions';
import { openModal } from '../../actions/modal_actions';
import { fetchWatch } from '../../actions/watch_actions';

const mapStateToProps = state => {

  return {
    currentUser: state.session.user,
  }
};

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
  openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
  fetchWatch: (watchId) => dispatch(fetchWatch(watchId)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);