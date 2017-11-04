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
    // fp not working, prob end up doing reduce
    // return (function cols(acc, i, arr) {
    //   if (i >= arr.length) return acc
    //   if (i % 4 === 0) return acc.push(<Row>{cols([], i, arr)}</Row>)
    //   acc.push(<Col>{arr[i].name}</Col>)
    //   return cols(acc, arr, ++i)
    // })([], 0, this.props.groups.slice())
  }
  join() {
    // join group
  }
  leave() {
    // leave group
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
