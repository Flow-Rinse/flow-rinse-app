import React from "react";
import HeaderBG from "../../assets/img/book-icons/store-page.png";
import BackButton from "../../assets/img/book-icons/Back.png";
import Bookmark from "../../assets/img/book-icons/Bookmark.png";
import Share from "../../assets/img/book-icons/Share.png";
import Star from "../../assets/img/book-icons/Star.png";
import Web from "../../assets/img/book-icons/Web.png";
import Facebook from "../../assets/img/book-icons/Facebook.png";
import Phone from "../../assets/img/book-icons/Phone.png";

import moment from 'moment';
// plugin that creates slider

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function StoreContent(props) {

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
                  {props.value.description}
                </p>
              </div>
           </Col>
           {  
              props &&  props.services && props.services.length > 0 && props.services.map((valueMain, index) => {
                return(
                  <Col key={index} xs="12" lg="6">
                    <div className="store-content-card store-content-services">
                      <h3 className="store-content-title">
                        <span>{valueMain.name}</span>
                        <span>{'Php '+valueMain.price}</span>
                      </h3>
                      <span className="services-time">{valueMain.duration+ (valueMain.duration > 1 ? " hours" : " hour")}</span>
                      <p className="store-content-info">
                        {valueMain.description && valueMain.description}
                      </p>
                      <div className="service-time-container">
                        {
                          valueMain && valueMain.schedule_per_service.length > 0 && valueMain.schedule_per_service.map((value, index) => {
                            // disabled
                            return(
                              <a key={index} onClick={()=> value.current_bookings === 1 ? alert('cannot be booked') : props.routeChange('/booking', {...valueMain, ...value})} className={value.current_bookings === 1 ? 'service-time-pill disabled' : 'service-time-pill'}>
                                {/* {moment(value.time).format('hh:mm a')} */}
                                {value.time}
                              </a>
                            )
                          })
                        }
                      </div>
                    </div>
                </Col>
                )
              })
              // :
              // <Col xs="12" lg="12">
              //   <p className="store-content-info">
              //     {'No service available'}
              //   </p>
              // </Col>
            }
           
          </Row>
        </Container>
      </div>
    </>
  );
}

export default StoreContent;
