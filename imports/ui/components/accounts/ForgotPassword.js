import React from "react"

import { Button, Input } from "antd"
import { Accounts } from "meteor/accounts-base"

import PropTypes from "prop-types"
class ForgotPassword extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }
  state = {
    snackOpen: false,
    message: "",
    label: "Send Email",
    email: ""
  }

  isValidEmail = email => {
    let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return emailRegex.test(email)
  }

  resetPassword = e => {
    e.stopPropagation()
    let email = this.refs.email.getValue()
    if (!this.isValidEmail(email)) {
      this.setState({ snackOpen: true, message: "Invalid email" })
      return
    }

    this.setState({ label: "Sending..." })
    Accounts.forgotPassword({ email: email }, err => {
      this.setState({ label: "Send Email" })
      if (err) this.setState({ snackOpen: true, message: err.reason })
      else this.setState({ snackOpen: true, message: "Email Sent", email: "" })
    })
  }

  componentDidMount() {
    window.addEventListener("keypress", this.handleKeyPress)
  }

  componentWillUnmount() {
    window.removeEventListener("keypress", this.handleKeyPress)
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) this.resetPassword(e)
  }

  changeEmail = event => {
    this.setState({ email: event.target.value })
  }

  render() {
    return (
      <div
        onKeyPress={this.handleKeyPress}
        style={{ padding: "0px 10px", textAlign: "center" }}
      >
        <Input
          autoFocus={true}
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          type="email"
          label="Your Email"
        />
        <br />
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <Button
            raised={true}
            style={{ width: "80%" }}
            onClick={this.resetPassword}
          >
            {this.state.label}
          </Button>
        </div>
      </div>
    )
  }
}

export default ForgotPassword
