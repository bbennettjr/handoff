import React from "react"
import { Link } from "react-router-dom"
import {
  Toolbar,
  ToolbarGroup,
  ToolbarSeparator,
  ToolbarTitle
} from "material-ui/Toolbar"
import AppBar from "material-ui/AppBar"
import FlatButton from "material-ui/FlatButton"
import { cyan500 } from "material-ui/styles/colors"
import AccountsWrapper from "../accounts/accounts-wrapper.js"
import OurAccounts from "../accounts/AtForm"
const styles = {
  toolbar: {
    backgroundColor: cyan500.toString()
  },
  title: {
    cursor: "pointer",
    color: "white",
    textDecoration: "none"
  },
  buttons: {
    color: "white"
  }
}

export const Navigation = appProps => {
  return (
    <Toolbar style={styles.toolbar}>
      <Link to="/" style={styles.title}>
        <ToolbarTitle text="Handoff" />
      </Link>
      <ToolbarGroup lastChild={true}>
        <FlatButton
          label="New Patient"
          labelStyle={styles.buttons}
          containerElement={<Link to="/newpatient" />}
        />
        <ToolbarSeparator />
        <FlatButton
          label="Sign In"
          labelStyle={styles.buttons}
          containerElement={<OurAccounts />}
        />
      </ToolbarGroup>
    </Toolbar>
  )
}
