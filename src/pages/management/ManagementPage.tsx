import React from "react";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const ManagementPage: React.FC = () => {
  console.log("good Management Page");
  return <div>
    <SelectSelfOrTeamTab />
  </div>
};

const SelectSelfOrTeamTab: React.FC = () => {
  return <Container>
    <Col>
      <Row sm={3}>
        <Tabs defaultActiveKey="self" id="management">
          <Tab eventKey="self" title="Self"/>
          <Tab eventKey="team" title="Team - Please Wait!"/>
        </Tabs>
      </Row>
    </Col>
  </Container>
};

export default ManagementPage;
