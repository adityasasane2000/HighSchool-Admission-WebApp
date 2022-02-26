
import React, { Component } from "react";
import {Link} from 'react-router-dom';

import GoogleAuth from "./GoogleAuth";
import Button from 'react-bootstrap/Button'

class StudentLogin extends React.Component {
  render() {
    return (
      <div id="signinbox">
        <div>
        <div id="signtitle">
          <div>
          <h3 >SIGN IN</h3>
        </div>
        <div>
          <label>Or <Link to ="/signup" id="createaccount">Create an account</Link></label>
        </div>
        </div>
        
        <div>
          <input id="signinemail" placeholder="email" />
          <input id="signinpass" placeholder="Password" />
          <Button variant="outline-primary" id='signbutton'>SIGN IN</Button>
          
        </div>
        <div className="orcont">
        <label>Or continue with</label>
        </div>
        <div>
          <GoogleAuth />
        </div>
      </div>
      </div>
    );
  }
}

export default StudentLogin;
