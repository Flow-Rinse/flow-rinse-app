/*eslint-disable*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";
import moment from 'moment';
// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  Collapse,
  FormGroup,
  Container,
  Row,
  Col,
  UncontrolledTooltip,
  PopoverBody,
  PopoverHeader,
  UncontrolledPopover,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Modal,
  ModalFooter
} from "reactstrap";

// core components

function ModalConfirm(props) {
 
  // modals states and functions
  const [modalClassic, setModalClassic] = React.useState(props.modalstate);

  return (
    <>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          {/* <h3 className="title">Javascript components</h3>
          <Row id="modals">
            <Col md="6">
              <h4>Modal</h4>
              <Button
                color="info"
                className="mr-1"
                onClick={() => setModalClassic(true)}
              >
                <i className="now-ui-icons files_single-copy-04"></i> Classic
              </Button>
              </Col>
            </Row> */}
              <Modal
                className="confirm-booking-modal"
                isOpen={props.modalstate}
                toggle={() => props.setModalState(false)}
              >
                <div className="modal-header justify-content-center">
                  <h4 className="title title-up">{props.isBooked ? 'Booking Confirmed!': 'Confirm Booking?'}</h4>
                </div>
                {/* if you will be using the other modal with kabooked text add text-center class in modal-body */}
                {/* <div className="modal-body text-center"> */}
                <div className="modal-body">
                  {
                    props.isBooked ?
                    <p className="kabooked-text">
                      <img className="mb-3" src={require("assets/img/book-icons/modal-confirm.svg")}/>
                      Kabooked!
                    </p>
                    :
                    <div>
                      <p>
                        {"Service : " + props.schedule.name}
                      </p>
                      <p>
                        {"Date : " + moment(props.schedule.scheduleDate).format("dddd, MMMM DD")}
                      </p>
                      <p>
                        {"Time : " + props.schedule.name}
                      </p>
                    </div>
                  }
                </div>
                <ModalFooter>
                  <Button className="btn-round w-100" type="button" onClick={()=> props.isBooked ? props.setModalState(false) : props.requestBooking()}>
                    {props.isBooked ? 'Great!': 'Confirm'}
                  </Button>
                </ModalFooter>
              </Modal>
        </Container>
      </div>
    </>
  );
}

export default ModalConfirm;
