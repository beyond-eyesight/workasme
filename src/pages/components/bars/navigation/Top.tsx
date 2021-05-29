import React from "react";
import Container from 'react-bootstrap/Container';
import {Nav, Navbar, NavDropdown} from "react-bootstrap";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from '@emotion/react'
import {SerializedStyles} from "@emotion/serialize";
import logo from './website_logo.png'
import Sizes from "src/constants/Sizes";


const TopNavigationBar: React.FC<{ containerStyle: SerializedStyles }> = (props: { containerStyle: SerializedStyles }) => {
  const {containerStyle} = props;

  // todo: refac links
  return <Navbar expand="lg" css={containerStyle}>
    <Container>
      <Navbar.Brand href="#home">
        <img src={logo} alt="Logo" width={Sizes.components.bar.logo.width.value} height={Sizes.components.bar.logo.height.value}/>
      </Navbar.Brand>
      <Navbar.Toggle aria-controls="basic-navbar-nav"/>
      <Navbar.Collapse id="basic-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link href="#home">Home</Nav.Link>
          <Nav.Link href="#link">Link</Nav.Link>
          <NavDropdown title="Dropdown" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider/>
            <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
          </NavDropdown>
        </Nav>
      </Navbar.Collapse>
    </Container>
  </Navbar>
};

export default TopNavigationBar;
