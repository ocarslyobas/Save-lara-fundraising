import React from 'react';
import './landing.css';
import Donatepanel from './Donatepanel';
import {Navbar, Nav} from 'react-bootstrap';
import {link} from 'react-router-dom';
import {LinkContainer} from 'react-router-bootstrap';


const Navheaders = ()=>{

return(


<Navbar bg="light" expand="lg">
    <LinkContainer to="/">
    <Navbar.Brand><img src='../photo/logo.png' alt='' id='navimg'></img> </Navbar.Brand>
    </LinkContainer>
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="mr-auto">
      <LinkContainer to="/">
      <Nav.Link className="links">Home</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/about">
      <Nav.Link className="links">About</Nav.Link>
      </LinkContainer>
      <LinkContainer to="/contact">
      <Nav.Link className="links">Contact</Nav.Link>
      </LinkContainer>
      </Nav>
    </Navbar.Collapse>
      <Donatepanel/>
</Navbar>

);




}
export default Navheaders;