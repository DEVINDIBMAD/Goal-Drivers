import React, { Component } from 'react';
import './index.css';

class LoginForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      isFormSubmitted: false,
      emailError: '',
      passwordError: ''
    };
  }

  handleInputChange = (event) => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  }

  handleBlur = (event) => {
    const { name, value } = event.target;
    this.validateField(name, value);
  }

  validateField(fieldName, value) {
    let emailError = '';
    let passwordError = '';

    switch(fieldName) {
      case 'email':
        if (!value.includes('@')) {
          emailError = 'Invalid email';
        }
        break;
      case 'password':
        if (value.length < 5) {
          passwordError = 'Password must be at least 5 characters long';
        }
        break;
      default:
        break;
    }

    this.setState({ emailError, passwordError });
  }

  handleSubmit = (event) => {
    event.preventDefault();
    const { email, password } = this.state;
    if (email === 'abc@gmail.com' && password === '12345') {
      this.setState({ isFormSubmitted: true });
      alert('You successfully logged in to the system.');
    }
  }

  renderEmailField() {
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="email">Email:</label>
        <input
          className={`name-input-field ${this.state.emailError ? 'error-field' : ''}`}
          type="text"
          name="email"
          value={this.state.email}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
        <div className="error-message">{this.state.emailError}</div>
      </div>
    );
  }

  renderPasswordField() {
    return (
      <div className="input-container">
        <label className="input-label" htmlFor="password">Password:</label>
        <input
          className={`name-input-field ${this.state.passwordError ? 'error-field' : ''}`}
          type="password"
          name="password"
          value={this.state.password}
          onChange={this.handleInputChange}
          onBlur={this.handleBlur}
        />
        <div className="error-message">{this.state.passwordError}</div>
      </div>
    );
  }

  renderLoginForm() {
    return (
      <form onSubmit={this.handleSubmit}>
        {this.renderEmailField()}
        {this.renderPasswordField()}
        <button
          className="submit-button"
          type="submit"
          disabled={this.state.emailError || this.state.passwordError}
        >
          Submit
        </button>
      </form>
    );
  }

  render() {
    return (
      <div className="login-form-container">
        <div className="view-container">
          {this.state.isFormSubmitted ? (
            <div>You have successfully logged in to the system.</div>
          ) : (
            this.renderLoginForm()
          )}
        </div>
      </div>
    );
  }
}

export default LoginForm;
