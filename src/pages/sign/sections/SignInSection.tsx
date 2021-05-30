import React from "react";
import Container from 'react-bootstrap/Container';
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";

const SignInSection: React.FC = () => {
  return <Container>
    <Title />

  </Container>;
};

const Title: React.FC = () => {
  return <Container css={css({
    backgroundColor: 'pink'
  })}>
    Sign In
  </Container>
};

export default SignInSection;
