import React from 'react';
import { Link } from 'react-router-dom';
import { Glyphicon, Nav, Navbar, NavItem } from 'react-bootstrap';
import { LinkContainer } from 'react-router-bootstrap';
import './NavMenu.css';

export default props => (
  <Navbar inverse fixedTop fluid collapseOnSelect>
    <Navbar.Header>
      <Navbar.Brand>
        <Link to={'/'}>Programmable Events</Link>
      </Navbar.Brand>
      <Navbar.Toggle />
    </Navbar.Header>
    <Navbar.Collapse>
      <Nav>        
        <LinkContainer to={'/createEvent'} exact>
          <NavItem>
            <Glyphicon glyph='briefcase' /> Create Event
          </NavItem>
        </LinkContainer>
        <LinkContainer to={'/dayEvent'} exact>
            <NavItem>
                <Glyphicon glyph='calendar' /> Day Event
            </NavItem>
        </LinkContainer>  
        <LinkContainer to={'/hourEvent'} exact>
            <NavItem>
                <Glyphicon glyph='time' /> Hour Event
            </NavItem>
         </LinkContainer>
        <LinkContainer to={'/adminEvents'} exact>
            <NavItem>
                <Glyphicon glyph='book' /> Administration
            </NavItem>
         </LinkContainer>        
      </Nav>
    </Navbar.Collapse>
  </Navbar>
);
