// import React from 'react';
import { Link } from "react-router-dom";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  NavDropdown,
} from "react-bootstrap";
import "../components/navigation.css";


const Navigation = () => {
 
 
  return (
    <div>
      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ">
            <Link to="/" className="item" id="item">
              Home
            </Link>

            <NavDropdown title="Programs" className="navbar-dropdown" id="item" >
              <NavDropdown.Item > <Link to="/science" className="item" id="item">
                Science
              </Link></NavDropdown.Item>
              <NavDropdown.Item >   <Link to="/commarce" className="item" id="item">
                Commarce
              </Link></NavDropdown.Item>
              <NavDropdown.Item >   <Link to="/art" className="item" id="item">
                Arts
              </Link></NavDropdown.Item>
            </NavDropdown>
            <Link to="/about" className="item" id="item">
              About Us
            </Link>
            <Link to="/contactus" className="item" id="item">
              Contact Us
            </Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
