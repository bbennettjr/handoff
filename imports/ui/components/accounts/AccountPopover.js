import PropTypes from "prop-types"
import React from "react"
import { Button, Popover } from "antd"
import InForm from "./InForm.js"

class AccountPopover extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  render() {
    // console.log("We are here")
    return (
      <div>
        <Popover
          style={{ backgroundColor: "#fff", display: "flex" }}
          trigger="click"
          content={
            <InForm
              isMobile={false}
              closePopover={() => this.setState({ open: false })}
              history={this.props.history}
            />
          }
        >
          <Button
            style={this.props.buttonStyle}
            onClick={this.openPopover}
            icon="logout"
          >
            Logout
          </Button>
        </Popover>
      </div>
    )
  }
}

export default AccountPopover
