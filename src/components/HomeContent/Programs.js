import React  from 'react'
import "../../components/HomeContent/Program.css"
import { Row, Col, Container } from 'react-bootstrap';




 const Programs = ()=> {
 
  
 return<>
 <Container>
 <Row md={12}>
 <h1 className='homepage-headings'>PROGRAMS</h1>
 </Row>
 </Container>
 <div className='Programsbox'>
 <Container>
 <Row >
             


 <Col lg={4} md={12} >
 <div className="cardlayout1">
     
        <h3 className='program-titles'>Science</h3>
        <div className="text-box">
            <p id='ttvd' >Tap to view details</p>
        </div>
    </div>
</Col>
 

<Col lg={4} md={12}>
    <div className="cardlayout2">
        <h3 className='program-titles'>Commerce</h3>
        <div className="text-box">
            <p id='ttvd' > Tap to view details</p>
        </div>
    </div>
    </Col>

    <Col lg={4} md={12}>
    <div className="cardlayout3">
        <h3 className='program-titles'> Arts</h3>
        <div className="text-box">
            <p id='ttvd'>Tap to view details</p>
        </div>
    
    </div>
    </Col>
  
 
    </Row>
    </Container>
    </div>

 </>
}

export default Programs;
