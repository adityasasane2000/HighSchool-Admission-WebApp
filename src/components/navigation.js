
import React from 'react';
import {Link} from 'react-router-dom';

const  navigation =()=> {
  return(
    <div>
      <Link to = "/" className='item'>Home</Link>
      <Link to = "/aboutus" className='item'>About Us</Link>
      <Link to = "/contactus" className='item'>Contact Us</Link>
      <Link to = "/admission" className='item'>Admission</Link>
    </div>
  );
}

export default navigation;
