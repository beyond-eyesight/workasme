import React from "react";
import {Col, Nav, Row, Tab, Tabs} from "react-bootstrap";

const ManagementPage: React.FC = () => {
  console.log("good Management Page");
  return <div>
    <SelectSelfOrTeamTab />
  </div>
};

const SelectSelfOrTeamTab: React.FC = () => {
  return <Tab.Container>
    <Col>
      <Row sm={3}>
        <Tabs defaultActiveKey="self" id="management">
          <Tab eventKey="self" title="Self"/>
          <Tab eventKey="team" title="Team - Please Wait!" />
        </Tabs>
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
