import React from "react";
import {Col, Nav, Row, Tab, Tabs} from "react-bootstrap";

const ManagementPage: React.FC = () => {
  console.log("good Management Page");
  return <div>
    <SelectSelfOrTeamTab />
  </div>
};

const SelectSelfOrTeamTab: React.FC = () => {
  return <Tab.Container defaultActiveKey="self" id="manage">
    <Col>
      <Row sm={3}>
        <Nav variant="pills" className="flex-row">
          <Nav.Item>
            <Nav.Link eventKey="self">Self</Nav.Link>
          </Nav.Item>
          <Nav.Item>
            <Nav.Link eventKey="team">Team</Nav.Link>
          </Nav.Item>
        </Nav>
      </Row>
      <Row sm={9}>
        <Tab.Content>
          <Tab.Pane eventKey="self">
            <div>self section</div>
          </Tab.Pane>
          <Tab.Pane eventKey="team">
            <div>team section</div>
          </Tab.Pane>
        </Tab.Content>
      </Row>
    </Col>
  </Tab.Container>
};

export default ManagementPage;
