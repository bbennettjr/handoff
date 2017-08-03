import PropTypes from "prop-types"
import React from "react"
import TextField from "material-ui/TextField"
import { Accounts } from "meteor/accounts-base"
import Snackbar from "material-ui/Snackbar"
import Button from "material-ui/Button"
import { createContainer } from "meteor/react-meteor-data"
import { blue, grey } from "material-ui/colors"

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
    label: "Log In"
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
    let email = this.refs.email.getValue()
    let password = this.refs.password.getValue()

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

        <TextField
          ref="email"
          errorText={this.state.emailError}
          autoFocus={true}
          hintText="Email"
          type="email"
          floatingLabelText="Email"
        />
        <br />
        <TextField
          ref="password"
          errorText={this.state.password1Error}
          hintText="Password"
          floatingLabelText="Password"
          type="password"
        />
        <br />
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <Button
            onTouchTap={Meteor.isCordova ? undefined : this.signIn}
            onClick={Meteor.isCordova ? this.signIn : undefined}
            labelStyle={{ textTransform: "none" }}
            style={{ width: "80%", maxWidth: "256px" }}
          >
            {this.state.label}
          </Button>
        </div>

        <Snackbar
          open={this.state.snackOpen}
          message={this.state.message}
          autoHideDuration={6000}
          bodyStyle={{ textAlign: "center" }}
          onRequestClose={() => this.setState({ snackOpen: false })}
        />
      </div>
    )
  }
}

export default SignInForm
