import React from "react"
import { Link } from "react-router-dom"
import { Layout, Button } from "antd"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"

let { Header } = Layout

const styles = {
  title: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none"
  },
  buttons: {
    color: "white"
  }
}

export default class Navigation extends React.Component {
  state = {
    open: false
  }
  render() {
    return (
      <Header>
        <Link to="/" style={styles.title}>
          Handoff
        </Link>

        <Link to="/newpatient">
          <Button icon="search" style={styles.buttons} />
        </Link>

        {Meteor.user() ? (
          <AccountPopover history={this.props.history} />
        ) : (
          <CallToActionWeb />
        )}
      </Header>
    )
  }
}
