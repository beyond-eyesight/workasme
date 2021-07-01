import React from "react";
import YouShouldFocusOnPart from "src/pages/management/sections/parts/YouShouldFocusOnPart";
import EvaluationPart from "src/pages/management/sections/parts/EvaluationPart";
import ToDoListPart from "src/pages/management/sections/parts/ToDoListPart";
import TimeTrackerPart from "src/pages/management/sections/parts/TimeTrackerPart";
import SideBar from "src/pages/components/bars/navigation/SideBar";
import {Container, Row} from "react-bootstrap";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";
import Colors from "src/constants/Colors";

const SelfManagementSection: React.FC = () => {
  return <Container>
    <Row css={css({
      backgroundColor: Colors.theme.main.orgasme,
      width: 800,
      height: 800
    })}>
      <YouShouldFocusOnPart />
      <TimeTrackerPart />
      <ToDoListPart />
      <EvaluationPart/>
    </Row>
    <Row css={css({
      backgroundColor: Colors.theme.main.work,
    })}>
      <SideBar />
    </Row>
  </Container>;
};



export default SelfManagementSection;
