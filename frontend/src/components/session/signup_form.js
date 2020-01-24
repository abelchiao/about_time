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
    this.renderErrors = this.renderErrors.bind(this)
  };

  update(field) {
    return e =>
      this.setState({ [field]: e.currentTarget.value });
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
      .then(() => this.props.login({
        email: this.state.email,
        password: this.state.password
      }))
  };

  renderErrors() {
    return (
      <div>
        {Object.keys(this.state.errors).map((error, idx) => (
          <div key={`error-${idx}`}>{this.state.errors[error]}</div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div>
        <h1>Sign Up</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label htmlFor="login-handle">Username</label>
          <input
            type="text"
            id="login-handle"
            value={this.state.handle}
            onChange={this.update("handle")}
          />
          <label htmlFor="login-email">Email</label>
          <input
            id="login-email"
            type="text"
            value={this.state.email}
            onChange={this.update("email")}
          />
          <label htmlFor="login-password">Password</label>
          <input
            type="password"
            id="login-password"
            value={this.state.password}
            onChange={this.update("password")}
          />
          <label htmlFor="login-password2">Confirm Password</label>
          <input
            type="password"
            id="login-password2"
            value={this.state.password2}
            onChange={this.update("password2")}
          />
          <button>Sign Up</button>
        </form>
        
      </div>
    );
  };
};

export default SignupForm;