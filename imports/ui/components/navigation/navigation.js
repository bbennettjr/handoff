import React from "react"
import { Link } from "react-router-dom"
import { Layout, Button } from "antd"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import "antd/dist/antd.css"
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
  render() {
    return (
      <Layout className="layout">
        <Header className="header" style={{ color: "red" }}>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div>
              <Link to="/" style={styles.title}>
                Handoff
              </Link>
              {Meteor.user() && (
                <Link to="/newpatient">
                  <Button icon="search">New Patient</Button>
                </Link>
              )}
            </div>
            <div>
              {Meteor.user() ? (
                <AccountPopover history={this.props.history} />
              ) : (
                <CallToActionWeb />
              )}
            </div>
          </div>
        </Header>
      </Layout>
    )
  }
}
