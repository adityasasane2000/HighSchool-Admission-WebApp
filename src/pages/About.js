
import React, { Component } from 'react';
import { Row, Col, Container } from 'react-bootstrap';
class About extends Component {

  render() {
    return <div>
      <Container>
        <Row md={12}>
          <h1 className='homepage-headings'>About Us</h1>
        </Row>
        <Row md={12}>
          <p>Arts, Commerce & Science College was established in the year 1995 and it is a distinguished degree college
            affiliated to the University of Pune. Sheltered in huge well architectured premises along with multiple
            institutes, the college has a unique academic atmosphere chiefly characterized by interdisciplinary
            scholarly interaction and healthy competitive spirit and enthusiasm to excel in various curricular
            activities. The college has been Accredited by NAAC with A Grade.</p>

          <p>The Unitech's Complex in Pune houses many prestigious institutions and colleges, imparting knowledge and learning
            in various disciplines to meet global challenges of 21 century. Within a very short span of time the college has
            gained recognition for preparing and grooming the students at under-graduate and post-graduate level into academically
            meritorious students and professionally efficient scholars. The highly qualified staff, well-equipped laboratories and
            well -stocked library in the college premises have yielded positive and encouraging results in enabling the students
            to excel in academics as well as extra-curricular activities.</p>
        </Row>
      </Container>

    </div>;
  }
}

export default About;
