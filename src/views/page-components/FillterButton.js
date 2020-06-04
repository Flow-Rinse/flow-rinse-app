import React from "react";
import CategoryIcon from "../../assets/img/book-icons/Category.png";
import LocationIcon from "../../assets/img/book-icons/Location.png";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function FillterButton() {
  return (
    <>
      <div className="section-filter-buttons">
        <Container>
          <Row>
            <Col className="filter-buttons-container">
              <Button className="btn-round" color="info" outline type="button">
                CATEGORIES
                <img className="ml-3" src={CategoryIcon}/>
              </Button>
              <Button className="btn-round" color="info" outline type="button">
                LOCATION
                <img className="ml-3" src={LocationIcon}/>
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default FillterButton;
