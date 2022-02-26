
import React from 'react';
import Button from 'react-bootstrap/Button'

 class AdminLogin extends React.Component{
  
  render() {
    return (
      <div id='loginbox'>
         <div>
          <h3  id="logtitle" >LOG IN</h3>
        </div>
        <div>
        <input id="signinemail" placeholder="email" />
          <input id="signinpass" placeholder="Password" />
          <Button variant="outline-primary" id='signbutton'>SIGN IN</Button>
        </div>
      </div>
    );
  }
}

export default AdminLogin;
