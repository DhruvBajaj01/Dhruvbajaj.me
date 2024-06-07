import React from "react";
import Card from "react-bootstrap/Card";
import { GoDotFill } from "react-icons/go";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Dhruv </span>
            from <span className="purple">India.</span>
            <br />I am a Software Engineer with Bachelor of Technology in <span className="purple">Computer Science Engineering</span>. I am passionate about technology and building software products. 
            <br />
            <br />
            Apart from coding, here are some other activities that I love to do!
          </p>
          <ul>
            <li className="about-activity">
              <GoDotFill /> Playing Sports
            </li>
            <li className="about-activity">
              <GoDotFill /> Travelling
            </li>
            <li className="about-activity">
              <GoDotFill /> Listening to Music
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
