import React from 'react'
import submitted from './submitted.gif';
import "./success.css"


function SuccessfullySubmit()
 {
  return (
    
    <div className='Sucess'>
     <div  className='successimg1'> <img  className='successimg1' src={submitted} /></div>
     
     
     <h5 className='Submitted-text'>Form Submitted Successfully </h5>
     
       </div>
  )
}

export default SuccessfullySubmit