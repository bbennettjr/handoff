import React from "react"
import { Link } from "react-router-dom"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import Search from "./navigation-controls/search.js"
import "antd/dist/antd.css"
import PropTypes from "prop-types"
import { createContainer } from "meteor/react-meteor-data"
const styles = {
  title: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    marginRight: "50px",
    fontSize: "18px"
  },
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "center",
    flex: 1
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
    flex: 1
  },
  leftButtons: {
    marginRight: "16px"
  },
  rightSearch: {
    maxWidth: "400px",
    alignSelf: "center",
    flex: 1
  },
  rightButtons: {
    marginLeft: "16px",
    flex: "initial"
  }
}

class Navigation extends React.Component {
  render() {
    return (
      <div style={styles.menu}>
        <div style={styles.left}>
          <Link to="/" style={styles.title}>
            Handoff
          </Link>
        </div>
        <div style={styles.right}>
          {this.props.user ? <Search style={styles.rightSearch} /> : null}
          {this.props.user ? (
            <AccountPopover
              buttonStyle={styles.rightButtons}
              user={this.props.user}
            />
          ) : (
            <CallToActionWeb />
          )}
        </div>
      </div>
    )
  }
}

export default createContainer(() => {
  let user = Meteor.user()
  return { user }
}, Navigation)
