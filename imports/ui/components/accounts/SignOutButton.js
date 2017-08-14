import React from "react"
import Snackbar from "material-ui/Snackbar"
import Button from "material-ui/Button"

class SignOutButton extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      open: false
    }
  }

  handleTouchTap = () => {
    Meteor.logout()
    this.setState({
      open: true
    })
  }

  handleRequestClose = () => {
    this.setState({
      open: false
    })
  }

  render() {
    // Snackbar doesnt work because its a branch in a tree no longer rendered
    // once signed out in Navigation
    // Agreed
    return (
      <div
        style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
      >
        <Button
          raised={true}
          onTouchTap={Meteor.isCordova ? undefined : this.handleTouchTap}
          onClick={Meteor.isCordova ? this.handleTouchTap : undefined}
          style={{ width: "80%", maxWidth: "256px" }}
        >
          Sign Out
        </Button>
        <Snackbar
          open={this.state.open}
          message="Please sign in again to Handoff"
          autoHideDuration={4000}
          onRequestClose={this.handleRequestClose}
        />
      </div>
    )
  }
}

export default SignOutButton
