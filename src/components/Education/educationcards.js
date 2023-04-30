import React from "react";
import Card from "react-bootstrap/Card";


function EduCards(props) {
  return (
    <Card className="project-card-view">
      
      <Card.Body>
        
      <Card.Title className="exp-com-primary">{props.title}</Card.Title>
      <Card.Subtitle >{props.subtitle}</Card.Subtitle>
      <Card.Text>{props.time}</Card.Text>
      <Card.Text>{props.grade}</Card.Text>
      <Card.Text >{props.majors}</Card.Text>
      <Card.Text style={{ textAlign: "justify" }}>{props.description_r}</Card.Text>
      
      {"\n"}
      {"\n"}
      </Card.Body>
    </Card>
  );
}
export default EduCards;
