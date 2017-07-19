import React from "react"
import { NavLink } from "react-router-dom"
import AppBar from "material-ui/AppBar"
import { Tabs, Tab } from "material-ui/Tabs"
import AccountsWrapper from "../accounts/accounts-wrapper.js"

export const Navigation = appProps => {
  return (
    <AppBar
      title="Handoff"
      children={
        <Tabs>
          <Tab label="New Patient" data-route="/newpatient" />
          <Tab label="Home" data-route="/" />
        </Tabs>
      }
    />
  )
}
