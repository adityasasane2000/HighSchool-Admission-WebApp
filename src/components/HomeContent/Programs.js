import React  from 'react'
import "../../components/HomeContent/Program.css"
import { Row, Col, Container } from 'react-bootstrap';




 const Programs = ()=> {
 
  
 return<>
 <Container>
            <Row >
              <Col lg={12}>
 
 <h1 className='homepage-headings'>PROGRAMS</h1>
 <div className='Programsbox'>
 <div className="cardlayout1">
        <h3 className='program-titles'>Science</h3>
        <div className="text-box">
            <p>Tap to view details</p>
        </div>
    </div>

 


    <div className="cardlayout2">
        <h3 className='program-titles'>Commerce</h3>
        <div className="text-box">
            <p>Tap to view details</p>
        </div>
    </div>
    <div className="cardlayout3">
        <h3 className='program-titles'> Arts</h3>
        <div className="text-box">
            <p>Tap to view details</p>
        </div>
    </div>
    </div>
    </Col>
    </Row>
    </Container>

 </>
}

export default Programs;
