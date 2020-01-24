import React from 'react';

class LoginForm extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      email: '',
      password: '',
      errors: {}
    }
    this.handleSubmit = this.handleSubmit.bind(this);
    this.renderErrors = this.renderErrors.bind(this);
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  }

  handleSubmit(e) {
    e.preventDefault()
    let user = {
      email: this.state.email,
      password: this.state.password
    }
    this.props.login(user)
      // .then(this.props.closeModal())
  }

  
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
        <h1>Log In</h1>
        <form onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <label htmlFor="login-email">Email</label>
          <input 
            id="login-email"
            type="text"
            value={this.state.email}
            onChange={this.update('email')}
          />
          <label htmlFor="login-password">Password</label>
          <input 
            type="password" 
            id='login-password'
            value={this.state.password}
            onChange={this.update('password')}
          />
          <button>Log In</button>
        </form>
      </div>
    )
  };
}

export default LoginForm;