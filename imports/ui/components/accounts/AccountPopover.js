import PropTypes from "prop-types"
import React from "react"
import { white, orange500, orange400 } from "material-ui/styles/colors"
import IconButton from "material-ui/IconButton"
import ActionAccountCircle from "material-ui/svg-icons/action/account-circle"
import Popover from "material-ui/Popover"
import InForm from "./InForm.js"

class AccountPopover extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    open: false,
    popoverAnchor: null
  }

  openPopover = e => {
    e.preventDefault()
    this.setState({
      open: true,
      popoverAnchor: e.currentTarget
    })
  }

  render() {
    return (
      <div>
        <IconButton
          style={{ display: "inline-block" }}
          tooltip="Account"
          onTouchTap={Meteor.isCordova ? undefined : this.openPopover}
          onClick={Meteor.isCordova ? this.openPopover : undefined}
        >
          <ActionAccountCircle color={white} hoverColor={orange400} />
        </IconButton>
        <Popover
          open={this.state.open}
          anchorEl={this.state.popoverAnchor}
          anchorOrigin={{ horizontal: "left", vertical: "top" }}
          targetOrigin={{ horizontal: "left", vertical: "bottom" }}
          onRequestClose={() => this.setState({ open: false })}
          style={{ backgroundColor: "#fff", display: "flex" }}
        >
          <InForm
            isMobile={false}
            closePopover={() => this.setState({ open: false })}
            history={this.props.history}
          />
        </Popover>
      </div>
    )
  }
}

export default AccountPopover
