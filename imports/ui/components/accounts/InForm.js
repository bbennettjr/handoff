import PropTypes from "prop-types"
import React from "react"
import SignOutButton from "./SignOutButton"

import { Button, Avatar } from "antd"
import { createContainer } from "meteor/react-meteor-data"
import { Link } from "react-router-dom"

class InForm extends React.Component {
  static propTypes = {
    user: PropTypes.object.isRequired,
    closePopover: PropTypes.func.isRequired
  }

  render() {
    return (
      <div
        style={{
          margin: "auto"
        }}
      >
        <Link to={`/account/${this.props.user._id}`}>
          <Button icon="user" type="primary">
            Account
          </Button>
        </Link>

        <SignOutButton />
      </div>
    )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, InForm)
