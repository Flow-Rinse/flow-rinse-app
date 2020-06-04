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

function LoginPage(props) {
  const [emailAddress, setEmailAddress] = React.useState(false);
  const [password, setPassword] = React.useState(false);

  const [emailAddressValue, setEmailAddressValue] = React.useState('jaycee.mandap@dottystylecreative.com');
  const [passwordValue, setPasswordValue] = React.useState('password');

  React.useEffect(() => {
    document.body.classList.add("login-page");
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
      <div className="page-header header-filter" filter-color="blue">
        <div
          className="page-header-image"
          style={{
            backgroundImage: "url(" + require("assets/img/login.jpg") + ")"
          }}
        ></div>
        {/* <div className="content"> */}
          <Container>
            <Row>
              <Col className="ml-auto mr-auto" md="5">
                <Card className="card-login card-plain">
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="logo-container">
                        <img
                          alt="..."
                          src={require("assets/img/now-logo.png")}
                        ></img>
                      </div>
                    </CardHeader>
                    <CardBody>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (emailAddress ? " input-group-focus" : "")
                        }>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons users_circle-08"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Email Address"
                          type="text"
                          onFocus={() => setEmailAddress(true)}
                          onBlur={() => setEmailAddress(false)}
                          onChange={(e)=> setEmailAddressValue(e.target.value)}
                        ></Input>
                      </InputGroup>
                      <InputGroup
                        className={
                          "no-border input-lg" +
                          (password ? " input-group-focus" : "")
                        }>
                        <InputGroupAddon addonType="prepend">
                          <InputGroupText>
                            <i className="now-ui-icons text_caps-small"></i>
                          </InputGroupText>
                        </InputGroupAddon>
                        <Input
                          placeholder="Password"
                          type="password"
                          onFocus={() => setPassword(true)}
                          onBlur={() => setPassword(false)}
                          onChange={(e)=> setPasswordValue(e.target.value)}
                        ></Input>
                      </InputGroup>
                    </CardBody>
                    <CardFooter className="text-center">
                      <Button
                        block
                        className="btn-round"
                        color="info"
                        onClick={e => {
                          e.preventDefault();
                          requestLogin();
                        }}
                        size="lg"
                      >
                        LOGIN
                      </Button>
                      {/* <Button
                        block
                        className="btn-round"
                        color="info"
                        onClick={e => {
                          e.preventDefault();
                          routeChange('/registration')
                        }}
                        size="lg"
                      >
                        REGISTER
                      </Button> */}
                    </CardFooter>
                    <div className="pull-center pt-3">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault()
                            routeChange('/registration');
                          }}>
                          REGISTER AN ACCOUNT
                        </a>
                      </h6>
                    </div>
                    {/* <div className="pull-right">
                      <h6>
                        <a
                          className="link footer-link"
                          href="#pablo"
                          onClick={e => e.preventDefault()}
                        >
                          Need Help?
                        </a>
                      </h6>
                    </div> */}
                  </Form>
                </Card>
              </Col>
            </Row>
          </Container>
        {/* </div> */}
        {/* <Footer /> */}
      </div>
    </>
  );
}

export default LoginPage;
