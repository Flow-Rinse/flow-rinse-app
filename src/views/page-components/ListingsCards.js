import React from "react";

// reactstrap components
import {
  Button,
  Card,
  CardImg,
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
          <div style={{width: '100%', objectFit: 'contain'}}>
            <img
              style={{height: 150, width: '100%'}}
              alt="..."
              className="img rounded image-responsive"
              src={props.value.photo_url}
            ></img>
          </div>
          {/* <CardImg className="img rounded img-responsive" top width="100%" src={props.value.photo_url} alt="" style={{display: 'block', height: 'auto', width: '100%'}}/> */}

          <CardBody>
            <div>
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
            </div>
            <Button className="btn-round w-100" type="button" onClick={(e)=>{ 
              e.preventDefault()
              props.routeChange('/store', props.value)}}>
              BOOK NOW
            </Button>
          </CardBody>
        </Card>
      </Col>
    </>
  );
}



export default ListingsCards;
