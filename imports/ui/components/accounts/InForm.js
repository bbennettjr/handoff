import PropTypes from "prop-types"
import React from "react"
import SignOutButton from "./SignOutButton"

import IconButton from "material-ui/IconButton"
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle"
import Divider from "material-ui/Divider"
import RaisedButton from "material-ui/RaisedButton"
import { withRouter } from "react-router-dom"
import { createContainer } from "meteor/react-meteor-data"
import { Link } from "react-router-dom"

const styles = {
  largeIcon: {
    width: 60,
    height: 60
  },
  large: {
    width: 120,
    height: 120,
    padding: 30
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
        <Link to={`/account/${this.props.user._id}`}>
          <IconButton iconStyle={styles.largeIcon} style={styles.large}>
            <ActionAccountCircle />
          </IconButton>
        </Link>
        <Divider />
        <SignOutButton />
      </div>
    )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, InForm)
