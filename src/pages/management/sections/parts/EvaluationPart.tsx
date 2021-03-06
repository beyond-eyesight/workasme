import React from "react";
import Pixel from "src/graphic/size/pixel";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {Col, Container, Form, ListGroup, Row} from "react-bootstrap";
import EvaluationPieChartComponent from "./components/charts/EvaluationPieChartComponent";
import TitleComponent from "src/pages/management/sections/parts/components/TitleComponent";

const EvaluationPart: React.FC<{ height: Pixel }> = (props: { height: Pixel }) => {
  const {height} = props;

  return <Container css={css({
    height: height.value,
  })}>
    <TitleComponent cssObj={{
      marginBottom: new Pixel(20).value
    }}>
      <h2>
        Feedback
      </h2>
    </TitleComponent>
    <Row css={css({
      alignItems: 'center',
      justifyContent: 'center'

    })}>
      <Col lg={5}>
        <EvaluationPieChartComponent/>
      </Col>
      {/*//todo: 나중에 하자*/}
      {/*<Col lg={7} >*/}
      {/*  <FeedbackComponent/>*/}
      {/*</Col>*/}
    </Row>
  </Container>
};



const FeedbackComponent: React.FC = () => {
  return <Container >
    <Col>
      <ListGroup as={"ol"} variant="flush">
        <ListGroup.Item as={"li"}>Cras justo odio</ListGroup.Item>
        <ListGroup.Item as={"li"}>Dapibus ac facilisis in</ListGroup.Item>
        <ListGroup.Item as={"li"}>Morbi leo risus</ListGroup.Item>
        <ListGroup.Item as={"li"}>Porta ac consectetur ac</ListGroup.Item>
      </ListGroup>

      <Form.Control css={css({
        marginTop: 10
      })} type="text" size="lg" placeholder="Comment" />

    </Col>
  </Container>
};


const EvaluationGraphPart: React.FC = () => {
  return <div/>;
};

const SuggestPart: React.FC = () => {
  return <div/>;
};

export default EvaluationPart;
