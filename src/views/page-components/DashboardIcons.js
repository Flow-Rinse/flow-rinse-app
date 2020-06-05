import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function DashboardIcons(props) {


  return (
    <>
      <div className="section-dashboard-icon">
        <Container>
          <Row>
            <Col xs="6" xl="3">
              <div className="icon-wrapper" onClick={()=> props.routeChange('/listings')}>
                <img src={require("assets/img/book-icons/Find.png")} />
                <span>Find A Store</span>
              </div>
            </Col>
            <Col xs="6" xl="3">
              <div className="icon-wrapper">
                <img src={require("assets/img/book-icons/History.png")} />
                <span>Find A Store</span>
              </div>
            </Col>
            <Col xs="6" xl="3">
              <div className="icon-wrapper mobile-icon">
                <img src={require("assets/img/book-icons/Favourites.png")} />
                <span>Find A Store</span>
              </div>
            </Col>
            <Col xs="6" xl="3">
              <div className="icon-wrapper mobile-icon">
                <img src={require("assets/img/book-icons/Settings.png")} />
                <span>Find A Store</span>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DashboardIcons;
