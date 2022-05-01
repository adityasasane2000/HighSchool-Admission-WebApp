import React from "react";
import Marquee from "react-fast-marquee";
import { Row, Col, Container } from "react-bootstrap";
import "../../components/HomeContent/NoticeBoard.css";

class NoticeBoard extends React.Component {
  render() {
    return (
      <div>
        <Container>
          <Row>
            <Col lg={8}>
              <div className="">
                <h1 className="homepage-headings">Vision</h1>
                <p>
                  Education for masses is principal instrument and the tool for
                  eradication of all pervasive social evils and desirable
                  effective social change. Education through self-help is a
                  significant and chief drive of social change to achieve
                  different tasks of nation building by establishing social
                  equality and social justice.
                </p>
              </div>
              <div className="">
                <h1 className="homepage-headings">Mission</h1>
                <p>
                  In order to achieve the vision as To import higher Education
                  through the University formal courses and non-traditional self
                  financing and short term courses. By imparting higher
                  education for the upliftment of the backward, the depressed,
                  and the underprivileged and tribal communities of the region.
                  To inculcate values and virtues among the students as
                  mentioned the aims and the objectives of the college.
                </p>
              </div>
            </Col>
            <Col lg={4}>
            <h1 className="homepage-headings">NOTICEBOARD</h1>
              <div className="microsoft container">
                <p class="marquee-notice"><li>All branches students are informed to wear masks while entering school campus as maks are mandatoru to enter in the school premises</li>

                </p>         <br />
                <p class="marquee-notice">

                  <li>Exam form id to be filled as soon as possible or extra fees are to concelled by the examination construct team, if active backlogs (any) exam fees are adjusted accordingly</li>
                </p>         <br />
                <p class="marquee-notice">


                  <li>Students are informed that wearing uniforms is a compulsion from wednesday</li></p>
                  <br />
                <p class="marquee-notice"><li>All branches students are informed to wear masks while entering school campus as maks are mandatoru to enter in the school premises</li>

                </p>
           

              </div>

            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NoticeBoard;
