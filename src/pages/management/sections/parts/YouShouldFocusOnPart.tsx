import React from "react";
import Colors from "src/constants/Colors";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";

const YouShouldFocusOnPart: React.FC<{height: Pixel}> = (props: {height: Pixel}) => {
  const {height} = props;
  return <div css={css({
    backgroundColor: Colors.theme.main.orgasme,
    height: height.value
  })}>
    <SelectPermissionButtonsPart />
    <GuideBoardPart />
    <PriorityInformationCard />
  </div>;
};


const SelectPermissionButtonsPart: React.FC = () => {
  return <div />;
};

const GuideBoardPart: React.FC = () => {
  return <div />;
};

const PriorityInformationCard: React.FC = () => {
  return <div />;
};

export default YouShouldFocusOnPart;
