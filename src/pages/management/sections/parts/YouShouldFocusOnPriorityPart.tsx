import React from "react";
import Colors from "src/constants/Colors";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";

import Pixel from "src/graphic/size/pixel";
import {Accordion, Button, Card, ProgressBar} from "react-bootstrap";

const YouShouldFocusOnPriorityPart: React.FC<{height: Pixel}> = (props: {height: Pixel}) => {
  const {height} = props;
  return <div css={css({
    backgroundColor: 'pink',
    height: height.value
  })}>
    <PartTitle />
    <PriorityInformationCard />
  </div>;
};

const PartTitle: React.FC = () => {
  return <div>
    <h2>
      You should focus on PRIORITY
    </h2>
  </div>
};

// Priority에
//
// 반드시 들어가야하는거
//
//
//
// Character Name
//
// Task Name
//
// Expected Period, Actual Period(progress bar)
//
// BottleNeck Logs
//
// Pieces Of Task
//
// Contact Lists

const PriorityInformationCard: React.FC = () => {
  return <Card style={{ width: '90%' }}>
    <Card.Header>
      <ProgressBarPart />
    </Card.Header>
    <Card.Body>
      <Card.Title>Research GUI Components</Card.Title>
      <Card.Subtitle className="mb-2 text-muted">ttkmw</Card.Subtitle>

      <TaskContent />
    </Card.Body>
  </Card>;
};

const TaskContent: React.FC = () => {

  return <Accordion>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="0">
          Pieces Of Task
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="0">
        <Card.Body>Hello! I'm the body</Card.Body>
      </Accordion.Collapse>
    </Card>
    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="1">
          BottleNeck logs
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="1">
        <Card.Body>Hello! I'm another body</Card.Body>
      </Accordion.Collapse>
    </Card>

    <Card>
      <Card.Header>
        <Accordion.Toggle as={Button} variant="link" eventKey="2">
          Contact List
        </Accordion.Toggle>
      </Card.Header>
      <Accordion.Collapse eventKey="2">
        <Card.Body>Hello! I'm haha body</Card.Body>
      </Accordion.Collapse>
    </Card>
  </Accordion>
};

const ProgressBarPart: React.FC = () => {
  const now = 80;
  return <div>
    <Card.Subtitle className="mb-2 text-muted">Actual / Expected Period</Card.Subtitle>
    <ProgressBar now={now} label={`${now}%`} />
  </div>;
}

export default YouShouldFocusOnPriorityPart;
