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
import { getData, postData } from '../utils/api';

import StoreHeader from "./page-components/StoreHeader.js";
import StoreContent from "./page-components/StoreContent.js";

function Store(props) {

  const [services, setServices] = React.useState(null);

  async function getServices(value){
    const response = await getData('/api/service?business_id='+props.history.location.state.id).then(function(res){
      return res;
    }).catch(function(e){
      return e; 
    })
    console.log(response);

    if(response && response.data && response.data.data && response.data.data.services){
      setServices(response.data.data.services);
    }
  }

  React.useEffect(() => {
    getServices();
  },[])

  React.useEffect(() => {
    document.body.classList.add("store-page");
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
      <div className="wrapper">
        <StoreHeader value={props.history.location.state} />
        <StoreContent value={props.history.location.state} services={services} routeChange={routeChange} />
      </div>
    </>
  );
}

export default Store;
