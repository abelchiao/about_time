import React from "react";
import { closeModal } from "../../actions/modal_actions";
import { connect } from "react-redux";
import LoginFormContainer from '../session/login_form_container'
import SignupFormContainer from "../session/signup_form_container";

function Modal({ modal, closeModal, currentWatch }) {
  if (!modal) {
    return null;
  }
  let component;
  switch (modal) {
    case "login":
      component = <LoginFormContainer closeModal={closeModal} />;
      // component = 'hello! this will be the login container'
      break;
    case "signup":
      component = <SignupFormContainer currentWatch={currentWatch} />;
      // component = 'hello! this will be the signup form container'
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className="modal-child" onClick={e => e.stopPropagation()}>
        {component}
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    currentWatch: state.watches[state.ui.currentWatch]
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
