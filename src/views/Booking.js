import React from "react";
// javascript library that creates a parrallax effect
import Rellax from "rellax";
// reactstrap components
import {
  Button,
  Card,
  CardBody,
  CardFooter,
  CardTitle,
  Container,
  Row,
  Col
} from "reactstrap";

// core components
import WhiteNavbar from "components/Navbars/WhiteNavbar.js";

// sections for this page
import BookingForm from "./page-components/BookingForm.js";

function Booking(props) {

  const [schedule, setSchedule] = React.useState(props.history.location.state)

  React.useEffect(() => {
    console.log(props)
  },[])
 
  React.useEffect(() => {
    document.body.classList.add("booking-page");
    window.scrollTo(0, 0);
    document.body.scrollTop = 0;

    // initialise Rellax for this page
    if (window.innerWidth >= 991) {
      setTimeout(function() {
        new Rellax(".rellax", {
          center: true
        });
      }, 5000);
      new Rellax(".rellax-header");
      new Rellax(".rellax-text");
    }

    // we need to add a script for the github buttons
    let script = document.createElement("script");
    script.src = "https://buttons.github.io/buttons.js";
    script.id = "github-buttons-script-id";
    document.body.appendChild(script);

    return function cleanup() {
      document.body.classList.remove("presentation-page");
      document.body.classList.remove("sidebar-collapse");

      // we need to remove the script when we change the page
      script.parentNode.removeChild(script);
    };
  });

  function routeChange(path, value) {  
    props.history.push(path, value);
  };
  return (
    <>
      <WhiteNavbar />
      <div className="wrapper">
        <Container>
          <Row>
            <h3>Booking Details:</h3>
          </Row>
        </Container>
        <BookingForm schedule={schedule} routeChange={routeChange}/>
      </div>
    </>
  );
}

export default Booking;
