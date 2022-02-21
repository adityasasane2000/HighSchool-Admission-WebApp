
// import React from 'react';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import "../components/css/styles.css"

const  navigation =()=> {
  return(
    <div>
      {/* <Link to = "/" className='item'>Home</Link>
      <Link to = "/aboutus" className='item'>About Us</Link>
      <Link to = "/contactus" className='item'>Contact Us</Link>
      <Link to = "/admission" className='item'>Admission</Link> */}
     <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav navbar-nav ">
        <Nav.Link className='item' id="item" href="#home">Home</Nav.Link>
        <Nav.Link className='item' id="item" href="#aboutus">About Us</Nav.Link>
        <Nav.Link className='item' id="item" href="#contactus">Contact Us</Nav.Link>
        <Nav.Link className='item' id="item" href="#admission">Admission</Nav.Link>
      </Nav>
    </Navbar.Collapse>
  
</Navbar>

    </div>
  );
}

export default navigation;
