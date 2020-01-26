import { OPEN_MODAL, CLOSE_MODAL } from '../../actions/modal_actions';

export default function currentProjectReducer(state = null, action) {
  switch (action.type) {
    case OPEN_MODAL:
      // return '5e2a1c8184d4208edbcbef6a';
      return action.watchId;
    case CLOSE_MODAL:
      return null;
    default:
      return state;
  }
}
