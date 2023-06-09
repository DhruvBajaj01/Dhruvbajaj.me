import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import myImg from "../../Assets/avatar.svg";
import Tilt from "react-parallax-tilt";
import {
  AiFillGithub,
  AiFillMail,
  AiFillInstagram,
} from "react-icons/ai";
import { FaLinkedinIn } from "react-icons/fa";

function Home2() {
  return (
    <Container fluid className="home-about-section" id="about">
      <Container>
        <Row>
          <Col md={8} className="home-about-description">
            <h1 style={{ fontSize: "2.6em" }}>
              LET ME <span className="purple"> INTRODUCE </span> MYSELF
            </h1>
            <p className="home-about-body">
              I am a <b className="purple">Software Engineer</b> and I aspire to grow and upskill myself significantly along my career path.

              <br/>
              <br/>
              I am fascinated by technologies that can bring positive changes, 
              and every day I try to dive a little deeper into the vast ocean of programming 
              languages, tools, frameworks, and architectures that contribute 
              to the progress of the world we are living in.
              <br />
              <br />I am fluent in classics like
              <i>
                <b className="purple"> C, C++, Python and Javascript. </b>
              </i>
              <br />
              <br />
              My field of Interest's are building new &nbsp;
              
                <b className="purple">Web Technologies and Products </b> and
                also in areas related to{" "}
                <b className="purple">
                  Deep Learning, Machine Learning and Digital Image Processing.
                </b>
              
              <br />
              <br />
              Whenever possible, I also apply my passion for developing products
              in <b className="purple">Internet of Things </b> and
              
                <b className="purple">
                  {" "}
                  Modern Python Library and Frameworks
                </b>
              
              &nbsp; like
              <i>
                <b className="purple"> Tensorflow, Keras, Django and Flask</b>
              </i>
            </p>
          </Col>
          <Col md={4} className="myAvtar">
            <Tilt>
              <img src={myImg} className="img-fluid" alt="avatar" />
            </Tilt>
          </Col>
        </Row>
        <Row>
          <Col md={12} className="home-about-social">
            <h1> <span className="purple"> FIND </span>ME ON</h1>
            <p>
              Feel free to <span className="purple">connect </span>with me
            </p>
            <ul className="home-about-social-links">
              <li className="social-icons">
                <a
                  href="https://github.com/DhruvBajaj01"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillGithub />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="mailto:9653dhr@gmail.com"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <AiFillMail />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.linkedin.com/in/dhruv-bajaj-bb30211b7/"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour  home-social-icons"
                >
                  <FaLinkedinIn />
                </a>
              </li>
              <li className="social-icons">
                <a
                  href="https://www.instagram.com/dhruv_bajaj_"
                  target="_blank"
                  rel="noreferrer"
                  className="icon-colour home-social-icons"
                >
                  <AiFillInstagram />
                </a>
              </li>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Home2;
