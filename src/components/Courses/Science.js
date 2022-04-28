
import React from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import Dropdown from 'react-bootstrap/Dropdown';
import "../Courses/courses.css";

const Science = () =>{
    return (
        <div>
        
        <div className="Courses-dropdown-Button">
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <Dropdown>
        <Dropdown.Toggle variant="success">
       Vision Mission
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <h1 className="course-headings">Vision</h1>
                <p>
                  Education for masses is principal instrument and the tool for
                  eradication of all pervasive social evils and desirable
                  effective social change. Education through self-help is a
                  significant and chief drive of social change to achieve
                  different tasks of nation building by establishing social
                  equality and social justice.
                </p>
              
              <div className="">
                <h1 className="course-headings">Mission</h1>
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
        </Dropdown.Menu>
      </Dropdown>
    </div>
                
        </div>
        <div className="Courses-dropdown-Button">
        <div style={{ display: 'block', 
                  width: 700, 
                  padding: 30 }}>
      <Dropdown>
        <Dropdown.Toggle variant="success">
       Curriculam
        </Dropdown.Toggle>
        <Dropdown.Menu>
        <h1 className="course-headings">Vision</h1>
                <p>
                  Education for masses is principal instrument and the tool for
                  eradication of all pervasive social evils and desirable
                  effective social change. Education through self-help is a
                  significant and chief drive of social change to achieve
                  different tasks of nation building by establishing social
                  equality and social justice.
                </p>
              
              <div className="">
                <h1 className="course-headings">Mission</h1>
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
        </Dropdown.Menu>
      </Dropdown>
    </div>
    </div>
        <div>
        Timetable
    </div>
    </div>
    );
}

export default Science;