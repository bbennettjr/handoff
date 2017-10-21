import PropTypes from "prop-types"
import React from "react"
import { Button, Popover } from "antd"
import InForm from "./InForm.js"
class AccountPopover extends React.Component {
  static propTypes = {
    buttonStyle: PropTypes.object.isRequired
  }

  render() {
    const profile = this.props.user && this.props.user.profile
    return (
      <div>
        <Popover
          style={{ backgroundColor: "#fff", display: "flex" }}
          trigger="click"
          content={<InForm isMobile={false} />}
        >
          <Button style={this.props.buttonStyle} icon="logout">
            {`${profile.name}, ${profile.degree}`}
          </Button>
        </Popover>
      </div>
    )
  }
}

export default AccountPopover
