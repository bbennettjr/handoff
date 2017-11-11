import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { Groups } from "/imports/api/groups/groups.js"
import {
  insertGroup,
  addToGroup,
  removeFromGroup
} from "/imports/api/groups/group-methods.js"
import { withTracker } from "meteor/react-meteor-data"
import { Row, Col, Menu, Dropdown, Button, Icon, message } from "antd"

class GroupPage extends React.Component {
  static propTypes = {
    groups: PropTypes.array.isRequired
  }

  renderGroups() {
    const COL_LENGTH = 4
    const groups = this.props.groups.slice()
    let start, end

    const menu = key => (
      <Menu onClick={this.handleMenuClick}>
        <Menu.Item key={key}>Leave</Menu.Item>
      </Menu>
    )

    return ((acc, arr) => {
      return acc.map((r, i) => {
        start = i * COL_LENGTH
        end = start + COL_LENGTH
        return (
          <Row type="flex" justify="space-around" align="middle" key={i}>
            {arr.slice(start, end).map((g, i) => {
              return (
                <Col key={i}>
                  <Dropdown overlay={menu(g._id)}>
                    <Button>
                      {g.name} <Icon type="down" />
                    </Button>
                  </Dropdown>
                </Col>
              )
            })}
          </Row>
        )
      })
    })(new Array(Math.ceil(groups.length / COL_LENGTH)).fill(1), groups)
  }

  handleMenuClick({ key }) {
    console.log(key)
    debugger
    // const _id = key
    // // key === "1"
    // //   ? addToGroup.call({ key }, (err, res) => {
    // //       if (err) console.error(err)
    // //       message.info("Joined the team")
    // //     })
    removeFromGroup.call({ _id }, (err, res) => {
      if (err) console.error(err)
      message.info("Left the team")
    })
  }

  render() {
    return (
      <div>
        <h2>Groups</h2>
        {this.renderGroups()}
      </div>
    )
  }
}

export default withTracker(props => {
  const handle = Meteor.subscribe("all.groups")
  const groups = Groups.find().fetch()
  return { groups }
})(GroupPage)
