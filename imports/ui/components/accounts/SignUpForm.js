import PropTypes from "prop-types"
import React from "react"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import { Accounts } from "meteor/accounts-base"
import Snackbar from "material-ui/Snackbar"
import SelectField from "material-ui/SelectField"
import MenuItem from "material-ui/MenuItem"
import { blue900, grey400, grey700 } from "material-ui/styles/colors"
import { createContainer } from "meteor/react-meteor-data"

class SignUpForm extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    closePopover: PropTypes.func.isRequired
  }

  state = {
    snackOpen: false,
    message: "",
    label: "Continue"
  }

  isValidEmail = email => {
    let emailRegex = /^([\w-]+(?:\.[\w-]+)*)@((?:[\w-]+\.)*\w[\w-]{0,66})\.([a-z]{2,6}(?:\.[a-z]{2})?)$/i
    return emailRegex.test(email)
  }

  reset = () => {
    this.setState({
      emailError: "",
      password1Error: "",
      password2Error: "",
      selectError: ""
    })
  }

  signUp = e => {
    e.preventDefault()
    // Check email
    this.reset()
    let email = this.refs.email.getValue()
    let allGood = true
    if (!this.isValidEmail(email)) {
      allGood = false
      this.setState({ emailError: "Not a valid email" })
    }

    // Check passsword
    let password1 = this.refs.password1.getValue()
    if (password1.length < 6) {
      allGood = false
      this.setState({
        password1Error: "Need at least 6 characters in your password"
      })
    }

    // Check password2
    let password2 = this.refs.password2.getValue()
    if (password2 !== password1) {
      allGood = false
      this.setState({ password2Error: "Passwords don't match" })
    }

    if (allGood) {
      this.setState({ label: "Creating Account..." })
      Accounts.createUser(
        {
          email: email,
          password: password1
        },
        err => {
          this.setState({ label: "Continue" })
          if (err) {
            console.log("Create Account error: " + err.reason)
            this.setState({ snackOpen: true, message: err.reason })
          } else {
            this.props.closePopover()
            // this.context.router.push("/app")
          }
        }
      )
    }
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) this.signUp(e)
  }

  render() {
    return (
      <div
        onKeyPress={this.handleKeyPress}
        style={{ padding: "0px 10px", textAlign: "center" }}
      >

        <TextField
          ref="email"
          autoFocus={true}
          type="email"
          errorText={this.state.emailError}
          floatingLabelText="Email"
        />
        <br />
        <TextField
          ref="password1"
          errorText={this.state.password1Error}
          floatingLabelText="Password"
          type="password"
        />
        <br />
        <TextField
          ref="password2"
          errorText={this.state.password2Error}
          floatingLabelText="Password (again)"
          type="password"
        />
        <br />

        <br />
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <RaisedButton
            secondary={true}
            labelStyle={{ textTransform: "none" }}
            style={{ width: "80%", maxWidth: "256px" }}
            label={this.state.label}
            onTouchTap={Meteor.isCordova ? undefined : this.signUp}
            onClick={Meteor.isCordova ? this.signUp : undefined}
          />
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

export default SignUpForm
