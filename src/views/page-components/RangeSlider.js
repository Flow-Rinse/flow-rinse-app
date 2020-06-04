import React from "react";

// plugin that creates slider
import Slider from "nouislider";

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function RangeSlider() {
  React.useEffect(() => {
    if (
      !document
        .getElementById("sliderRegular")
        .classList.contains("noUi-target")
    ) {
      Slider.create(document.getElementById("sliderRegular"), {
        start: [25],
        connect: [true, false],
        step: 5,
        range: { min: 0, max: 100 }
      });
    }
  });
  return (
    <>
      <div className="section-range-slider">
        <Container>
          <Row>
            <Col lg="3" sm="6">
              <p className="category">Within 50 km. of Cavite</p>
              <div className="slider" id="sliderRegular"></div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default RangeSlider;
