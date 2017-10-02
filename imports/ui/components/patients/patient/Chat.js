import React from "react"
import PropTypes from "prop-types"
import { createContainer } from "meteor/react-meteor-data"
import { Link } from "react-router-dom"
import { Input, Card } from "antd"
import { ChatFeed, Message } from "react-chat-ui"

class Chat extends React.Component {
  static propTypes = {
    messages: PropTypes.array
  }
  state = {
    is_typing: false,
    value: ""
  }

  sendMessage() {
    Streamy.emit("message", { data: this.state.value })
    this.setState({ value: "", is_typing: false })
  }
  onChange(e) {
    if (this.state.value) this.setState({ is_typing: true })
    if (!this.state.value) this.setState({ is_typing: false })

    this.setState({ value: e.target.value })
  }
  render() {
    return (
      <Card
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "flex-end",
          width: 300,
          height: 200
        }}
      >
        <ChatFeed
          messages={this.props.messages} // Boolean: list of message objects
          isTyping={this.state.is_typing} // Boolean: is the recipient typing
          hasInputField={false} // Boolean: use our input, or use your own
          showSenderName // show the name of the user who sent the message
          bubblesCentered={false} //Boolean should the bubbles be centered in the feed?
          // JSON: Custom bubble styles
          bubbleStyles={{
            text: {
              fontSize: 11
            },
            chatbubble: {
              borderRadius: 3,
              padding: 4
            }
          }}
        />
        <Input
          placeholder="..."
          value={this.state.value}
          onChange={this.onChange.bind(this)}
          onPressEnter={this.sendMessage.bind(this)}
        />
      </Card>
    )
  }
}

export default createContainer(() => {
  let messages = []
  Streamy.on("echo", data => {
    console.log(data.message)
    messages.push(new Message(data))
  })
  return { messages }
}, Chat)

// <div
//     style={{
//       position: "absolute",
//       bottom: "40px",
//       left: "40px",
//       width: "200px",
//       height: "200px"
//     }}
//   >
//     <div id="messages" />
//     <Input placeholder="text here" onPressEnter={sendMessage} />
//   </div>
