import { Meteor } from "meteor/meteor"
import React from "react"
import DropDownMenu from "material-ui/DropDownMenu"
import MenuItem from "material-ui/MenuItem"

export default class DoctorsMenu extends React.Component {
  constructor() {
    super()
    this.state = {
      value: 0
    }
    this.signOffToThisUser = this.signOffToThisUser.bind(this)
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
          value={index}
          primaryText={user.emails[0].address}
          onChange={() => this.signOffToThisUser(user._id)}
          key={user._id}
        />
      )
    })
  }

  render() {
    return (
      <DropDownMenu
        value={this.state.value}
        onChange={({ value }) => this.setState({ value })}
      >
        {this.renderDoctors()}
      </DropDownMenu>
    )
  }
}
