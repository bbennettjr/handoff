import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import {
  addToGroup,
  removeFromGroup
} from "/imports/api/groups/group-methods.js"
import { styles } from "/imports/ui/styles/styles.js"
import { Row, Col, Card, Badge, Avatar, Button, Icon, message } from "antd"

class GroupPage extends React.Component {
  static propTypes = {
    group: PropTypes.object.isRequired
  }

  title = (group, isMember) => {
    return (
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center"
        }}
      >
        <div>{group.name}</div>
        <Button
          type={isMember ? "danger" : "primary"}
          icon={isMember ? "close" : "plus"}
          onClick={
            isMember ? () => this.leave(group._id) : () => this.join(group._id)
          }
        >
          {isMember ? "Leave" : "Join"}
        </Button>
      </div>
    )
  }

  join(_id) {
    addToGroup.call({ _id }, (err, result) => {
      console.log("addToGroup result:", result)
      if (err) console.error(err)
      message.info("Joined the team")
    })
  }

  leave(_id) {
    removeFromGroup.call({ _id }, (err, result) => {
      console.log("removeFromGroup result:", result)
      if (err) console.error(err)
      message.info("Left the team")
    })
  }

  render() {
    const { group, isMember } = this.props

    return (
      <Row type="flex" style={{ marginBottom: "16px" }}>
        <Card
          style={{ width: "100%" }}
          title={this.title(group, isMember)}
          bodyStyle={isMember ? { backgroundColor: "#42b1a724" } : null}
        >
          <Badge count={group.members.length}>
            <Avatar shape="circle" style={{ backgroundColor: "#108ee9" }}>
              USERS
            </Avatar>
          </Badge>
        </Card>
      </Row>
    )
  }
}

export default GroupPage

