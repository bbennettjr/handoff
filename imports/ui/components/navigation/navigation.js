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
import IconButton from "material-ui/IconButton"
import { cyan500, pink500 } from "material-ui/styles/colors"
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

export const Navigation = props => {
  console.log(props)
  return (
    <Toolbar style={styles.toolbar}>
      <Link to="/" style={styles.title}>
        <ToolbarTitle text="Handoff" />
      </Link>
      <ToolbarGroup lastChild={true}>
        <Link to="/newpatient">
          <IconButton tooltip="Add Patient" style={styles.buttons}>
            <SocialPersonAdd
              color={styles.buttons.color}
              hoverColor={pink500}
            />
          </IconButton>
        </Link>
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
