import React from "react"
import { Button } from "antd"

class SignOutButton extends React.Component {
  render() {
    // Snackbar doesnt work because its a branch in a tree no longer rendered
    // once signed out in Navigation
    // Agreed
    return (
      <div
        style={{ textAlign: "center", marginTop: "8px", marginBottom: "8px" }}
      >
        <Button
          onClick={() => Meteor.logout()}
          style={{ width: "80%", maxWidth: "256px" }}
        >
          Sign Out
        </Button>
      </div>
    )
  }
}

export default SignOutButton
