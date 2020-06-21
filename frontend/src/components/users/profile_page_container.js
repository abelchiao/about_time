import { connect } from "react-redux";
import { fetchWatches } from '../../actions/watch_actions';
import { fetchUserSearches, deleteSearch } from '../../actions/search_actions';
import { confirmDataLoad, resetDataLoad } from '../../actions/data_load_actions'
import ProfilePage from "./profile_page";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    searches: state.searches
});

const mapDispatchToProps = dispatch => ({
  fetchUserSearches: () => dispatch(fetchUserSearches()),
  fetchWatches: search => dispatch(fetchWatches(search)),
  deleteSearch: searchId => dispatch(deleteSearch(searchId)),
  confirmDataLoad: () => dispatch(confirmDataLoad()),
  resetDataLoad: () => dispatch(resetDataLoad())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
