import PropTypes from "prop-types"
import React from "react"
import { Button, Popover } from "antd"
import { createContainer } from "meteor/react-meteor-data"
import AtForm from "./AtForm.js"
class CallToActionWeb extends React.Component {
  static propTypes = {
    user: PropTypes.object,
    formState: PropTypes.string
  }

  render() {
    // Present SignIn or SignUp to new user
    return (
      <div
        style={{
          display: "inline-block",
          marginLeft: "20px",
          marginRight: "20px"
        }}
      >
        <Popover
          style={{ backgroundColor: "#fff" }}
          trigger="click"
          content={
            <AtForm
              isMobile={false} //kvothe: should be this.props.isMobile?
              formState={"signIn"}
              closePopover={() => {
                alert("Close Popover")
              }}
            />
          }
        >
          <Button style={{ display: "inline-block", height: "44px" }}>
            Login
          </Button>
        </Popover>
      </div>
    )
  }
}

export default createContainer(() => {
  return { user: Meteor.user() }
}, CallToActionWeb)
