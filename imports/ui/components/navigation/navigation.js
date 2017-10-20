import React from "react"
import { Link } from "react-router-dom"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import Search from "./navigation-controls/search.js"
import "antd/dist/antd.css"
import PropTypes from "prop-types"
import { Menu, Dropdown, notification, Button } from "antd"

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

export default class Navigation extends React.Component {
  static propTypes = {
    selectedRowKeys: PropTypes.array.isRequired,
    setSelectedRowKeys: PropTypes.func.isRequired,
    users: PropTypes.array.isRequired
  }

  onClickDoctor = (otherUserId, name) => {
    Meteor.call(
      "addPatientsToUser",
      this.props.selectedRowKeys,
      otherUserId,
      err => {
        if (err) {
          notification.error({
            message: "Error",
            description: `Error moving patient to ${name}`
          })
        }
        notification.success({
          message: "Success",
          description: `${name} received your handoff.`
        })
      }
    )
    // Remove patients from current user to complete 'handoff'
    this.onRemoveClick()
  }

  onRemoveClick = () => {
    let myUserId = Meteor.userId()
    const plural = this.props.selectedRowKeys.length
    Meteor.call(
      "removePatientsFromUser",
      this.props.selectedRowKeys,
      myUserId,
      err => {
        if (err) {
          notification.error({
            message: "Error",
            description: `Problem removing patients from user`
          })
        }
        notification.info({
          message: "Removed",
          description: `Patient${plural > 1
            ? "s"
            : ""} removed from covered list.`
        })
      }
    )
    this.props.setSelectedRowKeys([])
  }

  render() {
    const userId = Meteor.userId()
    let menu = (
      <Menu>
        {this.props.users.map(el => {
          if (userId !== el._id) {
            return (
              <Menu.Item key={el._id}>
                <a onClick={() => this.onClickDoctor(el._id, el.profile.name)}>
                  {el.profile.name}
                </a>
              </Menu.Item>
            )
          }
        })}
      </Menu>
    )
    return (
      <div style={styles.menu}>
        <div style={styles.left}>
          <Link to="/" style={styles.title}>
            Handoff
          </Link>
          {Meteor.user() && (
            <Link to="/newpatient">
              <Button icon="user-add" type="primary" style={styles.leftButtons}>
                New Patient
              </Button>
            </Link>
          )}
          {this.props.selectedRowKeys.length > 0 && (
            <Dropdown overlay={menu}>
              <Button
                icon="share-alt"
                type="primary"
                style={styles.leftButtons}
              >
                Handoff
              </Button>
            </Dropdown>
          )}
          {this.props.selectedRowKeys.length > 0 && (
            <Button
              icon="close"
              type="danger"
              style={styles.leftButtons}
              onClick={this.onRemoveClick}
            >
              Remove
            </Button>
          )}
        </div>
        <div style={styles.right}>
          {Meteor.user() ? <Search style={styles.rightSearch} /> : null}
          {Meteor.user() ? (
            <AccountPopover
              history={this.props.history}
              buttonStyle={styles.rightButtons}
            />
          ) : (
            <CallToActionWeb />
          )}
        </div>
      </div>
    )
  }
}
