import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import Pixel from "src/graphic/size/pixel";
import {Link} from "react-scroll";
import {Col} from "react-bootstrap";

const SideBar: React.FC<{width: Pixel}> = (props: {width: Pixel}) => {
  const { width } = props;
  return <ProSidebar width={width.value}>
    <Menu iconShape="square">
      <MenuItem>
        <Link
          activeClass="active"
          to="firstInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          You Should Focus On
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="firstInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          ToDo List
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="firstInsideContainer"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          Memento
        </Link>
      </MenuItem>
      <MenuItem>
        <Link
          activeClass="active"
          to="Feedback"
          spy={true}
          smooth={true}
          duration={250}
          containerId="containerElement"
          style={{ display: "inline-block", margin: "20px" }}
        >
          Feedback
        </Link>
      </MenuItem>
    </Menu>
  </ProSidebar>;
};


export default SideBar;
