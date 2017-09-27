import React from "react"
import { Link } from "react-router-dom"
import { Layout, Button } from "antd"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import "antd/dist/antd.css"
import PropTypes from "prop-types"
let { Header } = Layout

const styles = {
  title: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none",
    marginRight: "30px"
  },
  buttons: {
    color: "white"
  }
}

export default class Navigation extends React.Component {
  static propTypes = {
    selectedRowKeys: PropTypes.array.isRequired
  }
  render() {
    return (
      <Header className="header" style={{ color: "red" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/" style={styles.title}>
              Handoff
            </Link>
            {Meteor.user() && (
              <Link to="/newpatient">
                <Button icon="plus-circle-o" type="primary">
                  New Patient
                </Button>
              </Link>
            )}
            {this.props.selectedRowKeys.length > 0 && (
              <Button icon="plus-circle-o" type="primary">
                Move to doctor
              </Button>
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
    )
  }
}
