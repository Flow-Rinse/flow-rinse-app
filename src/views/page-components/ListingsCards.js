import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function ListingsCards() {
  return (
    <>
      <Col className="card-listings-container" xs="6" xl="4">
        <Card className="card-blog">
          <div className="card-image">
            <img
              alt="..."
              className="img rounded"
              src={require("assets/img/project13.jpg")}
            ></img>
          </div>
          <CardBody>
            <CardTitle tag="h5">
              <a href="#pablo" onClick={e => e.preventDefault()}>
                Styles Salon
              </a>
            </CardTitle>
            <p className="card-description">
              Get the latest hairstyles only at Styles Salon!
            </p>
            <Button className="btn-round w-100" type="button">
              BOOK NOW
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}



export default ListingsCards;
