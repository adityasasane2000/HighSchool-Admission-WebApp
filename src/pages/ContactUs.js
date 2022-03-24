import React, { Component } from 'react';
import { Map, GoogleApiWrapper } from 'google-maps-react'
import "./ContactUs.css";
import { Row, Col, Container } from 'react-bootstrap';


class ContactUs extends Component {
  render() {
    return (<>
      <Container>
        <Row md={12}>
          <h1 className='homepage-headings'>Contact Us</h1>
        </Row>
      </Container>
      <Container>

        <Row >



          <Col lg={6} md={12} className='Map-info' >

            <h4>High School Addmission Managment</h4>
            <p>At post:narayangaon</p><br/>
            <p>Tal:Junner , Dist :Pune</p>
            <p>Principal ph no :</p>
            <p>Fax no:</p>
            <p>E-mail:hsam@gmail.com</p>
          </Col>
          <Col lg={6} md={12} className='Map'>
            <Map
              google={this.props.google}
              style={{ width: "40%", height: "30%" }}
              zoom={10}
              initialCentre={
                {
                  lat: 19.117990,
                  lng: 73.973633
                }
              }
            />   </Col>

        </Row>
      </Container>

    </>

    );
  }
}
export default GoogleApiWrapper({
  apiKey: "AIzaSyC_wcQk1UxwAbBu9mR1crm3RAitDiIPOv8"
})(ContactUs)

