import { connect } from 'react-redux';
import WatchShowModal from './watch_show_modal';

const mapStateToProps = (state, ownProps) => ({
  hello: ownProps.watchId
});

const mapDispatchToProps = dispatch => ({

});

export default connect(mapStateToProps, mapDispatchToProps)(WatchShowModal);