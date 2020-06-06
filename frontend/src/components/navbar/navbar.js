import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        this.openLoginModal = this.openLoginModal.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
        this.logout = this.logout.bind(this);
    }

    openLoginModal(e) {
        this.props.openModal('login')
    }

    openSignupModal(e) {
        this.props.openModal('signup')
    }

    logout (e) {
        this.props.logout();
    }

    render() {
        console.log("HASH", window.location.hash)
        if (window.location.hash === "#/profile") {
            return (
                <div className="navbar">
                    <Link to='/'><button>Main Page</button></Link>
                    <button onClick={this.logout}>Sign out</button>
                </div>
            )
        }
        // TODO check for logged in user or not from profile page
        // TODO extrapolate div navbar to outer of if then structure

        if (!this.props.currentUser || Object.entries(this.props.currentUser).length === 0) {
            return(
                <div className="navbar">
                    <button onClick={this.openLoginModal}>Log in</button>
                    <button onClick={this.openSignupModal}>Sign up</button>
                </div>
            )
        } else {
            return(
                <div className="navbar">
                    <Link to='/profile'><button>Profile</button></Link>
                    <button onClick={this.logout}>Sign out</button>
                </div>
            )
        }
    }
}

const mapStateToProps = state => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(Navbar);