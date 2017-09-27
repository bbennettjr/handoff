import PropTypes from "prop-types"
import React from "react"
import { Popover } from "antd"
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
        visible={this.props.open}
        onVisibleChange={this.props.closeFunc}
        style={{ backgroundColor: "#fff" }}
      >
        <AtForm
          isMobile={false} //kvothe: should be this.props.isMobile?
          formState={this.props.formState}
          closePopover={() => this.setState({ open: false })}
        />
      </Popover>
    )
  }
}

export default LoginPopover
