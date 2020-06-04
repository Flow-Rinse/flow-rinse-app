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
import Cards from "./page-components/ListingsCards.js";
import SearchBar from "./page-components/SearchBar.js";
import FillterButton from "./page-components/FillterButton.js";
import RangeSlider from "./page-components/RangeSlider.js";


function Listings() {
  React.useEffect(() => {
    document.body.classList.add("listings-page");
    // document.documentElement.classList.remove("nav-open");
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
      <WhiteNavbar />
      <div className="wrapper">
        <SearchBar />
        <FillterButton />
        <RangeSlider />
        <Cards />
      </div>
    </>
  );
}

export default Listings;
