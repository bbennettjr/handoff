import React from 'react';
import { Navbar, Nav, NavItem } from 'react-bootstrap';
import { NavLink, Link } from 'react-router-dom';
import AccountsWrapper from '../accounts/accounts-wrapper.jsx';

export const Navigation = appProps => {
  return (
    <Navbar>
      <Navbar.Header>
        <Navbar.Brand>
          <Link to="/">Handoff</Link>
        </Navbar.Brand>
        <Navbar.Toggle />
      </Navbar.Header>
      <Navbar.Collapse>
        <Nav>
          <NavItem eventKey={1} href="#">NavLink</NavItem>
          <NavItem eventKey={2} href="#">NavLink</NavItem>
        </Nav>
        <Nav pullRight>
          <NavItem><NavLink to="/newpatient">Test button</NavLink></NavItem>
          <NavItem
            eventKey={1}
            href="/newpatient"
            onClick={e => e.preventDefault()}
          >
            New Patient
          </NavItem>
          <NavItem eventKey={2}><AccountsWrapper /></NavItem>
        </Nav>
      </Navbar.Collapse>
    </Navbar>
  );
};
