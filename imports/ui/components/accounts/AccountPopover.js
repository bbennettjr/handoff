import PropTypes from "prop-types"
import React from "react"
import { Button, Popover } from "antd"
import InForm from "./InForm.js"

class AccountPopover extends React.Component {
  static propTypes = {
    history: PropTypes.object.isRequired
  }

  state = {
    open: false
  }

  openPopover = e => {
    e.preventDefault()
    this.setState({
      open: true
    })
  }

  render() {
    // console.log("We are here")
    return (
      <div>
        <Button
          style={{ display: "inline-block" }}
          onClick={this.openPopover}
          icon="search"
        />
        <Popover
          visible={this.state.open}
          onVisibleChange={() => this.setState({ open: false })}
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
