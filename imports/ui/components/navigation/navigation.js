import React from "react"
import { Link } from "react-router-dom"
import { Layout, Button } from "antd"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import "antd/dist/antd.css"
import PropTypes from "prop-types"
import { Menu, Dropdown, Icon } from "antd"

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
    selectedRowKeys: PropTypes.array.isRequired,
    setSelectedRowKeys: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  }

  onClickDoctor = userId => {
    let myUserId = Meteor.userId()
    Meteor.call(
      "addPatientsToUser",
      this.props.selectedRowKeys,
      userId,
      (err, res) => {
        if (err) {
          console.log(err)
        }
      }
    )
    Meteor.call(
      "removePatientsFromUser",
      this.props.selectedRowKeys,
      myUserId,
      (err, res) => {
        if (err) {
          console.log("HEY")
        }
      }
    )
    this.props.setSelectedRowKeys([])
  }

  render() {
    console.log(this.props.users)
    let menu = (
      <Menu>
        {this.props.users.map(el =>
          <Menu.Item key={el._id}>
            <a onClick={() => this.onClickDoctor(el._id)}>
              {el.profile.name}
            </a>
          </Menu.Item>
        )}
      </Menu>
    )
    return (
      <Header className="header" style={{ color: "red" }}>
        <div style={{ display: "flex", justifyContent: "space-between" }}>
          <div>
            <Link to="/" style={styles.title}>
              Handoff
            </Link>
            {Meteor.user() &&
              <Link to="/newpatient">
                <Button icon="plus-circle-o" type="primary">
                  New Patient
                </Button>
              </Link>}
            {this.props.selectedRowKeys.length > 0 &&
              <Dropdown overlay={menu} trigger={["click"]}>
                <Button icon="share-alt" type="primary">
                  Handoff
                </Button>
              </Dropdown>}
          </div>
          <div>
            {Meteor.user()
              ? <AccountPopover history={this.props.history} />
              : <CallToActionWeb />}
          </div>
        </div>
      </Header>
    )
  }
}
