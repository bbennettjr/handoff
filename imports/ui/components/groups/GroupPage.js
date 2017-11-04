import { Meteor } from "meteor/meteor"
import React from "react"
import PropTypes from "prop-types"
import { Groups } from "/imports/api/groups/groups.js"
import { insertGroup, addToGroup } from "/imports/api/groups/group-methods.js"
import { withTracker } from "meteor/react-meteor-data"
import { Row, Col, Button } from "antd"

class GroupPage extends React.Component {
  static propTypes = {
    groups: PropTypes.array.isRequired
  }
  renderGroups() {
    return this.props.groups.map(g => {
      return (
        <Col span={4}>
          <Button>{g.name}</Button>
        </Col>
      )
    })
  }
  render() {
    return (
      <div>
        <h2>Groups</h2>
        <Row type="flex" justify="space-around" align="middle">
          {this.renderGroups()}
        </Row>
      </div>
    )
  }
}

export default withTracker(props => {
  const handle = Meteor.subscribe("member.groups")
  const groups = Groups.find().fetch()
  return { groups }
})(GroupPage)
