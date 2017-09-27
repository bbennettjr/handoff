import PropTypes from "prop-types"
import React from "react"
import SignOutButton from "./SignOutButton"

import { Button, Avatar } from "antd"
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
          <Button icon="search" style={styles.large} />
        </Link>

        <SignOutButton />
      </div>
    )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, InForm)
