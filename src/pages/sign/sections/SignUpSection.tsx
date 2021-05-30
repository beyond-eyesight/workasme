import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Container from "react-bootstrap/Container";
import Pixel from "src/graphic/size/pixel";

const SignUpSection: React.FC = () => {
  return <Container>
    <Title />

  </Container>;
};

const Title: React.FC = () => {
  return <Container>
    <h2 css={css({
      textAlign: 'center',
      fontSize: new Pixel(50).value,
      fontFamily: "ObjectSans-Regular",
      color: '#d94d3b',
    })}>
      Sign Up
    </h2>
  </Container>
};

export default SignUpSection;
