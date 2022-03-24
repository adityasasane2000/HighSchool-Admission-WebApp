import React from "react";
import Marquee from "react-fast-marquee";
import { Row, Col, Container } from "react-bootstrap";

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
              <div className="noticeboard">
                <h1 className="homepage-headings"> NOTICEBOARD</h1>

                <div
                  className="marquee2"
                  width="100%"
                  direction="up"
                  height="200px"
                  behaviour="scroll"
                >
                  <ul>
                    <li>
                      Collage la sutti chalu ahe.Collage la sutti chalu
                      aheCollage la sutti chalu aheCollage la sutti chalu
                      aheCollage la sutti chalu aheCollage la sutti chalu ahe
                    </li>
                    <br />

                    <li>There is one problen in organization that's why tommorow is holiday</li>
                    <br />
                    <li>It is mandatory to wear masks in campus according to covid guidelines</li>
                    <br />

                  </ul>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

export default NoticeBoard;
