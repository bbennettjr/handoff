import React from "react"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import { Accounts } from "meteor/accounts-base"
import Snackbar from "material-ui/Snackbar"
import PropTypes from "prop-types"
class ForgotPassword extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }
  state = {
    snackOpen: false,
    message: "",
    label: "Send Email"
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
        <TextField
          autoFocus={true}
          ref="email"
          type="email"
          errorText={this.state.emailError}
          floatingLabelText="Your Email"
        />
        <br />
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <Button
            secondary={true}
            raised={true}
            labelStyle={{ textTransform: "none" }}
            style={{ width: "80%" }}
            onTouchTap={Meteor.isCordova ? undefined : this.resetPassword}
            onClick={Meteor.isCordova ? this.resetPassword : undefined}
          >
            {this.state.label}
          </Button>
        </div>

        <Snackbar
          open={this.state.snackOpen}
          message={this.state.message}
          autoHideDuration={12000}
          bodyStyle={{ textAlign: "center", minWidth: "10px", width: "100%" }}
          onRequestClose={() => this.setState({ snackOpen: false })}
        />
      </div>
    )
  }
}

export default ForgotPassword
