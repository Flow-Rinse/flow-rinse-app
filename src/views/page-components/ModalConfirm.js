/*eslint-disable*/
import React from "react";
// react plugin used to create datetimepicker
import ReactDatetime from "react-datetime";

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

function ModalConfirm() {
 
  // modals states and functions
  const [modalClassic, setModalClassic] = React.useState(true);

  return (
    <>
      <div className="section section-javascript" id="javascriptComponents">
        <Container>
          <h3 className="title">Javascript components</h3>
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
            </Row>
              <Modal
                className="confirm-booking-modal"
                isOpen={modalClassic}
                toggle={() => setModalClassic(false)}
              >
                <div className="modal-header justify-content-center">
                  <h4 className="title title-up">Confirm Booking?</h4>
                </div>
                <div className="modal-body">
                  <p>
                    Service : Haircut
                  </p>
                  <p>
                    Service : Haircut
                  </p>
                  <p>
                    Service : Haircut
                  </p>
                </div>
                <ModalFooter>
                  <Button className="btn-round w-100" type="button">
                    Done
                  </Button>
                </ModalFooter>
              </Modal>
        </Container>
      </div>
    </>
  );
}

export default ModalConfirm;
