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
import GroupCard from "/imports/ui/components/groups/GroupCard.js"
import { styles } from "/imports/ui/styles/styles.js"
import { Row, Col, Card, Badge, Avatar, Button, Icon, message } from "antd"

class GroupPage extends React.Component {
  static propTypes = {
    groups: PropTypes.array.isRequired
  }

  renderGroups() {
    const groups = this.props.groups.slice()

    return groups.map((group, i) => {
      const isMember = group.members.some(_id => {
        return _id === Meteor.userId()
      })
      return <GroupCard key={i} group={group} isMember={isMember} />
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
