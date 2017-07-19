import React from "react"
import { Link } from "react-router-dom"
import AppBar from "material-ui/AppBar"
import FlatButton from 'material-ui/FlatButton';
import AccountsWrapper from "../accounts/accounts-wrapper.js"

export const Navigation = appProps => {
  return (
    <AppBar
      title="Handoff"
      iconElementRight={rightButtons}
    />
  )
}

const rightButtons = (
  <div>
  <FlatButton label="New Patient" containerElement={<Link to="/newpatient"/>}/>
  <FlatButton label="New Patient" containerElement={<AccountsWrapper />}/>
  </div>
  )
