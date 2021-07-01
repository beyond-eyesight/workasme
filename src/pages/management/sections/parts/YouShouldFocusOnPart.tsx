import React from "react";
import {css} from "@emotion/react";
import Colors from "src/constants/Colors";

const YouShouldFocusOnPart: React.FC = () => {
  return <div css={css({
    backgroundColor: Colors.theme.main.orgasme,
    width: 900,
    height: 200
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
