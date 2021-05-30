import React from "react";
import Container from 'react-bootstrap/Container';
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";

const SignInSection: React.FC = () => {
  const containerStyle = css({
    backgroundColor: 'red',
    boxSizing: 'content-box',
    display: 'flex',
    width: '40%',
    maxWidth: 400,
    minWidth: 300
  });
  return <Container css={containerStyle}>
    <Title />

  </Container>;
};

const Title: React.FC = () => {
  return <Container css={css({
    backgroundColor: 'pink',
    height: 100
  })}>
    Sign In
  </Container>
};

export default SignInSection;
