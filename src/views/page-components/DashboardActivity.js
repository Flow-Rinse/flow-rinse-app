import React from "react";

// reactstrap components
import {
  Container,
  Row,
  Col
} from "reactstrap";

// core components

function DashboardActivity() {


  return (
    <>
      <div className="section-dashboard-activity">
        <Container>
          <h3>THIS WEEK'S BOOKING</h3>
          <Row>
            <Col xs="12" xl="4">
              <div className="activity-card">
                <div className="activity-card-content">
                  <p className="activity-sched">
                    June 10, 2020 | 03:15PM
                  </p>
                  <span className="activity-notif">
                    Final Wires Dental Services
                  </span>
                </div>
                <div className="activity-card-icon">
                  <img src={require("assets/img/book-icons/Health.png")} />
                </div>
              </div>
            </Col>
            <Col xs="12" xl="4">
              <div className="activity-card">
                <div className="activity-card-content">
                  <p className="activity-sched">
                    June 10, 2020 | 03:15PM
                  </p>
                  <span className="activity-notif">
                    Final Wires Dental Services
                  </span>
                </div>
                <div className="activity-card-icon">
                  <img src={require("assets/img/book-icons/Health.png")} />
                </div>
              </div>
            </Col>
            <Col xs="12" xl="4">
              <div className="activity-card">
                <div className="activity-card-content">
                  <p className="activity-sched">
                    June 10, 2020 | 03:15PM
                  </p>
                  <span className="activity-notif">
                    Final Wires Dental Services
                  </span>
                </div>
                <div className="activity-card-icon">
                  <img src={require("assets/img/book-icons/Health.png")} />
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
    </>
  );
}

export default DashboardActivity;
