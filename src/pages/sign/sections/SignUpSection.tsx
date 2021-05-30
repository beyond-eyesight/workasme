import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Container from "react-bootstrap/Container";
import Pixel from "src/graphic/size/pixel";
import Colors from "src/constants/Colors";

const SignUpSection: React.FC = () => {
  return <Container>
    <Title />
    <SignUpForm />

  </Container>;
};

const SignUpForm: React.FC = () => {
  return <Container>
    <EmailInput />
    <PasswordInput />
    <FullNameInput />
    <BelongsToInput />
  </Container>;
};

const EmailInput: React.FC = () => {
  return <div/>;
};

const PasswordInput: React.FC = () => {
  return <div/>;
};

const FullNameInput: React.FC = () => {
  return <div/>;
};

const BelongsToInput: React.FC = () => {
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
      Sign Up
    </h2>
  </Container>
};

export default SignUpSection;
