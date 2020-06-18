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
        this.myFunction = this.myFunction.bind(this);
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


    /* When the user clicks on the button,
    toggle between hiding and showing the dropdown content */
    myFunction(e) {
        e.stopPropagation();
        console.log("HIT222", document.getElementById("myDropdown").classList)
        document.getElementById("myDropdown").classList.toggle("show");
        console.log("HIT333", document.getElementById("myDropdown").classList)
        document.getElementsByClassName("dropbtn")[0].classList.toggle("hidden");
    }

    render() {

    // Close the dropdown menu if the user clicks outside of it
    window.onclick = function (event) {
        if (!event.target.matches('.dropbtn')) {
            var dropdowns = document.getElementsByClassName("dropdown-content");
            var i;
            for (i = 0; i < dropdowns.length; i++) {
                var openDropdown = dropdowns[i];
                if (openDropdown.classList.contains('show')) {
                    openDropdown.classList.remove('show');
                }
            }
            document.getElementsByClassName("dropbtn")[0].classList.remove("hidden");
        }
    }

    window.onclick = function (event) {
        event.stopPropagation();
        let alert = document.getElementsByClassName("alert")[0];
        if (alert !== undefined) {
            alert.style.display = (alert.style.display !== "none") ? "none" : alert.style.display;
        }
    }

    return(
            <div className="dropdown">
                <div className="alert" >
                    <div className="alert-text"></div>
                    <span className="alert-close">&times;</span>
                </div>
                <button onClick={(e) => this.myFunction(e)} className="dropbtn">
                    <svg aria-hidden="true" onClick={(e) => {console.log("HIT111"); this.myFunction(e)}} className="dropbtn-svg" focusable="false" data-prefix="fas" data-icon="bars" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 448 512"><path fill="currentColor" d="M16 132h416c8.837 0 16-7.163 16-16V76c0-8.837-7.163-16-16-16H16C7.163 60 0 67.163 0 76v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16zm0 160h416c8.837 0 16-7.163 16-16v-40c0-8.837-7.163-16-16-16H16c-8.837 0-16 7.163-16 16v40c0 8.837 7.163 16 16 16z"></path></svg>
                </button>
                <div id="myDropdown" className="dropdown-content">
                    { (!this.props.currentUser || Object.entries(this.props.currentUser).length === 0)
                        ?
                            <div>
                                <button className="dropdown-item" onClick={this.openLoginModal}>LOG IN</button>
                                <button className="dropdown-item" onClick={this.openSignupModal}>SIGN UP</button>
                            </div>
                        : 
                            <div>
                                <button className="dropdown-item" onClick={this.logout}>SIGN OUT</button>
                                { (window.location.hash !== "#/profile") ? <Link to='/profile'><button className="dropdown-item">PROFILE</button></Link> : null }
                            </div>
                    }
                    <div>
                        { (window.location.hash !== "#/") ? <Link to='/'><button className="dropdown-item">NEW SEARCH</button></Link> : null }
                    </div>
                </div>
            </div>
        // <div className="navbar">
        //     { (!this.props.currentUser || Object.entries(this.props.currentUser).length === 0) ?
        //         <div>
        //             <button onClick={this.openLoginModal}>LOG IN</button>
        //             <button onClick={this.openSignupModal}>SIGN UP</button>
        //         </div>
        //     : 
        //     <div>
        //             <button onClick={this.logout}>SIGN OUT</button>
        //             { (window.location.hash !== "#/profile") ? <Link to='/profile'><button>PROFILE</button></Link> : null }
        //         </div>
        //     }
        //     { (window.location.hash !== "#/") ? <Link to='/'><button>NEW SEARCH</button></Link> : null }
        // </div>
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