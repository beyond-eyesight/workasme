import React from "react";
import {TimeCategory, TimeSnippet} from "src/pages/management/sections/parts/dtos/TimeSnippet";

const BasicInputCell: React.FC<{ initialValue: string, isUpdating: boolean, timeSnippets: TimeSnippet[]  }> = (props: { initialValue: string, isUpdating: boolean, timeSnippets: TimeSnippet[]}) => {
  const {initialValue, isUpdating, timeSnippets} = props;
  const inputRef = React.useRef<HTMLInputElement>(null);
  const [value, setValue] = React.useState(initialValue);

  console.log("BasicInputCell");
  // @ts-ignore;

  if (inputRef.current !== null) {
    timeSnippets.push({
      // @ts-ignore
      expectedActivity: inputRef.current.value,
      expectedTime: "2 hour",
      // @ts-ignore
      acutualActivity: inputRef.current.value,
      actuaTime: "2 hour",
      timeCategory: TimeCategory.ETC
    });
  }

  console.log(timeSnippets.length);



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

  function isNotUpdating() {
    return !isUpdating;
  }

  return <input disabled={isNotUpdating()} value={value} onKeyPress={handleOnlyEnterKeyPressed} onChange={onChange} ref={inputRef}/>
};

export default BasicInputCell;
