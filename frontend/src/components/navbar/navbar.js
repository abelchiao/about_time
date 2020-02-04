import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
    constructor(props) {
        super(props)
        console.log(props)
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
        if (Object.entries(this.props.currentUser).length === 0) {
            return(
                <div className="navbar">
                    <button onClick={this.openLoginModal}>Log in</button>
                    <button onClick={this.openSignupModal}>Sign up</button>
                </div>
            )
        } else {
            return(
                <div className="navbar">
                    <Link to='/profile'>Profile</Link>
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