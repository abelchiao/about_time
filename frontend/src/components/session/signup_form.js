import React from 'react';

class SignupForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      handle: '',
      email: '',
      password: '',
      password2: '',
      errors: {}
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
    this.demoLogin = this.demoLogin.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  };

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
  };


  typeWriter() {
    const demoUser = { email: 'demoUser@demo.net', password: 'demodemo', handle: 'demoUser' };

    if (this.state.handle !== demoUser.handle) {
      let cursorPos = this.state.handle.length;
      setTimeout(
        () => this.setState({ handle: (this.state.handle + demoUser.handle[cursorPos]) },
          () => { this.typeWriter(); }
        ),
        150
      );
    } else if (this.state.email !== demoUser.email) {
      let cursorPos = this.state.email.length;
      setTimeout(
        () => this.setState({ email: (this.state.email + demoUser.email[cursorPos]) },
          () => { this.typeWriter(); }
        ),
        150
      );
    } else if (this.state.password !== demoUser.password) {
      let cursorPos = this.state.password.length;
      setTimeout(
        () => this.setState({ password: (this.state.password + demoUser.password[cursorPos]) },
          () => { this.typeWriter(); }
        ),
        150
      );
    } else if (this.state.password2 !== demoUser.password) {
      let cursorPos = this.state.password2.length;
      setTimeout(
        () => this.setState({ password2: (this.state.password2 + demoUser.password[cursorPos]) },
          () => { this.typeWriter(); }
        ),
        150
      );
    } else {
      this.props.login(demoUser);
    };
  };

  demoLogin(e) {
    e.preventDefault();
    this.setState({ email: "", password: "", password2: "", handle: "" },
      () => { this.typeWriter(); }
    );
  };


  handleSubmit(e) {
    e.preventDefault();
    let user = {
      email: this.state.email,
      handle: this.state.handle,
      password: this.state.password,
      password2: this.state.password2
    };

    this.props.clearErrors()
    this.props.signup(user)
      .then(() => {
        if (!Object.keys(this.props.errors).length) {
          this.props.login({
            email: this.state.email,
            password: this.state.password
          })
        }
      })
      .catch(err => console.log(err))

    // this.props.signup(user)
    //   .then(() => this.props.login({
    //     email: this.state.email,
    //     password: this.state.password
    //   }))
    //   .catch(err => console.log(err))
  };

  renderErrors() {
    return (
      <div className='session-errors'>
        {Object.keys(this.state.errors).map((error, idx) => (
          <div 
            className='session-error-item'
            key={`error-${idx}`}>{this.state.errors[error]}</div>
        ))}
      </div>
    )
  }

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