import React from "react";
import { Link } from "react-router-dom";
import { Row, Col, Container } from "react-bootstrap";

const Principal = () => {
  return (
    <div>
      <Container>
        <Row>
          <Col lg={8}>
            <h1 className="homepage-headings">Principal Desk</h1>
            <div className="image">
              <div className="content">
                <h4> Prof.Kharmale Sir</h4>
                <div className="text"> Principal</div>
                <br />
                <p>
                  {" "}
                  High School is a monumental institution started on June 20,
                  1966 in memory of a veteran educationist and social activist
                  Saheb of this region who had devoted all his life in the
                  development of Junner tehsil in Pune district with the
                  hurricane efforts of hundreds and thousands of activists. The
                  memorial contributions of honourable Saheb have been brought
                  into realities and his dream has come true in the form of this
                  educational institution. The college has become a place of
                  educational centre in Ambegaon, Junnar and Khed tehsils.
                  Located in the beautiful natural campus, this college has been
                  imparting education through different faculties consistently.
                </p>
              </div>
            </div>
          </Col>
          <Col lg={4}>
            <div>
              <div className="container">
                <h1 className="homepage-headings">Events</h1>
              </div>
              <Link to="hi 11">Covid Vaccination for age group 15+</Link>
              <br />
              <Link to="hi">Online guest lectures for importance of education</Link>
              <br />
              <Link to="/">World Science Day</Link>
              <br />
              <Link to="/">Covid-19 Vaccination Drive for Students</Link>
              
              <Link to="hi 11">Covid Vaccination for age group 15+</Link>
              <br />
              <Link to="hi">Online guest lectures for importance of education</Link>
              <br />
              <Link to="/">World Science Day</Link>
              <br />
              <Link to="/">Covid-19 Vaccination Drive for Students</Link>
              
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Principal;
