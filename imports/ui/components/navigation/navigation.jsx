import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import AccountsWrapper from '../accounts/accounts-wrapper.jsx';

export const Navigation = appProps => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <a href="/">Handoff</a>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">NavLink</NavItem>
          <NavItem eventKey={2} href="#">NavLink</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem eventKey={1} href="/newpatient">New Patient</NavItem>
          <NavItem eventKey={2}>{<AccountsWrapper />}</NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
