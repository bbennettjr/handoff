import PropTypes from "prop-types"
import React from "react"

import LoginForm from "./LoginForm"
import ForgotPassword from "./ForgotPassword"
import RegisterForm from "./RegisterForm"
import { createContainer } from "meteor/react-meteor-data"
class AtForm extends React.Component {
  static propTypes = {
    formState: PropTypes.string,
    user: PropTypes.object,
    closePopover: PropTypes.func.isRequired
  }

  state = { form: this.props.formState || "signIn" }

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
          <RegisterForm />
          <div style={{ textAlign: "center", padding: " 5px 10px" }}>
            <span>
              Already use Handoff? &nbsp;
              <a
                style={{ cursor: "pointer", textDecoration: "underline" }}
                onClick={() => this.setState({ form: "signIn" })}
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
          <LoginForm />

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
              onClick={() => this.setState({ form: "forgotPassword" })}
            >
              Forgot password?
            </a>
            <a
              style={{
                cursor: "pointer",
                textDecoration: "underline",
                paddingLeft: "10px"
              }}
              onClick={() => this.setState({ form: "signUp" })}
            >
              Sign up now
            </a>
          </div>
        </div>
      )
    if (this.state.form === "forgotPassword")
      return (
        <div style={{ maxWidth: "300px", margin: "auto", padding: "16px 0px" }}>
          <ForgotPassword
            user={this.props.user}
            closePopover={this.props.closePopover}
          />

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
              onClick={() => this.setState({ form: "signIn" })}
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
