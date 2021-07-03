import React from "react";
import Pixel from "src/graphic/size/pixel";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {Table} from "react-bootstrap";

const ToDoListPart: React.FC<{marginVertical: Pixel}> = (props: {marginVertical: Pixel}) => {
  const {marginVertical} = props;
  return <div css={css({
    marginTop: marginVertical.value,
    marginBottom: marginVertical.value
  })}>

    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Task Name</th>
        <th>Importance Level</th>
        <th>BottleNeck</th>
        <th>Make Priority</th>
      </tr>
      </thead>
      <tbody>
      <tr>
        <td>TaskName1</td>
        <td>HIGH</td>
        <td>SELF</td>
      </tr>
      <tr>
        <td>TaskName2</td>
        <td>HIGH</td>
        <td>None</td>
      </tr>
      <tr>
        <td>TaskName3</td>
        <td>HIGH</td>
        <td>contact with other team</td>
      </tr>
      </tbody>
    </Table>
  </div>
};
export default ToDoListPart;
