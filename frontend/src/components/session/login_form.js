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


// Demo login with auto typing

  typeNext(stateVar) {
    const demoUser = { email: 'demoUser@demo.net', password: 'demodemo' };
    let cursorPos = this.state[stateVar].length;
    setTimeout(
      () => this.setState({ [stateVar]: (this.state[stateVar] + demoUser[stateVar][cursorPos]) },
        () => { this.typeWriter(); }
      ),
      150
    );
  };

  typeWriter() {
    const demoUser = { email: 'demoUser@demo.net', password: 'demodemo' };
    if (this.state.email !== demoUser.email) {
      this.typeNext("email");
    } else if (this.state.password !== demoUser.password) {
      this.typeNext("password");
    } else {
      this.props.login(demoUser);
    };
  };
 
  demoLogin(e) {
    e.preventDefault();
    this.setState( { email: "", password: "" },
      () => { this.typeWriter(); }
    );
  };


  renderErrors() {
    return (
      <div className='session-errors'>
        {Object.keys(this.state.errors).map((error, idx) => (
          <div 
            className='session-error-item' 
            key={`error-${idx}`}
          >
            {this.state.errors[error]}
          </div>
        ))}
      </div>
    )
  }

  render() {
    return (
      <div className="session-form-parent">
        <form className="session-form-main" onSubmit={this.handleSubmit}>
          {this.renderErrors()}
          <div className="session-input-group">
            <div className="session-input-item">
              <label className="session-input-label" htmlFor="login-email">
                Email
              </label>
              <input
                id="login-email"
                className="session-input-field"
                type="text"
                value={this.state.email}
                onChange={this.update("email")}
              />
            </div>
          </div>
          <div className="session-input-group">
            <div className="session-input-item">
              <label className="session-input-label" htmlFor="login-password">
                Password
              </label>
              <input
                type="password"
                id="login-password"
                className="session-input-field"
                value={this.state.password}
                onChange={this.update("password")}
              />
            </div>
          </div>
          <div className="session-form-buttons-container">
            <button onClick={this.demoLogin} className="session-button">
              DEMO LOGIN
            </button>
            <button className="session-button">LOG IN</button>
          </div>
        </form>
      </div>
    );
  };
}

export default LoginForm;