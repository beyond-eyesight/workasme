import React from "react";
import {Col, Row, Tab, Tabs} from "react-bootstrap";
import Container from 'react-bootstrap/Container';

const ManagementPage: React.FC = () => {
  return <Container>
    <Tabs defaultActiveKey="self" id="management">
      <Tab eventKey="self" title="Self">
        <Sonnet />
      </Tab>
      <Tab eventKey="team" title="Team - Please Wait!" disabled>
        <Sonnet />
      </Tab>
    </Tabs>
  </Container>
};

const Sonnet: React.FC = () => {
  return <p>hahaha</p>
}



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
