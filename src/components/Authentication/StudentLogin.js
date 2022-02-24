
import React, { Component } from "react";
import {Link} from 'react-router-dom';

import GoogleAuth from "./GoogleAuth";

class StudentLogin extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>SIGN IN</h3>
        </div>
        <div>
          <label>Or <Link to ="/signup">Create an account</Link></label>
        </div>
        <div>
          <input placeholder="email" />
          <input placeholder="Password" />
          <button>SIGN IN</button>
        </div>
        <label>Or continue with</label>
        <div>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default StudentLogin;
