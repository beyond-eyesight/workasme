import React from "react";
import YouShouldFocusOnPart from "src/pages/management/sections/parts/YouShouldFocusOnPart";
import EvaluationPart from "src/pages/management/sections/parts/EvaluationPart";
import ToDoListPart from "src/pages/management/sections/parts/ToDoListPart";
import TimeTrackerPart from "src/pages/management/sections/parts/TimeTrackerPart";
import SideBar from "src/pages/components/bars/navigation/SideBar";

const SelfManagementSection: React.FC = () => {
  return <div>
    <SideBar />
    <YouShouldFocusOnPart />
    <TimeTrackerPart />
    <ToDoListPart />
    <EvaluationPart/>
  </div>;
};



export default SelfManagementSection;
