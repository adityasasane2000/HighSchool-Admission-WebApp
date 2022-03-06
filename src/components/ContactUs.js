import React ,{Component} from 'react';
import {Map,GoogleApiWrapper} from 'google-maps-react'

 class ContactUs extends Component{
  render(){
    return(<>
    <h1>Contact</h1>
     <h3>High School Addmission Managment</h3>
    <br/> At post:narayangaon
     <br/>Tal:Junner , Dist :Pune
     <br/> Principal ph no :
     <br/> Fax no:
     <br></br>E-mail:hsam@gmail.com
     
      <Map
        google = {this.props.google}
        style={{width:"50%", height:"50%"}}
        zoom ={10}
        initialCentre ={
          {
            lat:19.117990,
            lng:73.973633
         }
        }
      />
      </>
      
    );
  }
}
export default GoogleApiWrapper({
  apiKey:"AIzaSyC_wcQk1UxwAbBu9mR1crm3RAitDiIPOv8"
})(ContactUs)

