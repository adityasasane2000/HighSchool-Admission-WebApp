import React  from 'react'

import image1 from '../../components/images/image1.jpg' 
import image2 from '../../components/images/image2.jpeg' 

 const Programs = ()=> {
 
  
 return<>
 <h1>PROGRAMS</h1>
 <div>
 <img className="science" src={image1} alt="logo-img" />   
 </div>
 <div>
 <img className="commerce" src={image2} alt="logo-img" />   
 </div>
 </>
}

export default Programs;
