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
import { cyan500, pink400 } from "material-ui/styles/colors"
import AccountsWrapper from "../accounts/accounts-wrapper.js"
import CallToActionWeb from "../accounts/CallToActionWeb"
import SocialPersonAdd from "material-ui/svg-icons/social/person-add"

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

export default class Navigation extends React.Component {
  state = {
    open: false
  }
  render() {
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
                hoverColor={pink400}
              />
            </IconButton>
          </Link>
          <ToolbarSeparator />
          <FlatButton
            label="Sign In"
            labelStyle={styles.buttons}
            containerElement={<CallToActionWeb />}
          />
        </ToolbarGroup>
      </Toolbar>
    )
  }
}
