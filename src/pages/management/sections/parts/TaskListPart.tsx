import React, {KeyboardEventHandler, useState} from "react";
import Pixel from "src/graphic/size/pixel";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {Button, Dropdown, Table} from "react-bootstrap";
import {TaskListRowDto} from "src/pages/management/sections/parts/dtos/TaskListRowDto";
import makeData from "src/pages/management/sections/parts/makedata";

const Cell: React.FC<{initialValue: string}> = (props: {initialValue: string}) => {
  const {initialValue} = props;
  const [value, setValue] = React.useState(initialValue);
  const [skipPageReset, setSkipPageReset] = React.useState(false);
  const [data, setData] = React.useState(() => makeData(20))

  const updateMyData = (rowIndex: number, columnId: number, value: string) => {
    // We also turn on the flag to not reset the page
    setSkipPageReset(true)
    setData((old: any) => {
        return old.map((row: any, index: number) => {
          if (index === rowIndex) {
            return {
              ...old[rowIndex],
              [columnId]: value,
            }
          }
          return row
        });
      }
    )
  }

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {setValue(e.target.value)};
  const onBlur = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log("Blurred!!!")
    console.log(e)
  };

  function handleEnter(e: KeyboardEvent) {
    if (e.key === "Enter") {
      console.log("clicked enter!!")
    }
  }



  // todo: 무슨 이벤트인지 보
  const handleKeyPress = (e: any) => {
    if (e.key === "Enter") {
    }
  };

  return <input value={value} onKeyPress={handleKeyPress} onChange={onChange} onBlur={onBlur}/>
};

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
          <td onClick={row.onClick}><Cell initialValue={row.name}/></td>
          <td onClick={row.onClick}><Cell initialValue={row.importanceLevel} /></td>
          <td onClick={row.onClick}><Cell initialValue={row.stuckOn}/></td>
          <td onClick={row.onClick}><Cell initialValue={row.checkPriority}/></td>
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
