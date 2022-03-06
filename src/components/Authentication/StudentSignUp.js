
import React from 'react';
import "../Authentication/StudentSignUp.css"
import GoogleAuth from './GoogleAuth';
import Button from 'react-bootstrap/Button'

class StudentSignUp extends React.Component {
  render() {
    return (
      <div id='signupbox'>
      <div>
        
        <div>
          <h3  id="signtitle" >SIGN UP</h3>
        </div>
        <div>
          <input id="signupname" placeholder="Name" />
          <input id="signupemail" placeholder="Email" />
          <input className='pass' placeholder="Password" />
          <input className='pass' placeholder="Confirm Password"/>
          <Button variant="outline-primary" id='signbutton'>SIGN UP</Button>
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

export default StudentSignUp;
