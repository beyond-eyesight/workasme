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
import {
  Link,
  Element,
  Events,
  animateScroll,
  scroller
} from "react-scroll";
import Colors from "src/constants/Colors";
import ExampleSection from "src/pages/management/sections/ExampleSection";

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

          <Element
            name="test7"
            className="element"
            id="containerElement"
            style={{
              position: "relative",
              height: "200px",
              overflow: "scroll",
              marginBottom: "100px"
            }}
          >
            <Element
              name="firstInsideContainer"
              style={{
                marginBottom: "200px"
              }}
            >
              first element inside container
            </Element>

            <Element
              name="secondInsideContainer"
              style={{
                marginBottom: "200px"
              }}
            >
              second element inside container
            </Element>
          </Element>
          <YouShouldFocusOnPart height={new Pixel(300)}/>
          <TimeTrackerPart height={new Pixel(300)}/>
          <ToDoListPart height={new Pixel(300)}/>
          <EvaluationPart height={new Pixel(300)}/>
        </Col>
        <SideBar width={new Pixel(270)}/>
      </Row>
    </Col>
  </Container>;
};


export default SelfManagementSection;
