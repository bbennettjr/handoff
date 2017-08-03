import React from "react"
import { Link } from "react-router-dom"

import AppBar from "material-ui/AppBar"
import Toolbar from "material-ui/Toolbar"
import Button from "material-ui/Button"
import IconButton from "material-ui/IconButton"

import { cyan, pink } from "material-ui/colors"
import AccountPopover from "../accounts/AccountPopover"
import CallToActionWeb from "../accounts/CallToActionWeb"
import SocialPersonAdd from "material-ui-icons/PersonAdd"
import Typography from "material-ui/Typography"
const styles = {
  toolbar: {
    backgroundColor: cyan
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
      <AppBar position="static">
        <Toolbar style={styles.toolbar}>
          <Link to="/" style={styles.title}>
            <Typography type="title" color="inherit">
              Title
            </Typography>
          </Link>

          <Link to="/newpatient">
            <IconButton style={styles.buttons}>
              <SocialPersonAdd color={styles.buttons.color} />
            </IconButton>
          </Link>

          {Meteor.user()
            ? <AccountPopover history={this.props.history} />
            : <CallToActionWeb />}

        </Toolbar>
      </AppBar>
    )
  }
}
