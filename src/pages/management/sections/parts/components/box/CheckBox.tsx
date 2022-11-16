import React from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";
import check from 'src/assets/whiteCheck.svg'
import Pixel from "src/graphic/size/pixel";
import Percentage from "src/graphic/size/percentage";
import {TodoDto} from "src/dtos/TodoDto";
import {Dayjs} from "dayjs";
import {TimeRecord} from "src/model/TimeRecord";
import {RelativeDay} from "src/model/RelativeDay";
import Colors from "src/constants/Colors";
import {WeekViewDto} from "src/dtos/WeekViewDto";
import TodoApi from "src/api/TodoApi";

const CheckBox: React.FC<{ size: Pixel, borderWidth: Pixel, todoDto: TodoDto, index: number, day: Dayjs, timeBlocks: WeekViewDto, updateTimeBlocks: (timeBlocks: WeekViewDto) => void, todoApi: TodoApi }> =
  (props: { size: Pixel, borderWidth: Pixel, index: number, day: Dayjs, todoDto: TodoDto, timeBlocks: WeekViewDto, updateTimeBlocks: (timeBlocks: WeekViewDto) => void, todoApi: TodoApi}) => {
    const {
      size,
      borderWidth,
      todoDto,
      index,
      day,
      timeBlocks,
      updateTimeBlocks,
      todoApi
    } = props;

    let borderColor;
    if (todoDto.isFinished) {
      borderColor = Colors.theme.main.orgasme
    } else if (todoDto.content !== '') {
      borderColor = Colors.theme.main.work
    } else {
      borderColor = Colors.theme.table.innerLine
    }

    let backgroundColor;
    if (todoDto.isFinished) {
      backgroundColor = Colors.theme.main.orgasme
    } else {
      backgroundColor = "transparent";
    }

    const onChange = async (day, index) => {
      let dailyRecord = timeBlocks.dailyRecords.get(TimeRecord.getFormattedDate(day, RelativeDay.TODAY));
      if (dailyRecord === undefined || dailyRecord.todos.length === 0) {
        return;
      }


      dailyRecord.todos = await Promise.all(dailyRecord.todos.map(async (todoDto, todoDtoIndex) => {
        if (todoDtoIndex === index) {
          //여기에서 api 콜한 결과를 리턴
          if (todoDto.content === undefined || todoDto.content === '') {
            return todoDto;
          }

          return await todoApi.updateFinished(todoDto.id!, {isFinished: !todoDto.isFinished})
        } else {
          return todoDto;
        }
      }));

      timeBlocks.dailyRecords.set(TimeRecord.getFormattedDate(day, RelativeDay.TODAY), dailyRecord);
      updateTimeBlocks({dailyRecords: timeBlocks.dailyRecords, edgeTime: timeBlocks.edgeTime});

    };

    const imgSize = size.minus(borderWidth.multiply(new Percentage(200)));


    return <div css={css({
      width: size.toString(),
      height: size.toString(),
      '.container': {
        width: size.toString(),
        height: size.toString(),
        display: "block",
        position: "relative",
        paddingLeft: 0,
        paddingRight: 0,
        cursor: "pointer",
        WebkitUserSelect: "none",
        msUserSelect: "none",
        userSelect: "none"
      },

      '.container input': {
        position: "absolute",
        opacity: 0,
        cursor: "pointer",
        height: size.toString(),
        width: size.toString()
      },

      '.checkmark': {
        position: 'absolute',
        height: size.toString(),
        width: size.toString(),
        display: 'flex',
        backgroundColor: backgroundColor,

        borderStyle: "solid",
        borderColor: borderColor,
        borderWidth: borderWidth.toString(),

      },

      // '.container input:checked ~ .checkmark': {
      //   backgroundColor: backgroundColor,
      //
      // },

      '.container input ~ .checkmark img': {
        display: 'none',

      },

      '.container input:checked ~ .checkmark:after': {
        display: "block"
      },

      //
      '.container input:checked ~ .checkmark img': {
        display: 'block'
      },

      '.checkmark:after': {
        display: 'none'
      }


    })}
    >
      <label className="container">
        <input type="checkbox" checked={todoDto.isFinished} readOnly={true}/>
        {/*todo: onClicke에 api 콜 해서 체크하는 것들 다 저장 */}
        <span className={"checkmark"} onClick={() => onChange(day, index)} defaultChecked={todoDto.isFinished}>
              <img src={check} alt="Check" width={imgSize.toString()}
                   height={imgSize.toString()}/>
      </span>
      </label>


    </div>;


  }


// <label class="container">One
//   <input type="checkbox" checked="checked">
//     <span class="checkmark"></span>
// </label>

// input[id="list"] {
//   display: none;
// }
//
// // 체크박스 디폴트 이미지 적용
// .checkbox_img {
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   background: url('https://s.wemep.co.kr/ui/v2.8.307/dist/pc/css/spr/common.png') 0 -438px no-repeat;
//   vertical-align: top;
// }
//
// // 체크되었을 때 background-position 변경
// input[id="list"]:checked + label span {
//   background-position: -75px -438px;
// }

// input[id="list"] {
//   display: none;
// }
//
// // 체크박스 디폴트 이미지 적용
// .checkbox_img {
//   display: inline-block;
//   width: 20px;
//   height: 20px;
//   background: url('https://s.wemep.co.kr/ui/v2.8.307/dist/pc/css/spr/common.png') 0 -438px no-repeat;
//   vertical-align: top;
// }
//
// // 체크되었을 때 background-position 변경
// input[id="list"]:checked + label span {
//   background-position: -75px -438px;
// }
export default CheckBox;
