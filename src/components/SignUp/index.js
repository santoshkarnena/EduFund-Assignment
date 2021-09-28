import {Component} from 'react'
import './index.css'

export default class SignUp extends Component {
  state = {
    name: '',
    email: '',
    password: '',
    dob: '',
    gender: 'male',
    nameError: false,
    emailError: false,
    passwordError: false,
    dobError: false,
    alreadyExisting: false,
  }

  alreadyRegistered = () => {
    const {history} = this.props
    history.replace('/login')
  }

  onSubmitForm = event => {
    event.preventDefault()

    const {name, email, password, dob, gender} = this.state

    const userData = {name, email, password, dob, gender}
    const emailData = JSON.parse(localStorage.getItem(email))

    if (name === '') {
      this.setState({nameError: true})
    } else if (email === '') {
      this.setState({emailError: true})
    } else if (emailData !== null) {
      this.setState({emailError: true, alreadyExisting: true})
    } else if (password === '') {
      this.setState({passwordError: true})
    } else if (password.length < 8) {
      this.setState({lengthError: true, passwordError: true})
    } else if (dob === '') {
      this.setState({dobError: true})
    } else {
      const {history} = this.props
      localStorage.setItem(email, JSON.stringify(userData))
      this.setState({
        name: '',
        email: '',
        password: '',
        dob: '',
        gender: 'male',
        nameError: false,
        emailError: false,
        passwordError: false,
        dobError: false,
        lengthError: false,
      })
      history.replace('/mf')
    }
  }

  onChangeName = e => {
    this.setState({name: e.target.value})
  }

  onChangeEmail = e => {
    this.setState({email: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onChangeDob = e => {
    this.setState({dob: e.target.value})
  }

  onChangeGender = e => {
    this.setState({gender: e.target.value})
  }

  onBlurName = e => {
    if (e.target.value === '') {
      this.setState({nameError: true})
    } else {
      this.setState({nameError: false})
    }
  }

  onBlurEmail = e => {
    if (e.target.value === '') {
      this.setState({emailError: true})
    } else {
      this.setState({emailError: false})
    }
  }

  onBlurPassword = e => {
    if (e.target.value === '') {
      this.setState({passwordError: true})
    } else {
      this.setState({passwordError: false})
    }
  }

  onBlurDob = e => {
    if (e.target.value === '') {
      this.setState({dobError: true})
    } else {
      this.setState({dobError: false})
    }
  }

  render() {
    const {
      name,
      email,
      password,
      dob,
      nameError,
      emailError,
      passwordError,
      dobError,
      lengthError,
      alreadyExisting,
    } = this.state
    const passwordErrorMsg = lengthError ? 'Password is too short' : '*Required'
    const emailErrorMsg = alreadyExisting
      ? 'Email already existed'
      : '*Required'
    return (
      <div className="body">
        <div className="form-container">
          <form className="signup-form" onSubmit={this.onSubmitForm}>
            <h1 className="heading">Sign Up</h1>
            <label htmlFor="name" className="label">
              Name
            </label>
            <input
              onChange={this.onChangeName}
              onBlur={this.onBlurName}
              value={name}
              type="text"
              id="name"
              className="input-box"
              placeholder="Enter name"
            />
            {nameError ? <p className="error-msg">*Required</p> : null}
            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              onChange={this.onChangeEmail}
              onBlur={this.onBlurEmail}
              value={email}
              type="email"
              id="email"
              className="input-box"
              placeholder="Enter email"
            />
            {emailError ? <p className="error-msg">{emailErrorMsg}</p> : null}
            <label htmlFor="password" className="label">
              Password
            </label>
            <input
              onChange={this.onChangePassword}
              onBlur={this.onBlurPassword}
              value={password}
              id="password"
              type="password"
              className="input-box"
              placeholder="Enter password"
            />
            {passwordError ? (
              <p className="error-msg">{passwordErrorMsg}</p>
            ) : null}
            <p className="label">Gender </p>
            <div className="gender-section">
              <div className="gender">
                <input
                  onChange={this.onChangeGender}
                  checked
                  type="radio"
                  name="gender"
                  value="male"
                  id="male"
                />
                <label htmlFor="male">Male</label>
              </div>
              <div className="gender">
                <input
                  onChange={this.onChangeGender}
                  type="radio"
                  name="gender"
                  value="female"
                  id="female"
                />
                <label htmlFor="female">Female</label>
              </div>
              <div className="gender">
                <input
                  onChange={this.onChangeGender}
                  type="radio"
                  name="gender"
                  value="other"
                  id="other"
                />
                <label htmlFor="other">Others</label>
              </div>
            </div>
            <label className="label" htmlFor="dob">
              Date of birth
            </label>
            <input
              onChange={this.onChangeDob}
              onBlur={this.onBlurDob}
              value={dob}
              type="date"
              id="dob"
              placeholder="dd/mm/yyyy"
              className="input-box"
            />
            {dobError ? <p className="error-msg">*Required</p> : null}
            <button type="submit" className="signup-button">
              Sign Up
            </button>
            <p className="forgot-password">
              Already registered
              <button
                onClick={this.alreadyRegistered}
                type="button"
                className="al-button"
              >
                sign in?
              </button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
