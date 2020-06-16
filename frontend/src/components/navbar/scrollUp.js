import React from "react";
import { withRouter } from "react-router-dom";

class ScrollUp extends React.Component {
    componentDidUpdate() {
        this.scrollFunction = this.scrollFunction.bind(this);
        this.topFunction = this.topFunction.bind(this);
    }
    
    scrollFunction() {
        let mybutton = document.getElementById("myBtn");
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            mybutton.style.display = "block";
        } else {
            mybutton.style.display = "none";
        }
    }
    
    topFunction() {
        document.body.scrollTop = 0; // For Safari
        document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
    }
    
    render() {        
        window.onscroll = () => this.scrollFunction();

        return (
        <button onClick={() => this.topFunction()} id="myBtn" title="Go to top">
            <svg className="myBtn_icon" aria-hidden="true" focusable="false" data-prefix="fas" data-icon="angle-double-up" role="img" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 320 512"><path fill="currentColor" d="M177 255.7l136 136c9.4 9.4 9.4 24.6 0 33.9l-22.6 22.6c-9.4 9.4-24.6 9.4-33.9 0L160 351.9l-96.4 96.4c-9.4 9.4-24.6 9.4-33.9 0L7 425.7c-9.4-9.4-9.4-24.6 0-33.9l136-136c9.4-9.5 24.6-9.5 34-.1zm-34-192L7 199.7c-9.4 9.4-9.4 24.6 0 33.9l22.6 22.6c9.4 9.4 24.6 9.4 33.9 0l96.4-96.4 96.4 96.4c9.4 9.4 24.6 9.4 33.9 0l22.6-22.6c9.4-9.4 9.4-24.6 0-33.9l-136-136c-9.2-9.4-24.4-9.4-33.8 0z"></path></svg>
        </button>
        );
    }
}

export default withRouter(ScrollUp);
