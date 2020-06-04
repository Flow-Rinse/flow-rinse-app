import React from "react";

// reactstrap components
import {
  Input,
  InputGroupAddon,
  InputGroupText,
  InputGroup,
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function SearchBar() {
  return (
    <>
      <div className="section-search-bar">
        <Container>
          <Row>
            <Col>
                <InputGroup>
                  <Input
                    placeholder="Right Nucleo Icon"
                    type="text"
                  ></Input>
                  <InputGroupAddon addonType="append">
                    <InputGroupText>
                      <i className="now-ui-icons ui-1_zoom-bold"></i>
                    </InputGroupText>
                  </InputGroupAddon>
                </InputGroup>
            </Col>
          </Row>
       
        </Container>
      </div>
    </>
  );
}

export default SearchBar;