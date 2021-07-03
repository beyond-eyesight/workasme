import React from "react";
import Pixel from "src/graphic/size/pixel";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";

const ToDoListPart: React.FC<{marginVertical: Pixel}> = (props: {marginVertical: Pixel}) => {
  const {marginVertical} = props;
  return <div css={css({
    backgroundColor: 'green',
    marginTop: marginVertical.value,
    marginBottom: marginVertical.value
  })}>

  </div>
};
export default ToDoListPart;
