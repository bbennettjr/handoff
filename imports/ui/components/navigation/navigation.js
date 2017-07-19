import React from "react"
import { Link } from "react-router-dom"
import AppBar from "material-ui/AppBar"
import FlatButton from 'material-ui/FlatButton';
import { Tabs, Tab } from "material-ui/Tabs"
import AccountsWrapper from "../accounts/accounts-wrapper.js"

export const Navigation = appProps => {
  return (
    <AppBar
      title="Handoff"
      iconElementRight={<FlatButton label="New Patient" containerElement={<Link to="/newpatient"/>}/>}
    />
  )
}
