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

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { email: "demoUser@demo.net", password: "demodemo" };
    this.props.login(demoUser);
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
        <div className='session-form-title'>Sign Up</div>
        <button onClick={this.demoLogin} className='demo-login-button'>Demo Login</button>
        <div className='or-separator'>Or</div>
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
          <button>Sign Up</button>
        </form>
        
      </div>
    );
  };
};

export default SignupForm;