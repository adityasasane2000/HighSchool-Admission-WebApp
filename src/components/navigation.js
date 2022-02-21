
// import React from 'react';
import {Link} from 'react-router-dom';
import React, { Component } from 'react'; 
import { Navbar, Nav, NavItem, NavDropdown, MenuItem, Container } from 'react-bootstrap';
import "../components/css/styles.css"

const  navigation =()=> {
  return(
    <div>
    
     <Navbar expand="lg">
    <Navbar.Toggle aria-controls="basic-navbar-nav" />
    <Navbar.Collapse id="basic-navbar-nav">
      <Nav className="nav navbar-nav ">
      <Link to = "/" className='item'  id="item" >Home</Link>
      <Link to = "/aboutus" className='item'  id="item">About Us</Link>
      <Link to = "/contactus" className='item'  id="item" >Contact Us</Link>
      <Link to = "/admission" className='item'  id="item">Admission</Link>
        {/* <Nav.Link className='item' id="item" href="#home">Home</Nav.Link>
        <Nav.Link className='item' id="item" href="#aboutus">About Us</Nav.Link>
        <Nav.Link className='item' id="item" href="#contactus">Contact Us</Nav.Link>
        <Nav.Link className='item' id="item" href="#admission">Admission</Nav.Link> */}
      </Nav>
    </Navbar.Collapse>
  
</Navbar>

    </div>
  );
}

export default navigation;
