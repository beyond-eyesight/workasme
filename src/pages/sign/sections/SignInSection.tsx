import React from "react";
import Container from 'react-bootstrap/Container';
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";
import Colors from "src/constants/Colors";

const SignInSection: React.FC = () => {
  return <Container>
    <Title />
    <SignInForm />

  </Container>;
};

const SignInForm: React.FC = () => {
  return <Container>
    <EmailInput />
    <PasswordInput />
    <ContinueWithGoolgeButton />
  </Container>;
};

const EmailInput: React.FC = () => {
  return <div/>;
};

const PasswordInput: React.FC = () => {
  return <div/>;
};

const ContinueWithGoolgeButton: React.FC = () => {
  return <div/>;
};

const Title: React.FC = () => {
  return <Container>
    <h2 css={css({
      textAlign: 'center',
      fontSize: new Pixel(50).value,
      fontFamily: "ObjectSans-Regular",
      color: Colors.theme.text.default,
      fontWeight: 700
    })}>
      Sign In
    </h2>
  </Container>
};

export default SignInSection;
