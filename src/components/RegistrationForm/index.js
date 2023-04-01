// Write your JS code here
import {Component} from 'react'
import './index.css'
import symbol from './rights_symbol.jpg';


class RegistrationFrom extends Component {
  state = {
    firstNameInput: '',
    lastNameInput: '',
    emailInput: '',
    passwordInput: '',
    confirmPasswordInput: '',
    showFirstNameError: false,
    showLastNameError: false,
    showEmailError: false,
    showPasswordError: false,
    showConfirmPasswordError: false,
    isFormSubmitted: false,
  }
  
  onChangePassword = event => {
    const {target} = event
    const {value} = target
  
    this.setState({
      passwordInput: value,
    })
  }
  
  onBlurPassword = () => {
    const isValidPassword = this.validatePassword()
  
    this.setState({showPasswordError: !isValidPassword})
  }
  
  onChangeConfirmPassword = event => {
    const {target} = event
    const {value} = target
  
    this.setState({
      confirmPasswordInput: value,
    })
  }
  
  onBlurConfirmPassword = () => {
    const isValidConfirmPassword = this.validateConfirmPassword()
  
    this.setState({showConfirmPasswordError: !isValidConfirmPassword})
  }

  onChangeEmail = event => {
    const {target} = event
    const {value} = target
  
    this.setState({
      emailInput: value,
    })
  }
  
  onBlurEmail = () => {
    const isValidEmail = this.validateEmail()
  
    this.setState({showEmailError: !isValidEmail})
  }
  
  
  renderRegistrationForm = () => {
    const {showFirstNameError, showLastNameError, showPasswordError, showConfirmPasswordError,showEmailError} = this.state
  
    return (
      <form className="form-container" onSubmit={this.onSubmitForm}>
        {this.renderFirstNameField()}
        {showFirstNameError && <p className="error-message">Required</p>}
        {this.renderLastNameField()}
        {showLastNameError && <p className="error-message">Required</p>}
        
        <div className="input-container" >
        <label className="input-label"  htmlFor="emailInput">Email:</label>
        <input
          type="email"
          id="emailInput"
          className={showConfirmPasswordError ? 'name-input-field error-field' : 'name-input-field'}
          name="emailInput"
          placeholder="email"
          value={this.state.emailInput}
          onChange={this.onChangeEmail}
          onBlur={this.onBlurEmail}
          required
        />
        {showEmailError && <span className="error-message">Please enter a valid email address</span>}
      </div>

        <div className="input-container">
          <label className="input-label" htmlFor="password">
            PASSWORD
          </label>
          <input
            type="password"
            id="password"
            className={showPasswordError ? 'name-input-field error-field' : 'name-input-field'}
            placeholder="Password"
            value={this.state.passwordInput}
            onChange={this.onChangePassword}
            onBlur={this.onBlurPassword}
          />
          {showPasswordError && <p className="error-message">Password is required</p>}
        </div>
        <div className="input-container">
          <label className="input-label" htmlFor="confirmPassword">
            CONFIRM PASSWORD
          </label>
          <input
            type="password"
            id="confirmPassword"
            className={showConfirmPasswordError ? 'name-input-field error-field' : 'name-input-field'}
            placeholder="Confirm Password"
            value={this.state.confirmPasswordInput}
            onChange={this.onChangeConfirmPassword}
            onBlur={this.onBlurConfirmPassword}
          />
          {showConfirmPasswordError && <p className="error-message">Passwords do not match</p>}
        </div>


        
        <button type="submit" className="submit-button">
          Submit
        </button>
      </form>
    )
  }

  
      
  onBlurLastName = () => {
    const isValidLastName = this.validateLastName()

    this.setState({showLastNameError: !isValidLastName})
  }

  onChangeLastName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      lastNameInput: value,
    })
  }

  renderLastNameField = () => {
    const {lastNameInput, showLastNameError} = this.state
    const className = showLastNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="lastName">
          LAST NAME
        </label>
        <input
          type="text"
          id="lastName"
          className={className}
          value={lastNameInput}
          placeholder="Last name"
          onChange={this.onChangeLastName}
          onBlur={this.onBlurLastName}
        />
      </div>
    )
  }

  onBlurFirstName = () => {
    const isValidFirstName = this.validateFirstName()

    this.setState({showFirstNameError: !isValidFirstName})
  }

  onChangeFirstName = event => {
    const {target} = event
    const {value} = target

    this.setState({
      firstNameInput: value,
    })
  }

  renderFirstNameField = () => {
    const {firstNameInput, showFirstNameError} = this.state
    const className = showFirstNameError
      ? 'name-input-field error-field'
      : 'name-input-field'

    return (
      <div className="input-container">
        <label className="input-label" htmlFor="firstName">
          FIRST NAME
        </label>
        <input
          type="text"
          id="firstName"
          className={className}
          value={firstNameInput}
          placeholder="First name"
          onChange={this.onChangeFirstName}
          onBlur={this.onBlurFirstName}
        />
      </div>
    )
  }
  validatePassword = () => {
    const {passwordInput} = this.state
    return passwordInput !== ''
  }
  
  validateConfirmPassword = () => {
    const {passwordInput, confirmPasswordInput} = this.state
    return passwordInput === confirmPasswordInput && confirmPasswordInput !== ''
  }
  
  validateLastName = () => {
    const {lastNameInput} = this.state

    return lastNameInput !== ''
  }

  validateFirstName = () => {
    const {firstNameInput} = this.state

    return firstNameInput !== ''
  }

  validateEmail = () => {
    const {emailInput} = this.state
  
    // Email regex pattern
    const emailPattern = /^\w+([.-]?\w+)*@\w+([.-]?\w+)*(\.\w{2,})+$/
    return emailPattern.test(emailInput)
  }
  

  onSubmitForm = event => {
    event.preventDefault()
    const isValidFirstName = this.validateFirstName()
    const isValidLastName = this.validateLastName()
    const isValidPassword = this.validatePassword()
    const isValidConfirmPassword = this.validateConfirmPassword()
    const isValidEmail = this.validateEmail()

    if (isValidFirstName && isValidLastName && isValidPassword && isValidConfirmPassword) {
      this.setState({isFormSubmitted: true})
    } else {
      this.setState({
        showFirstNameError: !isValidFirstName,
        showLastNameError: !isValidLastName,
        showPasswordError:!isValidPassword,
        showConfirmPasswordError: !isValidConfirmPassword,
        showEmailError: !isValidEmail,
        isFormSubmitted: false,
      })
    }
  }



  onClickSubmitAnotherResponse = () => {
    this.setState(prevState => ({
      isFormSubmitted: !prevState.isFormSubmitted,
      firstNameInput: '',
      lastNameInput: '',
    }))
  }

  renderSubmissionSuccessView = () => (
    <>
    
     <img src={symbol} alt="form" width="100px"/>
      <p>Submitted Successfully</p>

      
      <button
        type="button"
        className="submit-button"
        onClick={this.onClickSubmitAnotherResponse}
      >
        Submit Another Response
      </button>
    </>
  )


  render() {
    const {isFormSubmitted} = this.state

    return (
      <div className="registration-form-container">
        <h1 className="form-title">REGISTRATION</h1>
        <div className="view-container">
          {isFormSubmitted
            ? this.renderSubmissionSuccessView()
            : this.renderRegistrationForm()}
        </div>
      </div>
    )
  }
}

export default RegistrationFrom