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
import DashboardIcons from "./page-components/DashboardIcons.js";
import DashboardActivity from "./page-components/DashboardActivity.js";


function Dashboard(props) {

  function routeChange(path) {  
    props.history.push(path);
    window.location.reload();
  };

  React.useEffect(() => {
    document.body.classList.add("dashboard-page");
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
  return (
    <>
      <WhiteNavbar routeChange={routeChange} />
      <div className="wrapper">
        <DashboardIcons routeChange={routeChange}/>
        <DashboardActivity />
      </div>
    </>
  );
}

export default Dashboard;
