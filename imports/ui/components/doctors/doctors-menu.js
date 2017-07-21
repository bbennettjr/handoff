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
    this.handleChange = this.handleChange.bind(this)
  }

  signOffToThisUser(userId) {
    Meteor.call("addAllPatientsToOtherUserId", userId)
  }

  handleChange(value) {
    console.log(value)
    this.setState({
      value: value
    })
  }

  renderDoctors() {
    let users = this.props.users
    return users.map((user, index) => {
      console.log(`index ${index}`)
      return (
        <MenuItem
          label="Doctors"
          value={index++}
          primaryText={user.emails[0].address}
          key={user._id}
        />
      )
    })
  }

  render() {
    return (
      <DropDownMenu
        value={this.state.value}
        onChange={() => this.handleChange()}
      >
        {this.renderDoctors()}
      </DropDownMenu>
    )
  }
}
