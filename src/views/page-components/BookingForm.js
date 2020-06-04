import React from "react";

// reactstrap components
import {
  Input,
  Button,
  FormGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function BookingForm(props) {


  return (
    <>
      <div className="section-booking-form">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" xl="12">
                <FormGroup>
                  <label>Service</label>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="12">
                <FormGroup>
                  <label>Date</label>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="date"
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="6">
                <FormGroup>
                  <label>Name</label>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="text"
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="6">
                <FormGroup>
                  <label>E-Mail</label>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="email"
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="12">
                <FormGroup>
                  <label>Phone</label>
                  <Input
                    defaultValue=""
                    placeholder="Regular"
                    type="email"
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="6">
              <Button className="btn-round w-100" type="button">
                BOOK NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default BookingForm;
