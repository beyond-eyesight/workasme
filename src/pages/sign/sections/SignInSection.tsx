import React from "react";
import Container from 'react-bootstrap/Container';
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";

const SignInSection: React.FC = () => {
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
      Sign In
    </h2>
  </Container>
};

export default SignInSection;
