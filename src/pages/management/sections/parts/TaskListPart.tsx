import React, {useState} from "react";
import Pixel from "src/graphic/size/pixel";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {Button, Dropdown, Table} from "react-bootstrap";
import {TaskListRowDto} from "src/pages/management/sections/parts/dtos/TaskListRowDto";

const TaskListPart: React.FC<{ marginVertical: Pixel }> = (props: { marginVertical: Pixel }) => {
  const {marginVertical} = props;

  const onClick: () => void = () => {console.log("aaaaaa")};

  const [rows, setRows] = useState<TaskListRowDto[]>([
    {
      name: "task1",
      importanceLevel: "HIGH",
      stuckOn: "BOTTLENeck1",
      checkPriority: "checkit",
      onClick: onClick
    },
    {
      name: "task2",
      importanceLevel: "MIDDLE",
      stuckOn: "BOTTLENeck2",
      checkPriority: "checkit",
      onClick: onClick
    }
  ]);

  return <div css={css({
    marginTop: marginVertical.value,
    marginBottom: marginVertical.value
  })}>

    <Button
      onClick={() => {
        console.log("buttonClicked")
      }}
    >
      Add Row
    </Button>

    {/* TODO: 서버랑 연동할 때 JSon 신경써야 할듯. */}
    <Table striped bordered hover>
      <thead>
      <tr>
        <th>Task Name</th>
        <th>Importance Level</th>
        <th>BottleNeck</th>
        <th>Check Priority</th>
      </tr>
      </thead>
      <tbody>
      {rows.map((row) => {
        return <tr>
          <td onClick={row.onClick}>{row.name}</td>
          <td onClick={row.onClick}>{row.importanceLevel}</td>
          <td onClick={row.onClick}>{row.stuckOn}</td>
          <td onClick={row.onClick}>{row.checkPriority}</td>
        </tr>
      })}
      </tbody>
    </Table>
  </div>
};


// <tr>
//   <td>TaskName1</td>
//   <td>
//     HIGH
//   </td>
//   <td></td>
//   <td>Check Button!</td>
// </tr>
// <tr>
// <td>TaskName2</td>
// <td>HIGH</td>
// <td></td>
// <td>Check Button!</td>
// </tr>
export default TaskListPart;
