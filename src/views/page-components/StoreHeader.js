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
var headerStyle = {
  backgroundImage: `url(${HeaderBG})`
}
function StoreHeader(props) {

  return (
    <>
      <div className="section-store-header" style={headerStyle}>
        <Container>
          <Row>
            <div className="store-header-nav">
              <div className="back-nav">
                <a  href="">
                  <img alt="..." src={BackButton}></img>
                </a>
              </div>
              <div className="share-nav">
                <a  href="">
                  <img alt="..." src={Bookmark}></img>
                </a>
                <a  href="">
                  <img alt="..." src={Share}></img>
                </a>
              </div>
            </div>
          </Row>
          <Row>
            <div className="store-header-info">
              <img
                  alt="..."
                  className="rounded-circle store-image"
                  src={require("assets/img/julie.jpg")}
                ></img>
                <h3>{props.value.name}</h3>
                <span>{props.value.city}</span>
                <span>{props.value.location}</span>
                <div className="store-rating">
                  <img alt="..." src={Star}></img>
                  <img alt="..." src={Star}></img>
                  <img alt="..." src={Star}></img>
                  <img alt="..." src={Star}></img>
                  <img alt="..." src={Star}></img>
                </div>
            </div>
          </Row>
          <Row className="store-header-contact">
            <div>
              <a href="" className="call-btn contact-icons">
                Call
                <img alt="..." src={Phone}></img>
              </a>
              <img alt="..." src={Facebook} className="contact-icons"></img>
              <img alt="..." src={Web} className="contact-icons"></img>
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StoreHeader;
