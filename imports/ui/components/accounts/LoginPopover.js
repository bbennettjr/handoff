import PropTypes from "prop-types"
import React from "react"
import Popover from "material-ui/Popover"
import AtForm from "./AtForm.js"

class LoginPopover extends React.Component {
  static propTypes = {
    open: PropTypes.bool.isRequired,
    anchorEl: PropTypes.object,
    closeFunc: PropTypes.func.isRequired,
    formState: PropTypes.string
  }

  render() {
    return (
      <Popover
        open={this.props.open}
        anchorEl={this.props.anchorEl}
        anchorOrigin={{ horizontal: "left", vertical: "top" }}
        targetOrigin={{ horizontal: "left", vertical: "bottom" }}
        onRequestClose={this.props.closeFunc}
        style={{ backgroundColor: "#fff" }}
      >
        <AtForm isMobile={false} formState={this.props.formState} />
      </Popover>
    )
  }
}

export default LoginPopover
