import React from "react";
import { getData, postData } from '../utils/api';

// reactstrap components
import {
  Button,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Form,
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Col,
  Row
} from "reactstrap";

// core components
import DropdownScrollNavbar from "components/Navbars/DropdownScrollNavbar.js";
import Footer from "components/Footers/Footer.js";

function Splash(props) {
  const [emailAddress, setEmailAddress] = React.useState(false);
  const [password, setPassword] = React.useState(false);

  const [emailAddressValue, setEmailAddressValue] = React.useState('jaycee.mandap@dottystylecreative.com');
  const [passwordValue, setPasswordValue] = React.useState('password');

  React.useEffect(() => {
    document.body.classList.add("login-page");
    document.body.classList.add("splash-page");
    document.body.classList.add("sidebar-collapse");
    document.documentElement.classList.remove("nav-open");
    return function cleanup() {
      document.body.classList.remove("login-page");
      document.body.classList.remove("sidebar-collapse");
    };
  });

  function routeChange(path) {  
    console.log(props)
    props.history.push(path);
  };

  async function requestLogin(){
    let requestObj = {
      'email': emailAddressValue,
      'password': passwordValue,
    }
    console.log(requestObj)
    const response = await postData('/api/login', requestObj).then(function(res){
      return res;
    }).catch(function(e){
      return e; 
    })
    if(response && response.data && response.data.access_token){
      localStorage.setItem('token', response.data.access_token)
      routeChange('/listings');
    }
  }

  return (
    <>
      {/* <DropdownScrollNavbar /> */}
      <div className="page-header header-filter">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/book-icons/login.png") + ")"
          }}
        ></div>
        {/* <div className="content"> */}
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                    <CardHeader className="text-center">
                      <div className="mb-4">
                        <img
                          alt="..."
                          src={require("assets/img/book-icons/kabook.svg")}
                        ></img>
                        <p>Booking in a new way.</p>
                      </div>
                    </CardHeader>
                </Card>
                <div className="icon-container">
                  <img alt="..." src={require("assets/img/book-icons/Dental.png")}></img>
                  <img alt="..." src={require("assets/img/book-icons/Health.png")}></img>
                  <img alt="..." src={require("assets/img/book-icons/Pets.png")}></img>
                  <img alt="..." src={require("assets/img/book-icons/Beauty.png")}></img>
                  <img alt="..." src={require("assets/img/book-icons/Cleaning.png")}></img>
                  <img alt="..." src={require("assets/img/book-icons/Resturant.png")}></img>
                </div>
              </Col>
            </Row>
          </Container>
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default Splash;
