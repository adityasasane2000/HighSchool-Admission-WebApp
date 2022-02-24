
import React from 'react';

 class AdminLogin extends React.Component{
  
  render() {
    return (
      <div>
        <div>
          <input placeholder="email" />
          <input placeholder="Password" />
          <button>SIGN IN</button>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
