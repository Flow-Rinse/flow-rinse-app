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
          <Collapse isOpen={collapseOpen} navbar>
            <Nav className="ml-auto" id="ceva" navbar>
              <div style={{padding: 20}}>
                <img
                  alt="..."
                  src={require("assets/img/book-icons/kabook.svg")}
                ></img>
              </div>
              <UncontrolledDropdown nav>
                <DropdownItem style={{display: 'flex', justifyContent: 'center', fontSize: 18, fontWeight: '300'}} className="text-white p-2" to="/index" tag={Link}>
                  <i style={{alignSelf: 'center', paddingRight: 10}} className="now-ui-icons business_chart-pie-36"></i>
                  <span>Dashboard</span>
                </DropdownItem>
                <DropdownItem style={{display: 'flex', justifyContent: 'center', fontSize: 18, fontWeight: '300'}} className="text-white p-2" to="/index" tag={Link}>
                  <i style={{alignSelf: 'center', paddingRight: 10}} className="now-ui-icons business_chart-pie-36"></i>
                  <span>My Bookings</span>
                </DropdownItem>
              </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Container>
      </Navbar>
    </>
  );
}

export default WhiteNavbar;

