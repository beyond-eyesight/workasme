import React, {Component} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import Pixel from "src/graphic/size/pixel";
import Percentage from "src/graphic/size/percentage";
import {ReactSelectableComponentProps} from "react-selectable";
import Colors from "src/constants/Colors";
import {TimeDto} from "src/dtos/TimeDto";
import TimeBlock from "src/pages/components/timeblock/TimeBlock";
import {WeekViewDto} from "src/dtos/WeekViewDto";
import TimeApi from "src/api/TimeApi";

interface SelectableProps extends ReactSelectableComponentProps {
  selectableRef: any,
  isSelected: boolean,
  isMatching: boolean,
  timeBlockDto: TimeDto | undefined,
  timeBlockHeightRatio?: Percentage
  timeCellHeight: Pixel,
  timeBlocks: WeekViewDto,
  updateTimeBlocks: (timeBlocks: WeekViewDto) => void,
  timeApi: TimeApi;
}

class Selectable extends Component<SelectableProps> {
  render() {
    const {selectableRef, isSelected, isMatching, timeBlockDto, timeBlockHeightRatio, timeCellHeight, timeBlocks, updateTimeBlocks, timeApi} = this.props

    return <div
      css={css({
        ".unselected": {
          backgroundColor: "white",
          borderBottom: 1,
          borderBottomStyle: "solid",
          borderBottomColor: Colors.theme.table.innerLine,
        },
        ".selected": {
          backgroundColor: Colors.theme.main.workTimeBlock,

          borderBottom: 0
        }
      })}

    >
      <div className={!isSelected ? 'unselected' : 'selected'} css={css({
        position: "relative",
        height: timeCellHeight.toString(),
      })} ref={selectableRef}
      >
        {this.props.children}
        <TimeBlock isMatching={isMatching} timeBlockDto={timeBlockDto} timeCellHeight={timeCellHeight}
                   timeBlockHeightRatio={timeBlockHeightRatio} timeBlocks={timeBlocks} updateTimeBlocks={updateTimeBlocks} timeApi={timeApi}/>
      </div>
    </div>;
  }
}

export default Selectable;


