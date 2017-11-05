import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { Groups } from "/imports/api/groups/groups.js"
import { insertGroup, addToGroup } from "/imports/api/groups/group-methods.js"
import { withTracker } from "meteor/react-meteor-data"
import { Row, Col, Menu, Dropdown, Button, Icon, message } from "antd"

function handleMenuClick({ key }) {
  message.info(`${key === "1" ? "Joined" : "Left"} the team`)
}

const menu = (
  <Menu onClick={handleMenuClick}>
    <Menu.Item key="1">Join</Menu.Item>
    <Menu.Item key="2">Leave</Menu.Item>
  </Menu>
)

class GroupPage extends React.Component {
  static propTypes = {
    groups: PropTypes.array.isRequired
  }

  renderGroups() {
    const COL_LENGTH = 4
    const groups = this.props.groups.slice()
    let start, end
    return (function rows(acc, arr) {
      return acc.map((r, i) => {
        start = i * COL_LENGTH
        end = start + COL_LENGTH
        return (
          <Row type="flex" justify="space-around" align="middle" key={i}>
            {arr.slice(start, end).map(g => {
              return (
                <Col key={g._id}>
                  <Dropdown overlay={menu}>
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
  const handle = Meteor.subscribe("member.groups")
  const groups = Groups.find().fetch()
  return { groups }
})(GroupPage)
