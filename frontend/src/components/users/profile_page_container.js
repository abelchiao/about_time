import { connect } from "react-redux";
import ProfilePage from "./profile_page";
import { fetchUserSearches } from '../../actions/search_actions';
import { STATES } from "mongoose";

const mapStateToProps = state => ({
    currentUser: state.session.user,
    searches: state.searches
});

const mapDispatchToProps = dispatch => ({
  fetchUserSearches: () => dispatch(fetchUserSearches())
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfilePage);
