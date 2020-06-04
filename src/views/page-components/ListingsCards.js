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

function ListingsCards(props) {
  console.log(props)
  function routeChange(path) {  
    props.history.push(path);
  };

  return (
    <>
      <Col className="card-listings-container" xs="6" xl="4">
        <Card className="card-blog">
          <div className="card-image">
            <img
              alt="..."
              className="img rounded"
              src={props.value.photo_url}
            ></img>
          </div>
          <CardBody>
            <CardTitle tag="h5">
              <a href="#pablo" onClick={e => e.preventDefault()}>
               {props.value.name}
              </a>
            </CardTitle>
            <p className="card-description">
            {props.value.description}
            </p>
            <Button className="btn-round w-100" type="button" onClick={()=> routeChange('/booking')}>
              BOOK NOW
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}



export default ListingsCards;
