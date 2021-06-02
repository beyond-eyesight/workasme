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
    <Col lg={9}>
      <Row lg={9}>
        <Tabs defaultActiveKey="self" id="management">
          <Tab eventKey="self" title="Self">
            <div>asdf</div>
          </Tab>
          <Tab eventKey="team" title="Team - Please Wait!"/>
        </Tabs>
      </Row>
    </Col>
  </Container>
};

export default ManagementPage;
