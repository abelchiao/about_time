import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from "react-router-dom";
import { openModal, closeModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

class Navbar extends React.Component {
    constructor(props) {
        super(props);
        this.openLoginModal = this.openLoginModal.bind(this);
        this.openSignupModal = this.openSignupModal.bind(this);
        this.logout = this.logout.bind(this);
        this.toggleDropdown = this.toggleDropdown.bind(this);
    };

    openLoginModal(e) {
        this.props.openModal('login')
    };

    openSignupModal(e) {
        this.props.openModal('signup')
    };

    logout(e) {
        this.props.logout();
    };

    toggleDropdown(e) {
        e.stopPropagation();
        document.getElementById("myDropdown").classList.toggle("show");
        document.getElementsByClassName("dropbtn")[0].classList.toggle("hidden");
    };

    render() {
        window.onclick = function (event) {
            event.stopPropagation();
            if (!event.target.matches('.dropbtn')) {
                let dropdowns = document.getElementsByClassName("dropdown-content");
                let i;
                for (i = 0; i < dropdowns.length; i++) {
                    let openDropdown = dropdowns[i];
                    if (openDropdown.classList.contains('show')) {
                        openDropdown.classList.remove('show');
                    };
                };
                document.getElementsByClassName("dropbtn")[0].classList.remove("hidden");
            };

            let alert = document.getElementsByClassName("alert")[0];
            if (alert !== undefined) {
                alert.style.display = (alert.style.display !== "none") ? "none" : alert.style.display;
            };
        };

        return (
            <div className="dropdown">
                <div className="alert" >
                    <div className="alert-text"></div>
                    <span className="alert-close">
                        <svg className="alert-close-icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="times" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 352 512"><path fill="currentColor" d="M242.72 256l100.07-100.07c12.28-12.28 12.28-32.19 0-44.48l-22.24-22.24c-12.28-12.28-32.19-12.28-44.48 0L176 189.28 75.93 89.21c-12.28-12.28-32.19-12.28-44.48 0L9.21 111.45c-12.28 12.28-12.28 32.19 0 44.48L109.28 256 9.21 356.07c-12.28 12.28-12.28 32.19 0 44.48l22.24 22.24c12.28 12.28 32.2 12.28 44.48 0L176 322.72l100.07 100.07c12.28 12.28 32.2 12.28 44.48 0l22.24-22.24c12.28-12.28 12.28-32.19 0-44.48L242.72 256z"></path></svg>
                    </span>
                </div>
                <button onClick={ e  => this.toggleDropdown(e) } className="dropbtn">
                    <svg aria-hidden="true" onClick={ e => this.toggleDropdown(e) } className="dropbtn-svg" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </button>
                <div id="myDropdown" className="dropdown-content">
                    { (!this.props.currentUser || Object.entries(this.props.currentUser).length === 0)
                        ?
                            <div>
                                <button className="dropdown-item" onClick={ this.openLoginModal }>LOG IN</button>
                                <button className="dropdown-item" onClick={ this.openSignupModal }>SIGN UP</button>
                                { (window.location.hash !== "#/") ? <button className="dropdown-item" onClick={ () => this.props.history.push(`/`) }>NEW SEARCH</button> : null }
                            </div>
                        : 
                            <div>
                                <button className="dropdown-item" onClick={this.logout}>SIGN OUT</button>
                                { (window.location.hash !== "#/profile") ? <button className="dropdown-item" onClick={ () => this.props.history.push(`/profile`) }>PROFILE</button> : null }
                                { (window.location.hash !== "#/") ? <button className="dropdown-item" onClick={ () => this.props.history.push(`/`) }>NEW SEARCH</button> : null }
                            </div>
                    }
                </div>
            </div>
        );
    };
};


const mapStateToProps = state => ({
    currentUser: state.session.user
});

const mapDispatchToProps = dispatch => ({
    openModal: (modal, watchId) => dispatch(openModal(modal, watchId)),
    closeModal: () => dispatch(closeModal()),
    logout: () => dispatch(logout())
})

export default connect(mapStateToProps, mapDispatchToProps)(withRouter(Navbar));