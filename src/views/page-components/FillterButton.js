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

function FillterButton(props) {
  return (
    <>
      <div className="section-filter-buttons">
        <Container>
          <Row>
            <Col xl="5" className="filter-buttons-container">
              <Button className="btn-round mr-2" color="info" block outline type="button" style={{display: 'flex', justifyContent: 'space-around'}}>
                <span style={{alignSelf: 'center'}}>CATEGORIES</span>
                <img className="ml-3" src={CategoryIcon}/>
              </Button>
              <Button className="btn-round ml-2" color="info" block outline type="button" onClick={props.setShowRange} style={{display: 'flex', justifyContent: 'space-around'}}>
                <span style={{alignSelf: 'center'}}>LOCATION</span>
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
