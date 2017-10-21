// Atmosphere and NPM
import React from "react"
import ReactDOM from "react-dom"
import { Meteor } from "meteor/meteor"
import { LocaleProvider } from "antd"
import enUS from "antd/lib/locale-provider/en_US"
// Accounts
import App from "../imports/ui/components/app/app.js"
// Main
import "./main.html"
import "./main.css"

Meteor.startup(() => {
  // render to the root div
  ReactDOM.render(
    <LocaleProvider locale={enUS}>
      <App />
    </LocaleProvider>,
    document.getElementById("root")
  )
})
