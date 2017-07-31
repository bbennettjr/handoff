import { Meteor } from "meteor/meteor"
import React from "react"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"

export default class DoctorsMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 1
    }
    this.signOffToThisUser = this.signOffToThisUser.bind(this)
    this.handleChange = value => this.setState({ value })
  }

  signOffToThisUser(userId) {
    Meteor.call("addAllPatientsToOtherUserId", userId)
  }

  renderDoctors() {
    let users = this.props.users
    return users.map((user, index) => {
      return (
        <MenuItem
          label="Doctors"
          value={index++}
          primaryText={user.emails[0].address}
          onTouchTap={() => this.signOffToThisUser(user._id)}
          key={user._id}
        />
      )
    })
  }

  render() {
    return (
      <DropDownMenu>
        {this.renderDoctors()}
      </DropDownMenu>
    )
  }
}
