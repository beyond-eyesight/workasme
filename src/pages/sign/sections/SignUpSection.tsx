import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Container from "react-bootstrap/Container";

const SignUpSection: React.FC = () => {
  const containerStyle = css({
    backgroundColor: 'black',
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
    backgroundColor: 'blue',
    width: 200,
    height: 100
  })}>
    Sign Up
  </Container>
};

export default SignUpSection;
