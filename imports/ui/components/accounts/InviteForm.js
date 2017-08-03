import PropTypes from "prop-types"
import React from "react"
import TextField from "material-ui/TextField"
import Button from "material-ui/Button"
import { Accounts } from "meteor/accounts-base"
import Snackbar from "material-ui/Snackbar"

class InviteForm extends React.Component {
  constructor(props) {
    super(props)
    let userType = "athlete"
    if (props.notification && props.notification.type === "InviteCoach")
      userType = "coach"

    this.state = {
      snackOpen: false,
      message: "",
      label: "Create Account",
      userType
    }
  }
  static propTypes = {
    notification: PropTypes.object,
    user: PropTypes.object
  }

  getEmail = () => {
    return this.props.notification ? this.props.notification.emailTo : ""
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
    let email = this.getEmail()
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
      let userType = this.state.userType
      Accounts.createUser(
        { email: email, password: password1, userType, invited: true },
        err => {
          this.setState({ label: "Create Account" })
          if (err) {
            this.setState({ snackOpen: true, message: err.reason })
          } else {
            //Handle accept notification here so it automatically syncs this user's account up via the invite... DOPE!
            Meteor.call("accept_Invite", this.props.notification)
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
        style={{
          paddingLeft: "10px",
          paddingRight: "10px",
          textAlign: "center"
        }}
      >
        <TextField
          disabled={true}
          defaultValue={this.getEmail()}
          errorText={this.state.emailError}
          type="email"
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
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <Button
            secondary={true}
            onTouchTap={Meteor.isCordova ? undefined : this.signUp}
            onClick={Meteor.isCordova ? this.signUp : undefined}
          >
            {this.state.label}
          </Button>
        </div>
        <Snackbar
          open={this.state.snackOpen}
          message={this.state.message}
          autoHideDuration={6000}
          bodyStyle={{ textAlign: "center", minWidth: "10px", width: "100%" }}
          onRequestClose={() => this.setState({ snackOpen: false })}
        />
      </div>
    )
  }
}

export default InviteForm
