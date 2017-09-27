import PropTypes from "prop-types"
import React from "react"
import { Input, Button } from "antd"
import { Accounts } from "meteor/accounts-base"

class SignUpForm extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    closePopover: PropTypes.func.isRequired
  }

  state = {
    snackOpen: false,
    message: "",
    label: "Continue",
    email: "",
    password1: "",
    password2: ""
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
    let email = this.state.email
    let allGood = true
    if (!this.isValidEmail(email)) {
      allGood = false
      this.setState({ emailError: "Not a valid email" })
    }

    // Check passsword
    let password1 = this.state.password1
    if (password1.length < 6) {
      allGood = false
      this.setState({
        password1Error: "Need at least 6 characters in your password"
      })
    }

    // Check password2
    let password2 = this.state.password2
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
        <Input
          value={this.state.email}
          onChange={e => this.setState({ email: e.target.value })}
          autoFocus={true}
          type="email"
          label="Email"
        />
        <br />
        <Input
          value={this.state.password1}
          onChange={e => this.setState({ password1: e.target.value })}
          label="Password"
          type="password"
        />
        <br />
        <Input
          value={this.state.password2}
          onChange={e => this.setState({ password2: e.target.value })}
          label="Password (again)"
          type="password"
        />
        <br />

        <br />
        <div
          style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
        >
          <Button
            style={{ width: "80%", maxWidth: "256px" }}
            onClick={Meteor.isCordova ? this.signUp : undefined}
          >
            {this.state.label}
          </Button>
        </div>
      </div>
    )
  }
}

export default SignUpForm
