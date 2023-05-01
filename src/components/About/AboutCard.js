import React from "react";
import Card from "react-bootstrap/Card";
import { GoPrimitiveDot } from "react-icons/go";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv Bajaj </span>
            from <span className="purple"> Kanpur, India.</span>
            <br />I am a Software Engineer pursuing Bachelor of Technology in Computer Science Engineering from <span className="purple">SRM Institute of Science and Technology</span>.
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GoPrimitiveDot /> Playing Sports
            </li>
            <li className="about-activity">
              <GoPrimitiveDot /> Travelling
            </li>
            <li className="about-activity">
              <GoPrimitiveDot /> Listening to Music
            </li>
          </ul>
          <br></br>
          <br></br>
          <p style={{ color: "rgb(15 226 172)" }}>
            "Strive to build things that make a difference!"{" "}
          </p>
          
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;
