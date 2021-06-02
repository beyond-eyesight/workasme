import React from "react";
import {Tab, Tabs } from "react-bootstrap";

const ManagementPage: React.FC = () => {
  console.log("good Management Page");
  return <div>
    <SelectSelfOrTeamTab />
  </div>
};

const SelectSelfOrTeamTab: React.FC = () => {
  return <Tabs defaultActiveKey="self" id="management">
    <Tab eventKey="self" title="Self">
      <div>self section</div>
    </Tab>
    <Tab eventKey="team" title="Team - Please Wait!" disabled>
      <div>self section</div>
    </Tab>
  </Tabs>
};

export default ManagementPage;
