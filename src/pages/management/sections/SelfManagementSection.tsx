import React from "react";
import YouShouldFocusOnPart from "src/pages/management/sections/parts/YouShouldFocusOnPart";
import EvaluationPart from "src/pages/management/sections/parts/EvaluationPart";
import ToDoListPart from "src/pages/management/sections/parts/ToDoListPart";
import TimeTrackerPart from "src/pages/management/sections/parts/TimeTrackerPart";
import SideBar from "src/pages/components/bars/navigation/SideBar";
import {Col, Container, Row} from "react-bootstrap";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";
import Colors from "src/constants/Colors";

const SelfManagementSection: React.FC = () => {
  return <Container css={css({
    paddingLeft: 0,
    paddingRight: 0
  })}>
    <Col>
      <Row>
        <Col css={css({
          paddingLeft: 0,
          paddingRight: 0
        })}>
          <div css={css({
            backgroundColor:'red',
            height: 500,
          })}>hahahaha</div>
          <div css={css({
            backgroundColor:'blue',
            height: 500,
          })}>hahahaha</div>
        </Col>
        <SideBar width={new Pixel(270)}/>
      </Row>
    </Col>
  </Container>;
};


// <YouShouldFocusOnPart />
// <TimeTrackerPart />
// <ToDoListPart />
// <EvaluationPart/>

export default SelfManagementSection;
