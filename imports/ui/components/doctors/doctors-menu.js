import { Meteor } from "meteor/meteor"
import React from "react"
import Menu, { MenuItem } from "material-ui/Menu"
import Button from "material-ui/Button"
import IconButton from "material-ui/IconButton"
import FileFileDownload from "material-ui-icons/FileDownload"
import IconMenu from "material-ui/IconMenu"

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
          onClick={() => this.signOffToThisUser(user._id)}
          key={user._id}
        />
      )
    })
  }

  handleOpenMenu = () => {
    this.setState({
      openMenu: true
    })
  }

  handleOnRequestChange = value => {
    this.setState({
      openMenu: value
    })
  }
  render() {
    return (
      <div>
        <IconMenu
          iconButtonElement={
            <IconButton>
              <FileFileDownload />
            </IconButton>
          }
          open={this.state.openMenu}
          onRequestChange={this.handleOnRequestChange}
        >
          <MenuItem value="1" primaryText="Windows App" />
          <MenuItem value="2" primaryText="Mac App" />
          <MenuItem value="3" primaryText="Android App" />
          <MenuItem value="4" primaryText="iOS App" />
        </IconMenu>
        <Button onClick={this.handleOpenMenu}>Downloads</Button>

        <Menu>{this.renderDoctors()}</Menu>
      </div>
    )
  }
}
