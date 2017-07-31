import PropTypes from "prop-types"
import React from "react"

import SignUpForm from "./SignUpForm.js"
import SignInForm from "./SignInForm.js"
import ForgotPassword from "./ForgotPassword.js"
import { createContainer } from "meteor/react-meteor-data"
class AtForm extends React.Component {
  static propTypes = {
    formState: PropTypes.string,
    user: PropTypes.object
  }

  state = { form: this.props.formState || "signUp" }

  render() {
    if (this.state.form === "signUp")
      return (
        <div
          style={{
            maxWidth: "300px",
            margin: "auto",
            padding: "0px 0px 16px 0px"
          }}
        >
          <SignUpForm isMobile={this.props.isMobile} user={this.props.user} />
          <div style={{ textAlign: "center", padding: " 5px 10px" }}>
            <span>
              Already use Commit? &nbsp;
              <a
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onTouchTap={
                  Meteor.isCordova
                    ? undefined
                    : () => this.setState({ form: "signIn" })
                }
                onClick={
                  Meteor.isCordova
                    ? () => this.setState({ form: "signIn" })
                    : undefined
                }
              >
                Log In
              </a>
            </span>
          </div>
        </div>
      )
    if (this.state.form === "signIn")
      return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "16px 0px" }}>
          <SignInForm user={this.props.user} />

          <div
            style={{
              display: "flex",
              justifyContent: "space-around",
              WebkitJustifyContent: "space-around",
              padding: " 5px 10px"
            }}
          >
            <a
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onTouchTap={
                Meteor.isCordova
                  ? undefined
                  : () => this.setState({ form: "forgotPassword" })
              }
              onClick={
                Meteor.isCordova
                  ? () => this.setState({ form: "forgotPassword" })
                  : undefined
              }
            >
              Forgot password?
            </a>
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                paddingLeft: "10px"
              }}
              onTouchTap={
                Meteor.isCordova
                  ? undefined
                  : () => this.setState({ form: "signIn" })
              }
              onClick={
                Meteor.isCordova
                  ? () => this.setState({ form: "signUp" })
                  : undefined
              }
            >
              Sign up now
            </a>
          </div>
        </div>
      )
    if (this.state.form === "forgotPassword")
      return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "16px 0px" }}>
          <ForgotPassword user={this.props.user} />

          <div
            style={{
              display: "flex",
              justifyContent: "flex-end",
              WebkitJustifyContent: "flex-end",
              padding: " 5px 10px"
            }}
          >
            <a
              style={{ cursor: "pointer", textDecoration: "underline" }}
              onTouchTap={
                Meteor.isCordova
                  ? undefined
                  : () => this.setState({ form: "signIn" })
              }
              onClick={
                Meteor.isCordova
                  ? () => this.setState({ form: "signIn" })
                  : undefined
              }
            >
              Back to log in
            </a>
          </div>
        </div>
      )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, AtForm)
