import PropTypes from "prop-types"
import React from "react"
import { white, grey50, orange500, orange400 } from "material-ui/styles/colors"
import FlatButton from "material-ui/FlatButton"
import LoginPopover from "./LoginPopover.js"

class CallToActionWeb extends React.Component {
  static contextTypes = {
    router: PropTypes.object.isRequired,
    formState: PropTypes.string,
    isIos: PropTypes.bool,
    isAndroid: PropTypes.bool,
    user: PropTypes.object
  }

  state = {
    open: false,
    popoverAnchor: null,
    loginColor: grey50
  }

  openSignInPopoverOrLogin = e => {
    e.preventDefault()
    this.setState({
      open: true,
      popoverAnchor: e.currentTarget
    })
  }

  openAndroidApp = () => {
    FacebookPixelCommit.track(
      "ViewContent",
      {
        content_type: "Swimming Workout App",
        content_name: "Download Intention",
        content_category: "Android App",
        value: FacebookPixelCommit.values["downloadIntention"],
        currency: "USD"
      },
      this.props.user
    )
    AnalyticsCommit.track("Android App View", this.props.user)
    window.open(
      "https://play.google.com/store/apps/details?id=com.commitswim&hl=en"
    )
  }

  openIosApp = () => {
    FacebookPixelCommit.track(
      "ViewContent",
      {
        content_type: "Swimming Workout App",
        content_name: "Download Intention",
        content_category: "iOS App",
        value: FacebookPixelCommit.values["downloadIntention"],
        currency: "USD"
      },
      this.props.user
    )
    AnalyticsCommit.track("iOS App View", this.props.user)
    window.open(
      "https://itunes.apple.com/us/app/commit-swimming-workouts/id1054029727?ls=1&mt=8"
    )
  }

  goToSignup = () => {
    this.context.router.push("/signup")
  }

  goIntoApp = () => {
    this.context.router.push("/app")
  }

  render() {
    let takeAction = this.openSignInPopoverOrLogin
    if (this.props.isMobile) {
      takeAction = this.goToSignup
    }
    let label = this.props.label
    if (this.context.isIos) {
      takeAction = this.openIosApp
      label = "Get Commit for iOS"
      if (this.props.shortLabel) {
        label = "Download app"
      }
    } else if (this.context.isAndroid) {
      takeAction = this.openAndroidApp
      label = "Get Commit for Android"
      if (this.props.shortLabel) {
        label = "Download app"
      }
    } else if (this.props.user) {
      label = "Sign in"
      takeAction = this.goIntoApp
    }
    let button = (
      <FlatButton
        backgroundColor={orange500}
        hoverColor={orange400}
        style={{ color: white, display: "inline-block", height: "44px" }}
        label={label}
        labelStyle={{ textTransform: "none", fontSize: "1.2em" }}
        onTouchTap={Meteor.isCordova ? undefined : takeAction}
        onClick={Meteor.isCordova ? takeAction : undefined}
      />
    )

    if (this.props.loginOnly) {
      button = (
        <FlatButton
          style={{
            display: "inline-block",
            border: "2px solid " + this.props.color,
            margin: "0px 8px"
          }}
          labelStyle={{ textTransform: "none" }}
          onTouchTap={
            Meteor.isCordova ? undefined : this.openSignInPopoverOrLogin
          }
          onClick={Meteor.isCordova ? this.openSignInPopoverOrLogin : undefined}
        >
          <div
            style={{
              textTransform: "capitalize",
              color: this.props.color,
              lineHeight: "100%",
              fontWeight: 500
            }}
          >
            {this.props.label}
          </div>
        </FlatButton>
      )
    }

    return (
      <div style={{ display: "inline-block" }}>
        {button}
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

export default CallToActionWeb
