import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { fetchUserSearches } from '../../actions/search_actions';
import { fetchWatches } from '../../actions/watch_actions';
import { STATES } from "mongoose";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    searches: state.searches
});

const mapDispatchToProps = dispatch => ({
  fetchUserSearches: () => dispatch(fetchUserSearches()),
  fetchWatches: search => dispatch(fetchWatches(search))
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
