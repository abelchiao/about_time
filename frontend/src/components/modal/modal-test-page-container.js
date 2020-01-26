import { connect } from 'react-redux';
import { openModal, closeModal } from '../../actions/modal_actions';
import ModalTestPage from './modal-test-page';
import { fetchWatches } from '../../actions/watch_actions';

const mapStateToProps = state => ({
  currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
  openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
  closeModal: () => dispatch(closeModal()),
  fetchWatches: () => dispatch(fetchWatches()),
});

export default connect(mapStateToProps, mapDispatchToProps)(ModalTestPage);