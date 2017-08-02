import PropTypes from "prop-types"
import React from "react"
import { white, grey50, orange500, orange400 } from "material-ui/styles/colors"
import FlatButton from "material-ui/FlatButton"
import LoginPopover from "./LoginPopover.js"
import { createContainer } from "meteor/react-meteor-data"

class CallToActionWeb extends React.Component {
  static propTypes = {
    user: PropTypes.object
  }

  state = {
    open: false,
    popoverAnchor: null,
    loginColor: grey50
  }

  openPopover = e => {
    e.preventDefault()
    this.setState({
      open: true,
      popoverAnchor: e.currentTarget
    })
  }

  render() {
    // Present SignIn or SignUp to new user
    return (
      <div style={{ display: "inline-block" }}>
        <FlatButton
          backgroundColor={orange500}
          hoverColor={orange400}
          style={{ color: white, display: "inline-block", height: "44px" }}
          label={"Sign In"}
          labelStyle={{ textTransform: "none", fontSize: "1.2em" }}
          onTouchTap={Meteor.isCordova ? undefined : this.openPopover}
          onClick={Meteor.isCordova ? this.openPopover : undefined}
        />
        <LoginPopover
          open={this.state.open}
          anchorEl={this.state.popoverAnchor}
          closeFunc={() => this.setState({ open: false })}
          formState={this.props.formState}
          isMobile={this.props.isMobile}
        />
      </div>
    )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, CallToActionWeb)
