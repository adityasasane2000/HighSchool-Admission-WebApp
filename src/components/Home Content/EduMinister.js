import React  from 'react';
import "../../components/Home Content/EduMinister.css"
import varsha from '../../components/images/varsha.jpeg' 
import kadu from '../../components/images/kadu.jpeg' 
import vandana from '../../components/images/vandana.jpeg' 
import {Button, Card } from 'react-bootstrap';


 const EduMinister = () => {
 
    return <>
    <edumin>

<div classname="varshadiv">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={varsha} />
  <Card.Body>
    <Card.Title>    <h4>Prof.Varsha Gaikwad</h4></Card.Title>
    <Card.Text>
    Hon'ble Minister of <br/> School Education Department 
    </Card.Text>
  </Card.Body>
</Card>
</div>

<div classname="kadudiv">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={kadu} />
  <Card.Body>
    <Card.Title>    <h4>Shri.Omprakash Bachchu Kadu</h4></Card.Title>
    <Card.Text>
    Minister of State <br/> Goverment of Maharastra
    </Card.Text>
  </Card.Body>
</Card>
</div>
<div classname="vandanadiv">
<Card style={{ width: '18rem' }}>
  <Card.Img variant="top" src={vandana} />
  <Card.Body>
    <Card.Title>    <h4>Smt.Vandana Krishna(I.A.S</h4></Card.Title>
    <Card.Text>
    Hon'able chief Secretory , <br/>School Education
    </Card.Text>
  </Card.Body>
</Card>
</div>



</edumin>
    </>
    
    
 
}

export default EduMinister;