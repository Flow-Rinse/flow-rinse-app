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

import moment from 'moment';

// core components

function ListingsCards(props) {

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
              <p className="card-description">
                {props.value.city}
              </p>
            </CardTitle>
            <p className="card-description">
              {props.value.description}
            </p>
            <p className="card-description">
              {'Open now • Closes '+ moment(new Date).format("h a")}
            </p>
            <Button className="btn-round w-100" type="button" onClick={(e)=>{ 
              e.preventDefault()
              props.routeChange('/booking')}}>
              BOOK NOW
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}



export default ListingsCards;
