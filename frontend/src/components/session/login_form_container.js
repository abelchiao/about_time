import { connect } from "react-redux";
import LoginForm from "./login_form";
import { login } from "../../actions/session_actions";
// import { login, CLEAR_ERRORS } from "../../actions/session_actions";

const mapStateToProps = state => ({
  errors: state.errors.session
});

const mapDispatchToProps = dispatch => ({
  login: user => dispatch(login(user)),
  // will want this eventually to clear form errors
  // clearErrors: () => dispatch({ type: CLEAR_ERRORS })
});

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);
