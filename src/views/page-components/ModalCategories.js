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

function ModalCategories(props) {
 
  // modals states and functions
  const [modalClassic, setModalClassic] = React.useState(props.modalstate);

  function setCategory(category){
    props.getBusinessByCategory(category)
    props.setModalState()
  }

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
                isOpen={props.modalState}
                toggle={() => props.setModalState(false)}
              >
                <div className="modal-header justify-content-center">
                  <h4 className="title title-up">Choose a Category</h4>
                </div>
                {/* if you will be using the other modal with kabooked text add text-center class in modal-body */}
                {/* <div className="modal-body text-center"> */}
                <div className="modal-body">
                  {
                    props.catergies && props.catergies.map((value, index) => {
                      return(
                        <div key={index}  style={{display: 'flex', flexDirection: 'row', justifyContent: 'flex-start'}} onClick={()=> setCategory(value.id) }>
                          <img
                            style={{height: 20, alignSelf: 'center', paddingLeft: 30, paddingRight: 30}}
                            alt="..."
                            src={value.icon_url}
                          ></img>
                          <p className="p-2" style={{fontWeight: 400, textAlign: 'left'}}>
                            {value.name}
                          </p>
                        </div>
                      )
                    })
                  }
                </div>
                <ModalFooter>
                  <Button className="btn-round w-100" type="button" onClick={()=> props.setModalState(false)}>
                    Close
                  </Button>
                </ModalFooter>
              </Modal>
        </Container>
      </div>
    </>
  );
}

export default ModalCategories;
