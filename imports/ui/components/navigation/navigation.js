import React from "react"
import { Navbar, Nav, NavItem } from "react-bootstrap"
import { NavLink, Link } from "react-router-dom"
import { LinkContainer } from "react-router-bootstrap"
import AccountsWrapper from "../accounts/accounts-wrapper.js"

export const Navigation = appProps => {
  return (
    <Navbar style={{ marginBottom: "0" }}>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Handoff</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>

        <Nav pullLeft>
          <LinkContainer to="/newpatient">
            <NavItem>
              New Patient
            </NavItem>
          </LinkContainer>
          <NavItem eventKey={2}><AccountsWrapper /></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  )
}
