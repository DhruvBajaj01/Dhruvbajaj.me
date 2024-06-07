import React from "react";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import { CgWebsite } from "react-icons/cg";
import { BsGithub } from "react-icons/bs";

function ProjectCards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Body>
        <Card.Title className="exp-com-primary">{props.title}</Card.Title>
        <Card.Text style={{ textAlign: "justify" }}>
          {props.description}
        </Card.Text>
        <Card.Img variant="top" src={props.imgPath} alt="card-img" />
        {!props.isBlog && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
          <BsGithub /> &nbsp;
            {"GitHub"}
          </Button>
        )}
        
        {/* If the component contains Demo link and if it's not a Blog then, it will render the below component  */}

        {props.isBlog && (
          <Button
            variant="primary"
            href={props.ghLink}
            target="_blank"
            style={{ marginLeft: "10px" }}
          >
            <CgWebsite /> &nbsp;
            {"Research Paper"}
          </Button>
        )}
      </Card.Body>
    </Card>
  );
}
export default ProjectCards;
