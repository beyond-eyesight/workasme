import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Container from "react-bootstrap/Container";

const SignUpSection: React.FC = () => {
  return <Container>
    <Title />

  </Container>;
};

const Title: React.FC = () => {
  return <Container css={css({
    backgroundColor: 'blue'
  })}>
    Sign Up
  </Container>
};

export default SignUpSection;
