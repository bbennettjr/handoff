// Atmosphere and NPM
import React from "react"
import ReactDOM from "react-dom"
import { Meteor } from "meteor/meteor"

// Accounts
import App from "../imports/ui/components/app/app.js"
// Main
import "./main.html"
import "./main.css"

Meteor.startup(() => {
  // render to the root div
  ReactDOM.render(<App />, document.getElementById("root"))
})
