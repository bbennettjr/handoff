import React from "react"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import Search from "./navigation-controls/search.js"
import "antd/dist/antd.css"
import PropTypes from "prop-types"
import { createContainer } from "meteor/react-meteor-data"
const styles = {
  menu: {
    display: "flex",
    justifyContent: "space-between"
  },
  right: {
    display: "flex",
    justifyContent: "flex-end",
    alignItems: "baseline",
    flex: 1
  },
  left: {
    display: "flex",
    justifyContent: "flex-start",
    alignItems: "baseline",
    flex: 1,
    color: "white",
    fontSize: "20px"
  },
  rightSearch: {
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
        {!Meteor.user() && <div style={styles.left}>Handoff</div>}
        <div style={styles.right}>
          {this.props.user ? (
            [
              <Search
                key={1}
                style={styles.rightSearch}
                placeholder="Search patients..."
              />,
              <AccountPopover
                key={2}
                buttonStyle={styles.rightButtons}
                user={this.props.user}
              />
            ]
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
