import React from "react"
import { Button } from "antd"

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
          onTouchTap={Meteor.isCordova ? undefined : this.handleTouchTap}
          onClick={Meteor.isCordova ? this.handleTouchTap : undefined}
          style={{ width: "80%", maxWidth: "256px" }}
        >
          Sign Out
        </Button>
      </div>
    )
  }
}

export default SignOutButton
