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
    this.demoLogin = this.demoLogin.bind(this);
  };

  componentWillReceiveProps(nextProps) {
    this.setState({ errors: nextProps.errors })
  };

  update(field) {
    return e => this.setState({ [field]: e.currentTarget.value })
  };

  handleSubmit(e) {
    e.preventDefault()
    let user = {
      email: this.state.email,
      password: this.state.password
    };
    this.props.login(user)
      // .then(this.props.closeModal())
  };

  demoLogin(e) {
    e.preventDefault();
    const demoUser = { email: 'demoUser@demo.net', password: 'demodemo' };
    this.props.login(demoUser)
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
      <div className='login-form-parent'>
        <h1>Log In</h1>
        <button onClick={this.demoLogin} className='demo-login-button'>Demo Login</button>
        <form className='login-form-main' onSubmit={this.handleSubmit}>
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
          <input type='submit' value='Log In'/>
        </form>
      </div>
    )
  };
}

export default LoginForm;