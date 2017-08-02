import PropTypes from "prop-types"
import React from "react"
import SignOutButton from "./SignOutButton"

import IconButton from "material-ui/IconButton"
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle"
import Divider from "material-ui/Divider"
import RaisedButton from "material-ui/RaisedButton"

import { createContainer } from "meteor/react-meteor-data"

const styles = {
  mediumIcon: {
    width: 48,
    height: 48
  },
  medium: {
    width: 96,
    height: 96,
    padding: 24
  }
}

class InForm extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    closePopover: PropTypes.func.isRequired
  }

  render() {
    return (
      <div
        style={{
          maxWidth: "300px",
          margin: "auto",
          padding: "0px 0px 16px 0px"
        }}
      >

        <IconButton
          iconStyle={styles.mediumIcon}
          style={styles.medium}
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
          <ActionAccountCircle />
        </IconButton>
        <Divider />
        <SignOutButton />
      </div>
    )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, InForm)
