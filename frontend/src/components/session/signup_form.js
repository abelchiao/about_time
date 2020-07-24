import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: '',
      email: '',
      password: '',
      password2: '',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  };

  componentDidMount() {
    if (Object.keys(this.props.errors).length) { this.props.clearErrors(); };
  };

  update(field) {
    return e => {
      if (Object.keys(this.props.errors).length) { this.props.clearErrors(); };
      this.setState({ [field]: e.currentTarget.value });
    };
  };

  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };
    this.props.signup(user)
      .then( () => {
        if ( !Object.keys(this.props.errors).length ) {
          this.props.login({
            email: this.state.email,
            password: this.state.password
          })
            .then( () => {
              if ( !Object.keys(this.props.errors).length ) {
                let alertText = document.getElementsByClassName("alert-text")[0];
                alertText.innerHTML = "SIGNED UP AND LOGGED IN!";
                document.getElementsByClassName("alert")[0].style.display = "flex";
              };
            });
        };
      })
      // .catch(err => console.log("ERR", err));
  };


  // Demo login with auto typing

  typeNext(stateVar) {
    const demoUser = { handle: 'demoUser', email: 'demoUser@demo.net', password: 'demodemo', password2: 'demodemo' };
    let cursorPos = this.state[stateVar].length;
    setTimeout(
      () => this.setState({ [stateVar]: (this.state[stateVar] + demoUser[stateVar][cursorPos]) },
        () => { this.typeWriter(); }
      ),
      150
    );
  };

  typeWriter() {
    const demoUser = { handle: 'demoUser', email: 'demoUser@demo.net', password: 'demodemo', password2: 'demodemo' };
    if (this.state.handle !== demoUser.handle) {
      this.typeNext("handle");
    } else if (this.state.email !== demoUser.email) {
      this.typeNext("email");
    } else if (this.state.password !== demoUser.password) {
      this.typeNext("password");
    } else if (this.state.password2 !== demoUser.password2) {
      this.typeNext("password2");
    } else {
      let alertText = document.getElementsByClassName("alert-text")[0];
      alertText.innerHTML = "DEMO USER LOGGING IN...";
      document.getElementsByClassName("alert")[0].style.display = "flex";
      this.props.login(demoUser)
        .then(() => alertText.innerHTML = "DEMO USER LOGGED IN!")
        .catch(() => alertText.innerHTML = "ERROR: DEMO LOGIN FAILED!");
    };
  };
 
  demoLogin(e) {
    e.preventDefault();
    this.setState({ email: "", password: "", password2: "", handle: "" },
      () => { this.typeWriter(); }
    );
  };



  renderErrors() {
    return (
      <div className='session-errors'>
        { Object.keys(this.props.errors).map( (error, idx) => (
          <div className='session-error-item' key={ `error-${ idx }` }>
            { this.props.errors[error] }
          </div>
        )) }
      </div>
    );
  };

  render() {
    return (
      <div className='session-form-parent'>
        <form className='session-form-main' onSubmit={this.handleSubmit}>
          {this.renderErrors()}

          <div className='session-input-group'>
            <div className='session-input-item'>
              <label className='session-input-label' htmlFor="login-handle">Username</label>
              <input
                type="text"
                id="login-handle"
                className='session-input-field'
                value={this.state.handle}
                onChange={this.update("handle")}
              />
            </div>
            <div className='session-input-item'>
              <label className='session-input-label' htmlFor="login-email">Email</label>
              <input
                id="login-email"
                className='session-input-field'
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>
          </div>
          <div className='session-input-group'>
            <div className='session-input-item'>
              <label className='session-input-label' htmlFor="login-password">Password</label>
              <input
                type="password"
                id="login-password"
                className='session-input-field'
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
            <div className='session-input-item'>
              <label className='session-input-label' htmlFor="login-password2">Confirm Password</label>
              <input
                type="password"
                id="login-password2"
                className='session-input-field'
                value={this.state.password2}
                onChange={this.update("password2")}
              />
            </div>
          </div>
          <div className="session-form-buttons-container">
              <button onClick={this.demoLogin} className="session-button">DEMO LOGIN</button>
              <button className="session-button">SIGN UP</button>
          </div>
        </form>
      </div>
    );
  };
};

export default SignupForm;