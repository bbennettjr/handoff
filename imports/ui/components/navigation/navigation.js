import React from "react"
import { Link } from "react-router-dom"
import AppBar from "material-ui/AppBar"
import FlatButton from "material-ui/FlatButton"
import AccountsWrapper from "../accounts/accounts-wrapper.js"

const styles = {
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
    <AppBar
      title={<Link to="/" style={styles.title}><span>Handoff</span></Link>}
      iconElementLeft={leftButtons}
      iconElementRight={rightButtons}
    />
  )
}

const leftButtons = <AccountsWrapper />

const rightButtons = (
  <FlatButton
    label="New Patient"
    labelStyle={styles.buttons}
    containerElement={<Link to="/newpatient" />}
  />
)
