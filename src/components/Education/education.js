import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import EduCards from "./educationcards";
import Particle from "../Particle";


function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Education</strong> Background
        </h1>
        <p style={{ color: "white" }}>
        Throughout my academic career, I have embarked on a transformative journey of learning and growth, culminating in a wealth of knowledge and skill. Here is a brief of my education journey.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          

          <Col md={4} className="project-card">
            <EduCards
              
              
              title="SRM Institute of Science and Technology "
              subtitle="Bachelors of Technology in Computer Science Engineering"
              time="Jun 2019 - May 2023"
              grade="9.51/10 CGPA"
              
             
            />
          </Col>

          <Col md={4} className="project-card">
            <EduCards
              
              
              title="Asian University (TW)"
              subtitle="Spring Exchange Program, Digital Image Processing"
              time = "Feb 2022 - Jun 2022"
              grade = "95.3 %"
            />
          </Col>

          <Col md={4} className="project-card">
            <EduCards
              
              
              title="Mantora Public School (CBSE)"
              subtitle= "Senior Secondary Education(Class 12th), Science"
              time = "2018-2019"
              grade = "90 %"
              
                   
            />
          </Col>

          <Col md={4} className="project-card">
            <EduCards
             
            
              title="Delhi Public School (CBSE)"
              subtitle = "High School/ Secondary Education"
              time = " 2016-2017"
              grade = "10/10 GCPA"
              
             
            />
          </Col>

          <Col md={4} className="project-card">
            <EduCards
             
            
              title="Delhi Public School (CBSE)"
              subtitle = "Primary Education"
              time = " 2004-2015"
              grade = "90%"
              
             
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
