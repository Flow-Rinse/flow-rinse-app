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
import { getData, postData } from '../../utils/api';
import ModalConfirm from "../page-components/ModalConfirm.js";

import moment from 'moment';

// core components

function BookingForm(props) {

  const [userData, setUserData] = React.useState(JSON.parse(localStorage.getItem('user')))
  const [scheduleDate, setScheduleDate] = React.useState(null)
  const [modalstate, setmodal] = React.useState(false)
  const [isBooked, setIsBooked] = React.useState(false)

  React.useEffect(()=> {
    console.log('user', userData)
  },[]);

  async function requestBooking(){
    let requestObj = {
      "schedule_per_service_id": props.schedule.id.toString(),
      "user_id": userData.id.toString(),
      "date": moment(scheduleDate).format("YYYY-MM-DD")
    }
    console.log(requestObj)
    const response = await postData('/api/booking', requestObj).then(function(res){
      return res;
    }).catch(function(e){
      return e; 
    })
    console.log(response)
    if(response && response.data && response.data.message === "Booking successful"){
      setIsBooked(true)
    }
  }

  function setModalState(){
    console.log(!modalstate)
    setIsBooked(false);
    setmodal(!modalstate)
  }

  return (
    <>
      <div className="section-booking-form">
        <Container>
          <Row className="justify-content-center">
            <Col xs="12" xl="12">
                <FormGroup>
                  <label>Service</label>
                  <Input
                    value={props.schedule.name}
                    
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
                    onChange={(e)=> setScheduleDate(e.target.value)}
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="6">
                <FormGroup>
                  <label>Name</label>
                  <Input
                    placeholder="Regular"
                    type="text"
                    
                    value={userData.name}
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="12">
                <FormGroup>
                  <label>Phone</label>
                  <Input
                    placeholder="Phone Number"
                    
                    type="number"
                    value={userData.mobile_number}
                  ></Input>
                </FormGroup>
            </Col>
            <Col xs="12" xl="6">
              <Button className="btn-round w-100" type="button" onClick={()=> setModalState()}>
                BOOK NOW
              </Button>
            </Col>
          </Row>
        </Container>
      </div>
      <ModalConfirm routeChange={props.routeChange} isBooked={isBooked} schedule={{...props.schedule, scheduleDate: scheduleDate}} modalstate={modalstate} setModalState={()=> setModalState()} requestBooking={()=> requestBooking()} />
    </>
  );
}

export default BookingForm;
