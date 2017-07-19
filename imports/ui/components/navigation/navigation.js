import React from "react"
import { NavLink } from "react-router-dom"
import AppBar from "material-ui/AppBar"
import FlatButton from "material-ui/FlatButton"
import AccountsWrapper from "../accounts/accounts-wrapper.js"

export const Navigation = appProps => {
  return (
    <AppBar
      title={<NavLink to="/" activeClassName="selected">Handoff</NavLink>}
    >
      <FlatButton label="New Patient" href="newpatient" />
      <FlatButton children={<AccountsWrapper />} />
    </AppBar>
  )
}
