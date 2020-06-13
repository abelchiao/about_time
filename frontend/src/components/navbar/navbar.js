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
        return(
        <div className="navbar">
            { (!this.props.currentUser || Object.entries(this.props.currentUser).length === 0) ?
                <div>
                    <button onClick={this.openLoginModal}>LOG IN</button>
                    <button onClick={this.openSignupModal}>SIGN UP</button>
                </div>
            : 
            <div>
                    <button onClick={this.logout}>SIGN OUT</button>
                    { (window.location.hash !== "#/profile") ? <Link to='/profile'><button>PROFILE</button></Link> : null }
                </div>
            }
            { (window.location.hash !== "#/") ? <Link to='/'><button>NEW SEARCH</button></Link> : null }
        </div>
        )
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