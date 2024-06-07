import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import HighR from "../../Assets/Projects/HighR.png";
import flight from "../../Assets/Projects/Flight.png";
import lung from "../../Assets/Projects/Lung.svg";
import major from "../../Assets/Projects/major.png";
import Hola from "../../Assets/Projects/hola.png";
import Cyclo from "../../Assets/Projects/cyclo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Particle />
      <Container>
        <h1 className="project-heading">
          My Recent <strong className="purple">Works </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are a few projects I've worked on recently.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={major}
              isBlog={true}
              title="IoT enabled Smart Irrigation System in Aquaponics using Machine Learning"
              description="A soil irrigation system using aquaponics
              incorporates real-time sensors to monitor key
              parameters. Data is processed through machine
              learning algorithms and presented visually for
              decision-making and system optimization.
              "
              ghLink="https://link.springer.com/chapter/10.1007/978-981-99-8451-0_17"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={HighR}
              isBlog={false}
              title="Al-Enabled FinTech B2B Invoice Management Application"
              description="Built a Full-stack Invoice Management Application
              using ReactJS, JDBC Servlets, Java, Python,
              Postgres DB and added components of Machine
              Learning Models for payment prediction."
              ghLink="https://github.com/DhruvBajaj01/High_Radius_Project"
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={lung}
              isBlog={false}
              title="Pneumonia Detector using DeepLearing"
              description="A computer-aided diagnosis system for automatic
              pneumonia detection using deep transfer learning
              and chest X-ray images, with 90% Accuracy. Speech
              API and PyQt for enhanced user experience."
              ghLink="https://github.com/DhruvBajaj01/AI-Mini-Project"
                   
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Cyclo}
              isBlog={false}
              title="CycloFit"
              description="A web-based application which allows users to rent
              bicycles and awards them as per the distance
              they cover. Built with HTML, CSS, JavaScript,
              Bootstrap, Flask, SQLite and SQLAlchemy."
              ghLink="https://github.com/DhruvBajaj01/CycloFit-SEPM"
             
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Hola}
              isBlog={false}
              title="Hola"
              description="Developed a personal voice assistant using Python
              that lets the user make a Google search, watch
              Youtube, send Whatsapp messages, compose
              emails and much more by just a voice command.
              "
              ghLink="https://github.com/DhruvBajaj01/Virtual-Assistant"
            
            />
          </Col>

          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={flight}
              isBlog={false}
              title="Flight Booking Application"
              description="A web-based application which allows users to book
              flights and Admin to maintain the website. Built with HTML, CSS, JavaScript,
              Bootstrap, Django, SQLite and SQLAlchemy"
              ghLink="https://github.com/DhruvBajaj01/Devrev" 
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
