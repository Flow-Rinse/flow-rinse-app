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
    window.location.reload();
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
      localStorage.setItem('user', JSON.stringify(response.data.user))
      localStorage.setItem('token', response.data.access_token)
      routeChange('/dashboard');
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
                  <Form action="" className="form" method="">
                    <CardHeader className="text-center">
                      <div className="mb-4">
                        <img
                          alt="..."
                          src={require("assets/img/book-icons/kabook.svg")}
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
                        </InputGroupAddon>
                        <Input
                          className="login-input input-margin"
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
                        </InputGroupAddon>
                        <Input
                          className="login-input"
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
                        className="btn-round login-btn"
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
                        <a
                          className="link footer-link register-btn"
                          href="#pablo"
                          onClick={e => {
                            e.preventDefault()
                            routeChange('/registration');
                          }}>
                          REGISTER
                        </a>
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
