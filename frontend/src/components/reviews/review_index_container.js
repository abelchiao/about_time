import { connect } from 'react-redux';
import ReviewIndex from './review_index';
import { createReview } from '../../actions/review_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  createReview: review => dispatch(createReview(review)),
  updateReview: review => dispatch(updateReview(review)),
});

export default connect(mapStateToProps, mapDispatchToProps)(ReviewIndex);