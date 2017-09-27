import PropTypes from "prop-types"
import React from "react"
import { Button, Input } from "antd"

const isIOSApp = function() {
  return (
    Meteor.isCordova &&
    !(navigator.userAgent.toLowerCase().indexOf("android") > -1)
  )
}

class SignInForm extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    closePopover: PropTypes.func.isRequired
  }

  state = {
    snackOpen: false,
    message: "",
    label: "Log In",
    email: "",
    password: ""
  }

  isValidEmail = email => {
    let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return emailRegex.test(email)
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.handleKeyPress)
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) {
      this.signIn()
    }
  }

  signIn = e => {
    e.preventDefault()
    let email = this.state.email
    let password = this.state.password

    this.setState({ label: "Logging In..." })
    Meteor.loginWithPassword({ email: email }, password, err => {
      this.setState({ label: "Log In" })
      if (err) {
        this.setState({ snackOpen: true, message: err.reason })
      } else {
        this.props.closePopover()
        // this.context.router.push("/app")
      }
    })
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) this.signIn(e)
  }

  render() {
    let isMobileIOS = isIOSApp()

    return (
      <div
        onKeyPress={this.handleKeyPress}
        style={{ padding: "0px 10px", textAlign: "center" }}
      >
        <Input
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          autoFocus={true}
          type="email"
          label="Email"
        />
        <br />
        <Input
          value={this.state.password}
          onChange={e => this.setState({ password: e.target.value })}
          label="Password"
          type="password"
        />
        <br />
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <Button
            onClick={Meteor.isCordova ? this.signIn : undefined}
            style={{ width: "80%", maxWidth: "256px" }}
          >
            {this.state.label}
          </Button>
        </div>
      </div>
    )
  }
}

export default SignInForm
