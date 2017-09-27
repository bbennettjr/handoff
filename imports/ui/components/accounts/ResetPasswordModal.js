import PropTypes from "prop-types"
import React from "react"
import { Accounts } from "meteor/accounts-base"
import {Input} from "antd"

class ResetPasswordModal extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    onRequestClose: PropTypes.func.isRequired,
    token: PropTypes.string.isRequired,
    goToPath: PropTypes.string.isRequired
  }

  state = {
    password1Error: "",
    password2Error: ""
  }

  resetErrors = () => {
    this.setState({
      password1Error: "",
      password2Error: ""
    })
  }

  goToFunc = () => {
    this.context.router.replace({
      pathname: this.props.goToPath,
      state: { snackbarOpen: true, snackbarMessage: "Password reset" }
    })
  }

  errorMessage = error => {
    this.context.router.replace({
      pathname: this.props.goToPath,
      state: { snackbarOpen: true, snackbarMessage: error }
    })
  }

  resetPassword = e => {
    e.stopPropagation()
    this.resetErrors()
    let password1 = this.refs.password1.getValue()
    let password2 = this.refs.password2.getValue()

    // Check passsword
    if (password1.length < 6) {
      this.setState({
        password1Error: "Need at least 6 characters in your password"
      })
      return
    }
    if (password2 !== password1) {
      this.setState({ password2Error: "Passwords don't match" })
      return
    }

    Accounts.resetPassword(this.props.token, password1, err => {
      if (this.props.onRequestClose) this.props.onRequestClose()
      if (err) this.errorMessage(err.reason)
      else this.goToFunc()
    })
  }

  changePassword1 = event => {
    this.setState({ password1: event.target.value })
  }

  changePassword2 = event => {
    this.setState({ password2: event.target.value })
  }

  handleKeyPress = e => {
    if (e.keyCode === 13) this.resetPassword(e)
  }

  formComponent = () => {
    return (
      <div
        onKeyPress={this.handleKeyPress}
        className="commitflex"
        style={{
          justifyContent: "space-between",
          WebkitJustifyContent: "space-between",
          flexFlow: "row wrap",
          WebkitFlexFlow: "row wrap"
        }}
      >
        <Input
          type="password"
          ref="password1"
        />
        <Input
          type="password"
          ref="password2"
        />
      </div>
    )
  }

  render() {
    return (
      
        {this.formComponent()}
      
    )
  }
}

export default ResetPasswordModal
