import PropTypes from "prop-types"
import React from "react"
import TextField from "material-ui/TextField"
import { Accounts } from "meteor/accounts-base"
import Snackbar from "material-ui/Snackbar"
import RaisedButton from "material-ui/RaisedButton"
import FaFacebook from "react-icons/lib/fa/facebook"
import { createContainer } from "meteor/react-meteor-data"
import { blue900, grey400, grey700 } from "material-ui/styles/colors"

const isIOSApp = function() {
  return (
    Meteor.isCordova &&
    !(navigator.userAgent.toLowerCase().indexOf("android") > -1)
  )
}

class SignInForm extends React.Component {
  static contextTypes = {
    router: PropTypes.object
  }

  static propTypes = {
    user: PropTypes.object
  }

  state = {
    snackOpen: false,
    message: "",
    label: "Log In",
    labelFacebook: "Log in with Facebook"
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

  signinWithFacebook = () => {
    Meteor.loginWithFacebook(
      { requestPermissions: ["public_profile", "email"] },
      err => {
        if (err) {
          this.setState({ labelFacebook: "Log in with Facebook" })
          Logger.log("Log in with facebook error: " + err.reason || err.message)
          this.setState({ snackOpen: true, message: err.reason || err.message })
        } else {
          let userId = this.props.user && this.props.user._id
          Meteor.call("checkUserEmail", userId, err => {
            this.setState({ labelFacebook: "Log in with Facebook" })
            if (err) {
              Meteor.logout()
              Meteor.call("delete_User", userId)
              if (err.reason === "already-exists") {
                Logger.log(
                  "After Log in with facebook error: " + err.reason ||
                    err.message
                )
                this.setState({
                  snackOpen: true,
                  message: "Email already exists"
                })
              } else if (err.reason === "does-not-exist") {
                Logger.log(
                  "After Log in with facebook error: " + err.reason ||
                    err.message
                )
                this.setState({
                  snackOpen: true,
                  message: "User does not exist"
                })
              } else {
                Logger.log(
                  "After Log in with facebook error: " + err.reason ||
                    err.message
                )
                this.setState({
                  snackOpen: true,
                  message: err.reason || err.message
                })
              }
            } else {
              this.context.router.push("/app")
            }
          })
        }
      }
    )
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
        // Kvothe, these need to be Meteor.userId() and not use
        // props because this callback fires before the props get down here
        if (Meteor.isCordova) {
          Meteor.call(
            "update_Users",
            { $set: { "profile.signedIntoMobileApp": true } },
            Meteor.userId()
          )
        } else {
          Meteor.call(
            "update_Users",
            { $set: { "profile.signedIntoWebApp": true } },
            Meteor.userId()
          )
        }
        this.context.router.push("/app")
      }
    })
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) this.signIn(e)
  }

  render() {
    let isMobileIOS = isIOSApp()
    let facebookButton = null
    if (this.props.renderFacebookButton) {
      facebookButton = (
        <RaisedButton
          label={this.state.labelFacebook}
          labelStyle={{ textTransform: "none" }}
          style={{ width: "80%", maxWidth: "256px" }}
          onTouchTap={Meteor.isCordova ? undefined : this.signinWithFacebook}
          onClick={Meteor.isCordova ? this.signinWithFacebook : undefined}
          backgroundColor={blue900}
          labelColor={"white"}
          icon={<FaFacebook />}
        />
      )
    }
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
          <RaisedButton
            secondary={true}
            label={this.state.label}
            onTouchTap={Meteor.isCordova ? undefined : this.signIn}
            onClick={Meteor.isCordova ? this.signIn : undefined}
            labelStyle={{ textTransform: "none" }}
            style={{ width: "80%", maxWidth: "256px" }}
          />
        </div>
        {isMobileIOS
          ? null
          : <div>
              <div
                className="commitinlineflex"
                style={{
                  justifyContent: "center",
                  WebkitJustifyContent: "center"
                }}
              >
                <div
                  style={{
                    width: "100px",
                    height: "8px",
                    borderBottom: "1px solid " + grey400
                  }}
                />
                <div
                  style={{
                    fontSize: "16px",
                    color: grey700,
                    padding: "0px 16px"
                  }}
                >
                  OR
                </div>
                <div
                  style={{
                    width: "100px",
                    height: "8px",
                    borderBottom: "1px solid " + grey400
                  }}
                />
              </div>
              <br />

              <div
                style={{
                  textAlign: "center",
                  marginTop: "8px",
                  marginBottom: "8px"
                }}
              >
                {facebookButton}
              </div>
              <br />
            </div>}
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

