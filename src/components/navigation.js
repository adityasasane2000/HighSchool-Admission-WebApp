// import React from 'react';
import { Link } from "react-router-dom";
import React, { Component } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  Navbar,
  Nav,
  NavItem,
  NavDropdown,
  MenuItem,
  Container,
} from "react-bootstrap";
import "../components/Navigation.css";
import logo from "../components/images/logo.png";

import { logoutInitiate } from "../redux/actions";

const Navigation = () => {
  const { currentUser } = useSelector((state) => state.user);
  const dispatch = useDispatch();

  const HandleAuth = () => {
    if (currentUser) {
      dispatch(logoutInitiate());
    }
  };
  const routeToHideAfterlogin = () => {
    if (currentUser) {
      return (
        <>
         <Link to="/admission" className="item" id="item">
            Admission
          </Link>
          <p className="item" id="item" onClick={HandleAuth}>
            Logout
          </p>
        </>
      );
    } else {
      return (
        <>
          <Link to="/login" className="item" id="item">
            Sign In
          </Link>
          <Link to="/signup" className="item" id="item">
            Sign Up
          </Link>
        </>
      );
    }
  };
  return (
    <div className="body">
      <div className="heading">
        <img className="logo" src={logo} alt="logo-img" />
        <div className="container">
          <h2>High School Admission Management System</h2>
          <h2>हायस्कुल एडमिशन मैनेजमेंट सिस्टम</h2>
        </div>
      </div>

      <Navbar expand="lg">
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="nav navbar-nav ">
            <Link to="/" className="item" id="item">
              Home
            </Link>
            <Link to="/aboutus" className="item" id="item">
              About Us
            </Link>
            <Link to="/contactus" className="item" id="item">
              Contact Us
            </Link>
            {routeToHideAfterlogin()}
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};

export default Navigation;
