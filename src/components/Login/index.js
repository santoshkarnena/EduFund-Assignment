import {Component} from 'react'
import './index.css'

export default class Login extends Component {
  state = {
    email: '',
    password: '',
    passwordError: false,
    emailError: false,
    loginError: false,
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

  onChangeEmail = e => {
    this.setState({email: e.target.value})
  }

  onChangePassword = e => {
    this.setState({password: e.target.value})
  }

  onClickLogin = event => {
    event.preventDefault()

    const {email, password} = this.state
    const userData = JSON.parse(localStorage.getItem(email))

    if (email === '') {
      this.setState({emailError: true})
    } else if (password === '') {
      this.setState({passwordError: true})
    } else if (userData === null) {
      this.setState({loginError: true})
    } else if (password !== userData.password) {
      this.setState({loginError: true})
    } else {
      console.log(userData)
      this.setState({
        email: '',
        password: '',
        emailError: false,
        passwordError: false,
        loginError: false,
      })
      const {history} = this.props
      history.replace('/mf')
    }
  }

  newUser = () => {
    const {history} = this.props
    history.replace('/signup')
  }

  render() {
    const {email, password, emailError, passwordError, loginError} = this.state
    return (
      <div className="body">
        <div className="form-container">
          <form className="login-form" onSubmit={this.onClickLogin}>
            <h1 className="heading">Sign In</h1>

            <label htmlFor="email" className="label">
              Email
            </label>
            <input
              onChange={this.onChangeEmail}
              onBlur={this.onBlurEmail}
              value={email}
              id="email"
              type="email"
              className="input-box"
              placeholder="Enter email"
            />
            {emailError ? <p className="error-msg">*Required</p> : null}

            <label className="label" htmlFor="password">
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
            {passwordError ? <p className="error-msg">*Required</p> : null}

            <button type="submit" className="sign-button">
              SignIn
            </button>
            {loginError ? (
              <p className="error-msg">Invalid username or password</p>
            ) : null}
            <p className="forgot-password">
              New user
              <button
                type="button"
                className="forgot-button"
                onClick={this.newUser}
              >
                Signup?
              </button>
            </p>
          </form>
        </div>
      </div>
    )
  }
}
