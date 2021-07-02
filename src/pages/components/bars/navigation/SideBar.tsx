import { ProSidebar, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import 'react-pro-sidebar/dist/css/styles.css';
import React from "react";
import Pixel from "src/graphic/size/pixel";

const SideBar: React.FC<{width: Pixel}> = (props: {width: Pixel}) => {
  const { width } = props;
  return <ProSidebar width={width.value}>
    <Menu iconShape="square">
      <MenuItem>You Should Focus On</MenuItem>
      <MenuItem>Memento</MenuItem>
      <MenuItem>ToDos</MenuItem>
      <MenuItem>EvaluationPart</MenuItem>
    </Menu>
  </ProSidebar>;
};


export default SideBar;
