import React from "react";
import { Card, Button } from "react-bootstrap";

export const NewApiCard = ({ item, index }) => {
  return (
    <Card className="content-card-head" style={{ width: "18rem" }}>
      <Card.Img className="Content-img" variant="top" src={item.image} />
      <Card.Body className="Content-card-body">
        <Card.Title>{item.title.substr(0, 20) + "..."}</Card.Title>
        <Card.Text>{item.category}</Card.Text>
        <Card.Text className="content-desc">
          {item.description.substr(0, 90) + "..."}
        </Card.Text>

        <Card.Text>
          <b>Rs.{item.price}</b>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>
  );
};
