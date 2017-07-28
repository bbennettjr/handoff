// Atmosphere and NPM
import React from "react"
import ReactDOM, { render } from "react-dom"
import { Meteor } from "meteor/meteor"

// Accounts
import "../imports/startup/client/accounts-config.js"
import App from "../imports/ui/components/app/app.js"
import injectTapEventPlugin from "react-tap-event-plugin"
// Main
import "./main.html"

Meteor.startup(() => {
  // render to the root div
  injectTapEventPlugin()
  ReactDOM.render(<App />, document.getElementById("root"))
})
