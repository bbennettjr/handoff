import React from "react"
import { Link } from "react-router-dom"
import { Input } from "antd"

// Create WebSocket connection.
const socket = new WebSocket("ws://localhost:3000/chat")

socket.onopen = event => {
  socket.send("Here is text on our open event")
}

// Connection opened
socket.addEventListener("open", function(event) {
  console.log(`open: 'event' object from callback: ${event}`)
  socket.send("Hello Server!")
})

// Listen for messages
socket.addEventListener("message", function(event) {
  console.log("Message from server ", event.data)
  writeMessage(event.data)
})

// Message appending
const messagesElement = document.getElementById("messages")
let lastMessageElement = null

function writeMessage(content) {
  let newMessageElement = document.createElement("div")
  let newMessageText = document.createTextNode(content)

  newMessageElement.appendChild(newMessageText)
  messagesElement.insertBefore(newMessageElement, lastMessageElement)
  lastMessageElement = newMessageElement
}

function sendMessage(e) {
  console.log(`Send message function.  e obj:`)
  console.log(e)
  socket.send(e)
}

const Chat = () => {
  return (
    <div
      style={{
        position: "absolute",
        bottom: "40px",
        left: "40px",
        width: "200px",
        height: "200px"
      }}
    >
      <div id="messages" />
      <Input placeholder="text here" onPressEnter={sendMessage} />
    </div>
  )
}

export default Chat
