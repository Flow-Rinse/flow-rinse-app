import React from "react";

// plugin that creates slider
// import Slider from "nouislider";
// import{ RangeSlider as RangeSliderss} from 'reactrangeslider';

// reactstrap components
import {
  Button,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function RangeSlider(props) {

  const [volumeRange, setVolume] = React.useState(25);
  
  React.useEffect(() => {
    
  });

  function sliderOnChange(value){
    setVolume(value)
  }

  const handleChange = (event) => {
    setVolume(event.target.value)
    props.setRangeValue(event.target.value)
  }

  return (
    <>
      <div className="section-range-slider">
        <Container>
        <p className="category">{"Within "+volumeRange+" km. radius"}</p>
        {/* <RangeSliderss
          value={ volumeRange }
          onChange={ (value)=> sliderOnChange(value) }
          max={100}
          min={10}
          step={ 10 }
        /> */}
         <input className="w-100" type="range" min="0" max="100" step="10" value={volumeRange} onChange={handleChange}/>
        </Container>
      </div>
     
    </>
  );
}

export default RangeSlider;
