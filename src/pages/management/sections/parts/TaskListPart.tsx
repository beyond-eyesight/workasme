import React, {Dispatch, KeyboardEventHandler, MutableRefObject, SetStateAction, useCallback, useState} from "react";
import Pixel from "src/graphic/size/pixel";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import {Button, Dropdown, Table} from "react-bootstrap";
import {TaskListRowDto} from "src/pages/management/sections/parts/dtos/TaskListRowDto";
import makeData from "src/pages/management/sections/parts/makedata";

const Cell: React.FC<{ initialValue: string }> = (props: { initialValue: string }) => {
  const {initialValue} = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState(initialValue);

  const onChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setValue(e.target.value)
  };

  const handleOnlyEnterKeyPressed = (e: any) => {
    if (isEnterPressed()) {
      // @ts-ignore
      inputRef.current.blur()
    }

    function isEnterPressed() {
      return e.key === "Enter";
    }
  };


  return <input value={value} onKeyPress={handleOnlyEnterKeyPressed} onChange={onChange} ref={inputRef}/>
};

const TaskListPart: React.FC<{ marginVertical: Pixel }> = (props: { marginVertical: Pixel }) => {
  const {marginVertical} = props;

  const onClick: () => void = () => {
  };
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

    {/* TODO: 서버랑 연동할 때 JSon 신경써야 할듯. */}

    <TaskTable rows={rows}/>

    {/*is Updating*/}
    <TaskButtons rows={rows} setRows={setRows}/>
  </div>
};

const TaskButtons: React.FC<{ rows: TaskListRowDto[], setRows: Dispatch<SetStateAction<TaskListRowDto[]>> }> =
  (props: { rows: TaskListRowDto[], setRows: Dispatch<SetStateAction<TaskListRowDto[]>> }) => {
  const {rows, setRows} = props;

  const onAddRowButtonClicked = () => {
    rows.push({
      checkPriority: "", importanceLevel: "", name: "", onClick: function () {
      }, stuckOn: ""
    })

    setRows(rows)
  };

  return <div
    css={css({
      display: 'flex',
      flexDirection: "row-reverse"
    })}
  >
    <Button
      onClick={onAddRowButtonClicked}
    >
      Add Row
    </Button>
  </div>
};

const TaskTable: React.FC<{ rows: TaskListRowDto[] }> = (props: { rows: TaskListRowDto[] }) => {
  const {rows} = props;

  return <Table striped bordered hover>
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
        <td onClick={row.onClick}><Cell initialValue={row.importanceLevel}/></td>
        <td onClick={row.onClick}><Cell initialValue={row.stuckOn}/></td>
        <td onClick={row.onClick}><Cell initialValue={row.checkPriority}/></td>
      </tr>
    })}
    </tbody>
  </Table>
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
