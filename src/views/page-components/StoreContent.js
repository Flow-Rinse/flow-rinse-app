import React from "react";
import HeaderBG from "../../assets/img/book-icons/store-page.png";
import BackButton from "../../assets/img/book-icons/Back.png";
import Bookmark from "../../assets/img/book-icons/Bookmark.png";
import Share from "../../assets/img/book-icons/Share.png";
import Star from "../../assets/img/book-icons/Star.png";
import Web from "../../assets/img/book-icons/Web.png";
import Facebook from "../../assets/img/book-icons/Facebook.png";
import Phone from "../../assets/img/book-icons/Phone.png";

// plugin that creates slider

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function StoreContent() {
  return (
    <>
      <div className="section-store-content">
        <Container>
          <Row>
           <Col xs="12" lg="12">
              <div className="store-content-card store-content-about">
                <h3 className="store-content-title">
                  About the Store
                </h3>
                <p className="store-content-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia quam a scelerisque sodales. Aenean vestibulum ac ex ut pharetra. 
                </p>
              </div>
           </Col>
           <Col  xs="12" lg="6">
              <div className="store-content-card store-content-services">
                <h3 className="store-content-title">
                  <span>Haircut</span>
                  <span>Php100.00</span>
                </h3>
                <span className="services-time">30 min.</span>
                <p className="store-content-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia quam a scelerisque sodales. Aenean vestibulum ac ex ut pharetra. 
                </p>
                <div className="service-time-container">
                  <a href="" className="service-time-pill">
                    10:00am
                  </a>
                  <a href="" className="service-time-pill">
                    10:00am
                  </a>
                </div>
              </div>
           </Col>
           <Col  xs="12" lg="6">
              <div className="store-content-card store-content-services">
                <h3 className="store-content-title">
                  <span>Haircut</span>
                  <span>Php100.00</span>
                </h3>
                <span className="services-time">30 min.</span>
                <p className="store-content-info">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam lacinia quam a scelerisque sodales. Aenean vestibulum ac ex ut pharetra. 
                </p>
                <div className="service-time-container">
                  <a href="" className="service-time-pill">
                    10:00am
                  </a>
                  <a href="" className="service-time-pill">
                    10:00am
                  </a>
                </div>
              </div>
           </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StoreContent;
