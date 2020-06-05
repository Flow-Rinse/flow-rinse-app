/*eslint-disable*/
import React from "react";
import { Link } from "react-router-dom";
// reactstrap components
import {
  Button,
  Collapse,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  UncontrolledDropdown,
  NavbarBrand,
  Navbar,
  NavItem,
  Nav,
  Container,
  UncontrolledTooltip
} from "reactstrap";

function WhiteNavbar() {
  const [collapseOpen, setCollapseOpen] = React.useState(false);
  return (
    <>
      {collapseOpen ? (
        <div
          id="bodyClick"
          onClick={() => {
            document.documentElement.classList.toggle("nav-open");
            setCollapseOpen(false);
          }}
        />
      ) : null}
      <Navbar className="bg-white fixed-top" expand="lg">
        <Container>
          <div className="navbar-translate">
        
            <button
              onClick={() => {
                document.documentElement.classList.toggle("nav-open");
                setCollapseOpen(!collapseOpen);
              }}
              aria-expanded={collapseOpen}
              className="navbar-toggler"
            >
              <span className="navbar-toggler-bar top-bar"></span>
              <span className="navbar-toggler-bar middle-bar"></span>
              <span className="navbar-toggler-bar bottom-bar"></span>
            </button>
          </div>
          <a href="">
            <img className="back-icon-booking" alt="..." src={require("assets/img/book-icons/Back.png")}></img>
          </a>
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
            <div className="user-name-container">
                <span>Hello,</span>
                <h3>Leopoldo</h3>
              </div>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink1"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_Dashboard.png")}></img>
                  <p>Dashboard</p>
                </DropdownToggle>
                <DropdownMenu aria-labelledby="navbarDropdownMenuLink1" left>
                  <DropdownItem to="/" tag={Link}>
                    <i className="now-ui-icons design_image"></i>
                    Presentation
                  </DropdownItem>
                  <DropdownItem to="/index" tag={Link}>
                    <i className="now-ui-icons business_chart-pie-36"></i>
                    All components
                  </DropdownItem>
                  <DropdownItem
                    href="https://demos.creative-tim.com/now-ui-kit-pro-react/#/documentation/introduction?ref=nuk-pro-react-white-navbar"
                    target="_blank"
                    target="_blank"
                  >
                    <i className="now-ui-icons design_bullet-list-67"></i>
                    <p>Documentation</p>
                  </DropdownItem>
                </DropdownMenu>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_MyAccount.png")}></img>
                  <p>My Account</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_FindAStore.png")}></img>
                  <p>Find a Store</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_UpcomingBookings.png")}></img>
                  <p>Upcoming Bookings</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_ActivityHistory.png")}></img>
                  <p>Activity History</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_Favourites.png")}></img>
                  <p>Favourites</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav>
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_Settings.png")}></img>
                  <p>Settings</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <UncontrolledDropdown nav  className="logout-button">
                <DropdownToggle
                  caret
                  color="default"
                  data-toggle="dropdown"
                  href="#pablo"
                  id="navbarDropdownMenuLink"
                  nav
                  onClick={e => e.preventDefault()}
                >
                  <img className="d-line mr-2" alt="..." src={require("assets/img/book-icons/Menu_LogOut.png")}></img>
                  <p>Logout</p>
                </DropdownToggle>
              </UncontrolledDropdown>
              <img className="nav-logo" alt="..." src={require("assets/img/book-icons/kabook.svg")}></img>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;

