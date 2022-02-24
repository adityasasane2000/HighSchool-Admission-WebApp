
import React from 'react';

import GoogleAuth from './GoogleAuth';

class StudentSignUp extends React.Component {
  render() {
    return (
      <div>
        <div>
          <h3>SIGN UP</h3>
        </div>
        <div>
          <input placeholder="Name" />
          <input placeholder="Email" />
          <input placeholder="Password" />
          <input placeholder="Confirm Password"/>
          <button>SIGN UP</button>
        </div>
        <label>Or continue with</label>
        <div>
          <GoogleAuth />
        </div>
      </div>
    );
  }
}

export default StudentSignUp;
