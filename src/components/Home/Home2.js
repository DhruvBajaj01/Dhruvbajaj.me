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
              I am a <b className="purple">Software Developer</b> and my professional journey is driven by an unwavering commitment to continuous growth and advancement.

              <br/>
              <br/>
              I am fascinated by technologies that can bring positive changes, 
              and every day I try to dive a little deeper into the vast ocean of programming 
              languages, tools, frameworks, and architectures that contribute 
              to the progress of the world and shaping the future.
              <br />
              <br /> My proficiency spans foundational languages such as 
              <b className="purple"> C, C++, Python and Javascript </b>
              serving as the bedrock for my exploration and innovation.
              <br />
              <br />
              Primarily, I thrive in the dynamic realm of crafting cutting-edge 
              <b className="purple"> web technologies and products, </b>
              where I orchestrate the convergence of creativity and functionality. 
              Additionally, my passion extends to the frontiers of
              <b className="purple"> Deep Learning, Machine Learning, Digital Image Processing and Large Language Model </b> 
              areas where I actively seek to push boundaries and pioneer new solution
              <br />
              <br />
              Furthermore, I find fulfillment in exploring the intersection of technology and tangible applications, 
              particularly within the realms of the <b className="purple">Internet of Things </b>.
              I'm adept at utilizing modern Python libraries and frameworks like <b className="purple">Django, Flask, FastAPI, TensorFlow and Keras </b>
              to bring ideas to life.
              <br />
              <br />
              In essence, I am not merely a software engineer, I am a relentless pursuer of excellence, an advocate for innovation, and a catalyst for positive change through technology.
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
