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
import NewGroupModal from "/imports/ui/components/groups/NewGroupModal.js"
import { styles } from "/imports/ui/styles/styles.js"
import { Row, Col, Card, Badge, Avatar, Button, Icon, message } from "antd"

class GroupPage extends React.Component {
  static propTypes = {
    groups: PropTypes.array.isRequired
  }

  renderGroups() {
    const groups = this.props.groups.slice()

    return groups.map((g, i) => {
      return (
        <Row type="flex" justify="space-around" align="middle" key={i}>
          <Card style={{ width: "50%" }} title={g.name}>
            <Button onClick={() => this.join(g._id)}>Join</Button>
            <Button onClick={() => this.leave(g._id)}>Leave</Button>
            <Badge count={g.members.length}>
              <Avatar shape="circle" icon="user" />
            </Badge>
          </Card>
        </Row>
      )
    })
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
    return (
      <div>
        <div
          style={{
            display: "flex",
            marginBottom: "20px",
            marginLeft: "10px"
          }}
        >
          <div style={styles.left}>
            <NewGroupModal />
            <Button style={styles.leftButtons} type="danger">
              <Icon type="usergroup-delete" />Leave All
            </Button>
          </div>
        </div>

        {this.renderGroups()}
      </div>
    )
  }
}

export default withTracker(props => {
  const handle = Meteor.subscribe("all.groups")
  const groups = Groups.find().fetch()
  console.log("groups in withTracker:", groups)
  return { groups }
})(GroupPage)
