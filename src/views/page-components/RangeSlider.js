import React from "react";

// plugin that creates slider
// import Slider from "nouislider";
import{ RangeSlider as RangeSliderss} from 'reactrangeslider';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function RangeSlider() {

  const [volumeRange, setVolume] = React.useState(25);
  
  React.useEffect(() => {
    
  });

  function sliderOnChange(value){
    setVolume(value)
  }

  return (
    <>
      <div className="section-range-slider">
        <Container>
        <p className="category">{"Within "+volumeRange+" km. of Cavite"}</p>
        <RangeSliderss
          value={ volumeRange }
          onChange={ (value)=> sliderOnChange(value) }
          max={100}
          min={10}
          step={ 10 }
        />
        </Container>
      </div>
    </>
  );
}

export default RangeSlider;
