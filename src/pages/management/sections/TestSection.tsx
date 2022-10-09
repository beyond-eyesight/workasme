import React, {Dispatch, MutableRefObject, RefObject, SetStateAction, useEffect, useRef, useState} from "react";
/** @jsxRuntime classic */
/** @jsx jsx */
import {css, jsx} from "@emotion/react";

import {createSelectable} from 'react-selectable';

import Selectable from "src/pages/management/sections/Selectable";
import ReactSelectableGroup from "src/pages/management/sections/selectable/react-selectable/ReactSelectableGroup";
import Percentage from "src/graphic/size/percentage";
import {WeekTimes} from "src/model/WeekTimes";
import {TimeBlockDto} from "src/dtos/TimeBlockDto";
import dayjs, {Dayjs} from "dayjs";
import {TimeRecord} from "src/model/TimeRecord";
import {parseDayOfWeekAlias} from "src/util/DayofweekParser"
import {TimeRecordTemplate} from "src/model/TimeRecordTemplate";
import Pixel from "src/graphic/size/pixel";
import Colors from "src/constants/Colors";
import CheckBox from "src/pages/management/sections/parts/components/box/CheckBox";
import fontConfig from "src/graphic/text/font";
import NumberBox from "src/pages/management/sections/parts/components/box/NumberBox";
import {RelativeDay} from "src/model/RelativeDay";
import Modal from "src/pages/components/Mordal";
import TimeBlockRegisterForm from "src/pages/components/timeblock/TimeBlockRegisterForm";
import {TodoDto} from "src/dtos/TodoDto";
import {IoMdClose} from "react-icons/all";
import {useDispatch, useSelector} from "react-redux";
import {selectToken} from "src/context/redux/signSlice";
import {useInjection} from "inversify-react";
import AxiosSupplier from "src/api/AxiosSupplier";
import {container} from "src/context/inversify/container";
import {TYPES} from "src/context/inversify/types";


const SelectableComponent = createSelectable(Selectable);

const serverData: WeekTimes = new WeekTimes(
  new Map<string, TimeBlockDto[]>([
    ["2022-08-07", [
      {
        id: 1,
        title: "엣지타임",
        startDateTime: {dateTime: "2022-08-07T23:00"},
        endDateTime: {dateTime: "2022-08-08T01:00"},
        isGood: true,
        category: "NONE",
        memo: "엣지타임"
      }
    ]],
    ["2022-08-08", [
      {
        id: 2,
        title: "영화 보고 친구랑 잠깐 수다떨음",
        startDateTime: {dateTime: "2022-08-08T01:00"},
        endDateTime: {dateTime: "2022-08-08T04:00"},
        isGood: false,
        category: "SOCIAL",
        memo: undefined
      },
      {
        id: 3,
        title: "일했지",
        startDateTime: {dateTime: "2022-08-08T15:00"},
        endDateTime: {dateTime: "2022-08-08T19:00"},
        isGood: false,
        category: "INTELLECTUAL",
        memo: undefined
      },
    ]],
    ["2022-08-09", [
      {
        id: 4,
        title: "샤워하고 밥먹고 전화하다가 엄마한테 등짝맞고 공부하다가 플스함",
        startDateTime: {dateTime: "2022-08-09T01:00"},
        endDateTime: {dateTime: "2022-08-09T04:00"},
        isGood: false,
        category: "NONE",
        memo: "why should id live like this"
      },
    ]],
    ["2022-08-10", [
      {
        id: 5,
        title: "코딩함",
        startDateTime: {dateTime: "2022-08-10T01:00"},
        endDateTime: {dateTime: "2022-08-10T05:00"},
        isGood: true,
        category: "INTELLECTUAL",
        memo: undefined
      },
      {
        id: 6,
        title: "카페에 왔다",
        startDateTime: {dateTime: "2022-08-10T10:00"},
        endDateTime: {dateTime: "2022-08-10T13:00"},
        isGood: true,
        category: "INTELLECTUAL",
        memo: undefined
      },
    ]],
    ["2022-08-11", [
      {
        id: 7,
        title: "베라 피티를 함",
        startDateTime: {dateTime: "2022-08-11T01:00"},
        endDateTime: {dateTime: "2022-08-11T04:00"},
        isGood: true,
        category: "PHYSICAL",
        memo: "개힘들다"
      },
    ]],
    ["2022-08-12", [
      {
        id: 8,
        title: "산책을 함",
        startDateTime: {dateTime: "2022-08-12T01:00"},
        endDateTime: {dateTime: "2022-08-12T04:00"},
        isGood: false,
        category: "SPIRITUAL",
        memo: "개운하다"
      },
    ]],

    ["2022-08-13", [
      {
        id: 9,
        title: "잠을 뒤척임",
        startDateTime: {dateTime: "2022-08-13T02:00"},
        endDateTime: {dateTime: "2022-08-13T05:00"},
        isGood: false,
        category: "NONE",
        memo: "힘들다"
      },
    ]],

    ["2022-08-14", [
      {
        id: 10,
        title: "sleep bad",
        startDateTime: {dateTime: "2022-08-14T00:00"},
        endDateTime: {dateTime: "2022-08-14T05:00"},
        isGood: false,
        category: "NONE",
        memo: "힘들다"
      },
    ]]
  ]),

  undefined,
  new Map<string, TodoDto[]>([
    ["2022-08-14", [
      {
        id: 1,
        isChecked: false,
        content: "해야하는데 아직 못함"
      },
      {
        id: 3,
        isChecked: true,
        content: "쉽게 함"
      },
      {
        id: 4,
        isChecked: true,
        content: "하는중"
      },
      {
        id: 5,
        isChecked: true,
        content: "고고"
      }
    ]],
    ["2022-08-15", [
      {
        id: 2,
        isChecked: true,
        content: "다했음!"
      }
    ]],
    ["2022-08-16", []],
    ["2022-08-17", []],
    ["2022-08-18", []],
    ["2022-08-19", []],
    ["2022-08-20", []]
  ])
);

const timeTemplates: TimeRecordTemplate[] = [
  new TimeRecordTemplate("03:00", RelativeDay.TODAY),
  new TimeRecordTemplate("04:00", RelativeDay.TODAY),
  new TimeRecordTemplate("05:00", RelativeDay.TODAY),
  new TimeRecordTemplate("06:00", RelativeDay.TODAY),
  new TimeRecordTemplate("07:00", RelativeDay.TODAY),
  new TimeRecordTemplate("08:00", RelativeDay.TODAY),
  new TimeRecordTemplate("09:00", RelativeDay.TODAY),
  new TimeRecordTemplate("10:00", RelativeDay.TODAY),
  new TimeRecordTemplate("11:00", RelativeDay.TODAY),
  new TimeRecordTemplate("12:00", RelativeDay.TODAY),
  new TimeRecordTemplate("13:00", RelativeDay.TODAY),
  new TimeRecordTemplate("14:00", RelativeDay.TODAY),
  new TimeRecordTemplate("15:00", RelativeDay.TODAY),
  new TimeRecordTemplate("16:00", RelativeDay.TODAY),
  new TimeRecordTemplate("17:00", RelativeDay.TODAY),
  new TimeRecordTemplate("18:00", RelativeDay.TODAY),
  new TimeRecordTemplate("19:00", RelativeDay.TODAY),
  new TimeRecordTemplate("20:00", RelativeDay.TODAY),
  new TimeRecordTemplate("21:00", RelativeDay.TODAY),
  new TimeRecordTemplate("22:00", RelativeDay.TODAY),
  new TimeRecordTemplate("23:00", RelativeDay.TODAY),
  new TimeRecordTemplate("00:00", RelativeDay.TOMORROW),
  new TimeRecordTemplate("01:00", RelativeDay.TOMORROW),
  new TimeRecordTemplate("02:00", RelativeDay.TOMORROW),
]


const isNodeInRoot = (node, root) => {
  while (node) {
    if (node === root) {
      return true;
    }
    node = node.parentNode;
  }

  return false;
};

function isIdInSelectedKeys(id, selectedKeys: number[]) {
  function getBiggest(selectedKeys: number[]) {
    let biggest: number | undefined = undefined;
    for (let i = 0; i < selectedKeys.length; i++) {
      const selectedKey = selectedKeys[i];
      if (biggest === undefined || biggest < selectedKey) {
        biggest = selectedKey;
      }
    }


    return biggest!;
  }

  function getSmallest(selectedKeys: number[]) {
    let smallest: number | undefined = undefined;

    for (let i = 0; i < selectedKeys.length; i++) {
      const selectedKey = selectedKeys[i];
      if (smallest === undefined || selectedKey < smallest) {
        smallest = selectedKey;
      }
    }

    return smallest!;
  }

  const biggest = getBiggest(selectedKeys);


  const smallest = getSmallest(selectedKeys);

  return id <= biggest && smallest <= id;
}

function createAllTimeRecords(day: Dayjs): TimeRecord[] {
  const allTimeRecords: TimeRecord[] = [];
  const weekdays = calculateWeekdaysForView(day);

  weekdays.forEach((day, i) => {
    timeTemplates.forEach((timeTemplate, j) => {
      allTimeRecords.push(new TimeRecord(Number(i.toString() + getIdOfTemplate(j)), day, timeTemplate))
    })
  })
  return allTimeRecords;
}

function getEarliestRecord(selectedTimeRecords: TimeRecord[]): TimeRecord {
  let earliest: TimeRecord | undefined = undefined;

  selectedTimeRecords.forEach((selectedTimeRecord) => {
    if (earliest === undefined || new Date(selectedTimeRecord.getEndDateTime()).getTime() < new Date(earliest.getStartDateTime()).getTime()) {
      earliest = selectedTimeRecord;
    }
  })

  return earliest!;
}

function getLatestRecord(selectedTimeRecords: TimeRecord[]): TimeRecord {
  let latest: TimeRecord | undefined = undefined;

  selectedTimeRecords.forEach((selectedTimeRecord) => {
    if (latest === undefined || new Date(latest.getStartDateTime()).getTime() < new Date(selectedTimeRecord.getStartDateTime()).getTime()) {
      latest = selectedTimeRecord;
    }
  })

  return latest!;
}

const TodayButton: React.FC = () => {
  const dispatch = useDispatch();
  const axiosProvider = container.get<AxiosSupplier>(TYPES.AxiosSupplier);
  const axiosInstance = axiosProvider.provide()

  const token = useSelector(selectToken);
  return <div css={css({
    display: "flex",
    alignItems: "center",
    '.button': {
      backgroundColor: "transparent",
      borderRadius: 10,
      borderWidth: "2px",
      borderColor: Colors.theme.text.box.default,
      borderStyle: "solid",
      color: Colors.theme.text.box.default,
      paddingLeft: 0,
      paddingRight: 0,
    }
  })}>
    <button
      css={css({
        width: new Pixel(60).toString(),

        height: new Pixel(30).toString(),
        fontFamily: fontConfig.web.medium.fontFamily,

      })}
      className={"button"}


      onClick={async () => {
        let response;
        console.log("test section header", axiosInstance.defaults.headers.common['Authorization']);
        try {
          response = await axiosInstance.get(`/life-history/times/kk`);
          console.log('response', response);
        } catch (e: any) {
          console.log('errorasdafd');
        }
      }}
    >today
    </button>
  </div>;
}

export class TestSection extends React.Component<any> {
  selectableRef;
  state;
  timeBlocks;
  wrapperRef;

  constructor(props) {
    super(props)
    this.state = {
      selectedKeys: [],
      tolerance: 0,
      selectOnMouseMove: false,
      standardDate: dayjs(),
      timeBlocks: new WeekTimes(new Map<string, TimeBlockDto[]>([]), undefined, new Map<string, TodoDto[]>([]))
    };
    this.selectableRef = React.createRef();
    this.wrapperRef = React.createRef();

    this.handleSelection = this.handleSelection.bind(this);
    this.clearItems = this.clearItems.bind(this);
    this.handleToleranceChange = this.handleToleranceChange.bind(this);
    this.toggleSelectOnMouseMove = this.toggleSelectOnMouseMove.bind(this);
  }

  updateTimeBlocks(timeBlocks: WeekTimes) {

    this.setState({
      timeBlocks: timeBlocks
    })
  }


  componentDidMount() {
    this.setState({
      timeBlocks: serverData
    })
  }


  componentDidUpdate(prevProps: Readonly<any>, prevState: Readonly<{}>, snapshot?: any) {
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.clearItems);
  }

  handleSelection(keys) {

    this.setState({
      selectedKeys: keys
    });
  }

  clearItems(e) {
    if (!isNodeInRoot(e.target, this.selectableRef)) {
      this.setState({
        selectedKeys: []
      });
    }
  }

  handleToleranceChange(e) {
    this.setState({
      tolerance: parseInt(e.target.value)
    });
  }

  toggleSelectOnMouseMove() {
    this.setState({
      selectOnMouseMove: !this.state.selectOnMouseMove
    });
  }

  showModal = (selectedKeys: number[]) => {
    if (selectedKeys.length === 0) {
      return
    }
    this.setState({isShown: true}, () => {
      this.closeButton.focus();
    });
    this.toggleScrollLock();
  };
  onClose = (e) => {
    this.clearItems(e)
    this.setState({isShown: false});
    this.toggleScrollLock();
  };
  onKeyDown = (event: any) => {
    if (event.keyCode === 27) {
      this.onClose(event);
    }
  };
  onClickOutside = (event: any) => {
    event.stopPropagation();
    if (this.modal && this.modal.contains(event.target)) return;
    this.onClose(event);
  };

  toggleScrollLock = () => {
    // @ts-ignore
    document.querySelector('html').classList.toggle('scroll-lock');
  };


  private closeButton: any;
  private TriggerButton: any;
  private modal: any;

  private checkBoxSize = new Pixel(15);
  private timeCellHeight = new Pixel(30);
  private outlineBorder = new Pixel(1);
  private noBorder = new Pixel(0);


  render() {
    const weekdays = calculateWeekdaysForView(this.state.standardDate);

    const allTimeRecords: TimeRecord[] = createAllTimeRecords(this.state.standardDate);
    const selectedTimeRecords: TimeRecord[] = [];
    allTimeRecords.forEach((timeRecord, i) => {
      if (isIdInSelectedKeys(timeRecord.id, this.state.selectedKeys)) {
        selectedTimeRecords.push(timeRecord);
      }
    });

    const earliestRecord = getEarliestRecord(selectedTimeRecords);
    const latestRecord = getLatestRecord(selectedTimeRecords);

    return (
      <div>
        <div css={css({
          display: "flex",
          justifyContent: "flex-end",
          minWidth: new Pixel(700).toString(),
        })}>
          <div css={css({
            display: "flex",
            flexDirection: "row",
            position: "relative",
            // left: 17,
            marginBottom: 25,
            ".arrow-prev, .arrow-next": {
              position: "relative",
              float: "left",
              width: "20px",
              height: "20px"
            },

            ".arrow-prev::after": {
              position: "absolute",
              top: "3px",
              left: "2.5px",
              content: '""',
              width: "15px", /* 사이즈 */
              height: "15px", /* 사이즈 */
              borderTop: `4px solid ${Colors.theme.text.box.default}`, /* 선 두께 */
              borderRight: `4px solid ${Colors.theme.text.box.default}`, /* 선 두께 */
              transform: "rotate(225deg)", /* 각도 */
            },

            ".arrow-next::after": {
              position: "absolute",

              top: "3px",
              left: "2.5px",
              content: '""',
              width: "15px", /* 사이즈 */
              height: "15px", /* 사이즈 */
              borderTop: `4px solid ${Colors.theme.text.box.default}`, /* 선 두께 */
              borderRight: `4px solid ${Colors.theme.text.box.default}`, /* 선 두께 */
              transform: "rotate(45deg)", /* 각도 */
            }
          })}>
            <div css={css({
              display: "flex",
              alignItems: "center",
            })}>
              <span className="arrow-prev" onClick={() => {
                this.setState({
                  // todo: while이 문제인듯
                  standardDate: this.state.standardDate.subtract(7, 'day')
                });
              }}/>
            </div>

            <TodayButton/>
            <div css={css({
              display: "flex",
              alignItems: "center",
            })}>
              <span className="arrow-next" onClick={() => {
                this.setState({
                  standardDate: this.state.standardDate.add(7, 'day')
                });
              }}/>
            </div>


          </div>
        </div>
        <TodoListSection weekdays={weekdays} checkBoxSize={this.checkBoxSize} timeBlocks={this.state.timeBlocks}
                         updateTimeBlocks={this.updateTimeBlocks.bind(this)}/>

        <ReactSelectableGroup onSelection={this.handleSelection}
                              onEndSelection={() => this.showModal(this.state.selectedKeys)}
                              className={"selectable"}
                              ref={this.selectableRef}
                              selectOnMouseMove={this.state.selectOnMouseMove}
                              selectingClassName={"selectingSelectable"}

        >

          <div css={css({
            flexDirection: "row",
            display: "flex",
            minWidth: new Pixel(700).toString()
          })}>
            {
              weekdays.map((day, i) => {

                const timeRecords: TimeRecord[] = [];


                timeTemplates.forEach((recordTemplate, j) => {
                  timeRecords.push(new TimeRecord(Number(i.toString() + getIdOfTemplate(j)), day, recordTemplate))
                })

                let borderRight: Pixel;
                if (i === 6) {
                  borderRight = this.noBorder;
                } else {
                  borderRight = this.outlineBorder;
                }

                return <div key={i} css={css({
                  width: "100%"
                })}>

                  <div css={css({
                    width: "100%",
                    borderRight: borderRight.toString(),
                    borderLeft: this.noBorder.toString(),
                    borderTop: this.outlineBorder.toString(),
                    borderBottom: this.noBorder.toString(),
                    borderStyle: "solid",
                    borderColor: Colors.theme.table.outLine
                  })}>

                    {
                      timeRecords.map((timeCell, timeCellIndex) => {
                        let selected = this.state.selectedKeys.indexOf(timeCell.id) > -1 || isIdInSelectedKeys(timeCell.id, this.state.selectedKeys);
                        const isMatching = timeCell.match(this.state.timeBlocks, this.state.standardDate);
                        const timeBlockHeightRatio = timeCell.calculateHeightTimes(this.state.timeBlocks, isMatching, this.state.standardDate)
                        const timeBlockDto: TimeBlockDto | undefined = timeCell.getMatching(this.state.timeBlocks, this.state.standardDate);
                        return (
                          <div key={timeCellIndex}>
                            <SelectableComponent
                              selectableKey={timeCell.id}
                              key={timeCell.id}
                              isSelected={selected}
                              isMatching={isMatching}
                              timeBlockDto={timeBlockDto}
                              timeBlockHeightRatio={timeBlockHeightRatio}
                              timeCellHeight={this.timeCellHeight}
                              timeBlocks={this.state.timeBlocks}
                              updateTimeBlocks={this.updateTimeBlocks.bind(this)}
                            >
                              <NumberBox number={timeCell.getAlias()} numberSize={this.checkBoxSize}
                                         numberFont={fontConfig.web.medium.fontFamily}
                                         numberColor={!selected ? Colors.theme.text.box.default : "white"}
                                         boxWidth={new Pixel(14)} boxHeight={new Pixel(35)}
                                         boxRadius={0}/>
                            </SelectableComponent>
                          </div>
                        )
                      })
                    }
                  </div>
                </div>
              })
            }
          </div>
        </ReactSelectableGroup>
        <React.Fragment>
          {

            this.state.isShown ? (
              <Modal
                modalRef={(n: any) => (this.modal = n)}
                buttonRef={(n: any) => (this.closeButton = n)}
                closeModal={this.onClose}
                onKeyDown={this.onKeyDown}
                onClickOutside={this.onClickOutside.bind(this)}
              >
                <TimeBlockRegisterForm earliestRecord={earliestRecord}
                                       latestRecord={latestRecord}
                                       closeModal={this.onClose.bind(this)}
                                       timeBlocks={this.state.timeBlocks}
                                       updateTimeBlocks={this.updateTimeBlocks.bind(this)}
                />
              </Modal>
            ) : null}
        </React.Fragment>

      </div>
    )
  }
}


const TodoList: React.FC<{ checkBoxSize: Pixel, weekdays: Dayjs[], day: Dayjs, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void }> =
  (props: { checkBoxSize: Pixel, weekdays: Dayjs[], day: Dayjs, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void }) => {

    const {checkBoxSize, weekdays, day, timeBlocks, updateTimeBlocks} = props;

    let todoDtosAtDate: TodoDto[] | undefined = timeBlocks.todoWithinThisWeek.get(TimeRecord.getFormattedDate(day, RelativeDay.TODAY));

    let todoDtosForRender: TodoDto[];
    if (todoDtosAtDate === undefined) {
      todoDtosForRender = [
        {id: undefined, isChecked: false, content: ''},
        {id: undefined, isChecked: false, content: ''},
        {id: undefined, isChecked: false, content: ''},
      ]
    } else {
      todoDtosForRender = todoDtosAtDate.map(todoDto => {
        return {id: todoDto.id, isChecked: todoDto.isChecked, content: todoDto.content}
      });
    }

    const maxCount = getCountOfTodoAtDate(timeBlocks.todoWithinThisWeek, weekdays);
    while (todoDtosForRender.length < maxCount) {
      todoDtosForRender.push({id: undefined, isChecked: false, content: ''})
    }

    // if (someDayIsFullOfContents(timeBlocks.todoWithinThisWeek, weekdays)) {
    //   todoDtosForRender.push({id: undefined, isChecked: false, content: ''})
    // }


    return <div css={css({
      display: "flex",
      // alignItems: "center",
      marginLeft: "5px",
      marginRight: "10px",
      flexDirection: "column",
      paddingTop: checkBoxSize.multiply(new Percentage(50)).toString(),
      paddingBottom: checkBoxSize.multiply(new Percentage(50)).toString(),
      // "-webkit-align-items": ""
    })}>
      {
        todoDtosForRender.map((todo, index) => {
          return <Todo key={index} checkBoxSize={checkBoxSize} todoDto={todo} day={day} index={index}
                       timeBlocks={timeBlocks}
                       updateTimeBlocks={updateTimeBlocks}/>
        })
      }
    </div>
  }

function getCountOfTodoAtDate(todoWithinThisWeek: Map<string, TodoDto[]>, weekdays: Dayjs[]) {
  let biggestCountOfTodosWhitinThisWeek = 0;
  for (const key of weekdays) {
    let todoDtosAtDate: TodoDto[] | undefined = todoWithinThisWeek.get(TimeRecord.getFormattedDate(key, RelativeDay.TODAY));
    if (todoDtosAtDate === undefined) {
      continue;
    }

    if (biggestCountOfTodosWhitinThisWeek < todoDtosAtDate.length) {
      biggestCountOfTodosWhitinThisWeek = todoDtosAtDate.length;
    }
  }
  return biggestCountOfTodosWhitinThisWeek < 3 ? 3 : biggestCountOfTodosWhitinThisWeek + 1;
}

function handleClickOutside(event: any, ref: RefObject<any>, day: Dayjs, index: number, todoDto: TodoDto, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void, setIsFocused: Dispatch<SetStateAction<any>>) {
  if (ref.current && !ref.current.contains(event.target)) {
    if ((ref.current.value !== ref.current.defaultValue) && (ref.current.value !== '' && ref.current.value !== undefined)) {

      let todoDtosAtDate: TodoDto[] | undefined = timeBlocks.todoWithinThisWeek.get(TimeRecord.getFormattedDate(day, RelativeDay.TODAY));
      alert("should api call modified")

      let newTodoDtos: TodoDto[];
      if (todoDtosAtDate === undefined) {
        newTodoDtos = [{id: undefined, isChecked: false, content: ref.current.value}]
      } else {
        todoDtosAtDate.push({id: todoDto.id, isChecked: todoDto.isChecked, content: ref.current.value})
        newTodoDtos = todoDtosAtDate;
      }


      // let newTodoDtos: TodoDto[] | undefined = todoDtosAtDate;
      // let newTodoDtos: TodoDto[] | undefined = todoDtosAtDate!.map((todoDto, todoDtoIndex) => {
      //   if (todoDtoIndex === index) {
      //     //여기에서 api 콜한 결과를 리턴
      //     return {id: todoDto.id, isChecked: todoDto.isChecked, content: ref.current.value}
      //   } else {
      //     return todoDto;
      //   }
      // })

      timeBlocks.todoWithinThisWeek.set(TimeRecord.getFormattedDate(day, RelativeDay.TODAY), newTodoDtos === undefined ? [] : newTodoDtos)
      updateTimeBlocks(timeBlocks);
    }
    setIsFocused(false);
    // ref.current.defaultValue = ref.current.value;
  }
}

function useOutsideAlerter(ref: RefObject<any>, day: Dayjs, index: number, todoDto: TodoDto, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void, setIsFocused: Dispatch<SetStateAction<any>>) {

  useEffect(() => {
    /**
     * Alert if clicked on outside of element
     */
      // Bind the event listener
    const handleClickOutsideHandler = (e) => handleClickOutside(e, ref, day, index, todoDto, timeBlocks, updateTimeBlocks, setIsFocused);
    document.addEventListener("mousedown", handleClickOutsideHandler);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener("mousedown", handleClickOutsideHandler);
    };
  }, [ref, day, index, todoDto, timeBlocks, updateTimeBlocks, setIsFocused]);
}

//https://stackoverflow.com/questions/32553158/detect-click-outside-react-component
const Todo: React.FC<{ checkBoxSize: Pixel, todoDto: TodoDto, day: Dayjs, index: number, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlock: WeekTimes) => void }> =
  (props: { checkBoxSize: Pixel, todoDto: TodoDto, day: Dayjs, index: number, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlock: WeekTimes) => void }) => {
    const {checkBoxSize, todoDto, day, index, timeBlocks, updateTimeBlocks} = props;
    const [isHover, setIsHover] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, day, index, todoDto, timeBlocks, updateTimeBlocks, setIsFocused);


    return <div
      css={css({
        display: "flex",
        alignItems: "center",
        justifyContent: "flex-start",
        marginTop: checkBoxSize.multiply(new Percentage(25)).toString(),
        marginBottom: checkBoxSize.multiply(new Percentage(25)).toString(),
      })}
      onMouseEnter={() => {
        if (todoDto.content === undefined || todoDto.content === '') {
          return
        }
        setIsHover(true);
      }}
      onMouseLeave={() => {
        if (todoDto.content === undefined || todoDto.content === '') {
          return
        }
        setIsHover(false);
      }}
    >
      <CheckBox size={checkBoxSize} borderWidth={new Pixel(1.5)}
                todoDto={todoDto}
                index={index}
                day={day}
                timeBlocks={timeBlocks}
                updateTimeBlocks={updateTimeBlocks}
      />
      <TodoContent day={day} index={index} isFocused={isFocused} isHover={isHover} setIsFocused={setIsFocused}
                   timeBlocks={timeBlocks} todoDto={todoDto} updateTimeBlocks={updateTimeBlocks}
                   wrapperRef={wrapperRef}/>

      {/*다음으로 할 작업은 인풋 api 콜 되는부분에서 setTodos를 해서 defaultValue를 수정하는것. 마찬가지로 check에서도 체크했을때 api 콜 가정하여 setTodos 호출해서 check 수정하*/}
    </div>
  }


const TodoContent: React.FC<{ timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void, todoDto: TodoDto, isFocused: boolean, wrapperRef: MutableRefObject<any>, day: Dayjs, index: number, setIsFocused: Dispatch<SetStateAction<boolean>>, isHover: boolean }> =
  (props: { timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void, todoDto: TodoDto, isFocused: boolean, wrapperRef: MutableRefObject<any>, day: Dayjs, index: number, setIsFocused: Dispatch<SetStateAction<boolean>>, isHover: boolean }) => {
    const {timeBlocks, updateTimeBlocks, todoDto, isFocused, wrapperRef, day, index, setIsFocused, isHover} = props;

    let borderBottomColor;
    if (todoDto.isChecked) {
      borderBottomColor = Colors.theme.main.orgasme;
    } else if (todoDto.content !== undefined && todoDto.content !== '') {
      borderBottomColor = Colors.theme.main.work;
    } else {
      borderBottomColor = Colors.theme.table.innerLine;
    }

    let closeButtonBackgroundColor;
    if (todoDto.isChecked) {
      closeButtonBackgroundColor = Colors.theme.main.orgasme;
    } else {
      closeButtonBackgroundColor = Colors.theme.main.work;
    }

    const onDelete = (e, day, index, timeBlocks, updateTimeBlocks) => {
      let todoDtosAtDate: TodoDto[] | undefined = timeBlocks.todoWithinThisWeek.get(TimeRecord.getFormattedDate(day, RelativeDay.TODAY));
      const removeTarget = todoDtosAtDate!.filter((todoDto, todoDtoIndex) => todoDtoIndex === index)[0];
      alert("should api call deleted")
      let newTodoDtos = todoDtosAtDate!.filter((todoDto) => {
        return todoDto !== removeTarget
      });

      // if (hasFullChecked(timeBlocks)) {
      //   newTodoDtos.push({id: undefined, isChecked: false, content: ''})
      // } else {
      //   const otherDays = Array.from(timeBlocks.todoWithinThisWeek.keys()).filter(key => key !== TimeRecord.getFormattedDate(day, RelativeDay.TODAY));
      //   for (const otherDay of otherDays) {
      //     let todoDtosAtDate = timeBlocks.todoWithinThisWeek.get(otherDay);
      //     todoDtosAtDate.pop()
      //     timeBlocks.todoWithinThisWeek.set(otherDay, todoDtosAtDate);
      //   }
      // }

      timeBlocks.todoWithinThisWeek.set(TimeRecord.getFormattedDate(day, RelativeDay.TODAY), newTodoDtos);


      updateTimeBlocks(timeBlocks);
    }

    const onKeyPress = (event, day, index, setIsFocused) => {
      // todo: 엔티티가 아니면, 즉 아이디가 없으면 생성 콜을 해야함.
      if (event.charCode === 13 && !event.shiftKey) {
        event.preventDefault();
        let todoDtosAtDate: TodoDto[] | undefined = timeBlocks.todoWithinThisWeek.get(TimeRecord.getFormattedDate(day, RelativeDay.TODAY));
        const target = event.target as HTMLInputElement;
        if (target.defaultValue !== target.value) {
          alert("should api call modified")

          let newTodoDtos: TodoDto[] | undefined;

          if (todoDtosAtDate === undefined) {
            newTodoDtos = [{id: todoDto.id, isChecked: todoDto.isChecked, content: target.value}]
          } else {
            todoDtosAtDate.push({id: todoDto.id, isChecked: todoDto.isChecked, content: target.value});
            newTodoDtos = todoDtosAtDate;
          }


          timeBlocks.todoWithinThisWeek.set(TimeRecord.getFormattedDate(day, RelativeDay.TODAY), newTodoDtos === undefined ? [] : newTodoDtos)
          updateTimeBlocks(timeBlocks);
        }
        setIsFocused(false);
      }
    };

    return <div
      css={css({
        display: 'flex',
        flexDirection: 'row',
        position: "relative",
        width: "100%",
        height: 15
      })}
    >

      {
        isFocused ? <textarea ref={wrapperRef} css={css({
            position: "absolute",
            top: "0px",
            left: "0px",
            zIndex: 50,
            width: "200%",
            marginLeft: "5%",
            ":focus-visible": {
              outline: "0px"
            },

          })} autoFocus={isFocused} onKeyPress={(e) => onKeyPress(e, day, index, setIsFocused)}
                              defaultValue={todoDto.content}
          /> :
          <input ref={wrapperRef} css={css({
            border: 0,
            borderBottom: 1,
            paddingTop: 0,
            paddingBottom: 1,
            borderBottomStyle: "solid",
            borderBottomColor: borderBottomColor,
            marginLeft: "5%",
            width: "100%",
            textOverflow: "ellipsis",
            overflow: "hidden",
            WebkitLineClamp: 1,
            wordBreak: "break-all",
            whiteSpace: "nowrap",
            ":focus-visible": {
              outline: "0px"
            },
          })} key={TimeRecord.getFormattedDate(day, RelativeDay.TODAY) + index + todoDto.content}
                 onFocus={() => setIsFocused(true)} onKeyPress={(e) => onKeyPress(e, day, index, setIsFocused)}
                 defaultValue={todoDto.content} type={"text"}/>
      }
      {isHover && !isFocused && (
        <button
          css={css({
            paddingLeft: 0,
            paddingRight: 0,
            backgroundColor: 'transparent',
            ":focus-visible": {
              outline: "0px"
            },
            borderWidth: "0px",
            display: "flex",
            alignItems: "center"
          })}
          onClick={event => onDelete(event, day, index, timeBlocks, updateTimeBlocks)}

        >
          {/*<span id="close-modal" className="_hide-visual">*/}
          {/*  Close*/}
          {/*</span>*/}
          <IoMdClose css={css({
            backgroundColor: closeButtonBackgroundColor,
          })} size={new Pixel(15).toString()} color={"white"}
                     onClick={() => {
                     }}/>
          {/*<svg className="_modal-close-icon" viewBox="0 0 40 40">*/}
          {/*  <path d="M 10,10 L 30,30 M 30,10 L 10,30"/>*/}
          {/*</svg>*/}
        </button>
      )}
    </div>
  }

const TodoListSection: React.FC<{ weekdays: Dayjs[], checkBoxSize: Pixel, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void }> =
  (props: { weekdays: Dayjs[], checkBoxSize: Pixel, timeBlocks: WeekTimes, updateTimeBlocks: (timeBlocks: WeekTimes) => void }) => {
    const token = useSelector(selectToken);
    const {weekdays, checkBoxSize, timeBlocks, updateTimeBlocks} = props;
    useEffect(() => {
      console.log("token", token);
    }, [token])

    return <div
      css={css({
        flexDirection: "row",
        display: "flex",
        fontFamily: "Gaegu-Regular",
        fontSize: checkBoxSize.minus(new Pixel(2)).toString(),
        lineHeight: checkBoxSize.minus(new Pixel(2)).toString(),
        minWidth: new Pixel(700).toString()
      })}>
      {

        weekdays.map((day, i) => {

          return <div key={i} css={css({
            width: "100%"
          })}>
            <DateGuide day={day}/>
            <TodoList checkBoxSize={checkBoxSize} weekdays={weekdays} day={day} timeBlocks={timeBlocks}
                      updateTimeBlocks={updateTimeBlocks}/>
          </div>
        })
      }
    </div>
  }


const DateGuide: React.FC<{ day: Dayjs }> = (props: { day: Dayjs }) => {
  const {day} = props;


  const fontSize = new Pixel(20);
  return <div css={css({
    width: "100%",
    marginTop: 0,
    marginBottom: 0,
    paddingLeft: "5px",
    display: 'flex',
    justifyContent: "space-between",
    fontSize: "12px",
    fontFamily: fontConfig.web.medium.fontFamily
  })}>
    <div css={css({
      // width: "50%",
      color: Colors.theme.text.box.default,
      fontSize: fontSize.toString()
    })}>{parseDayOfWeekAlias(day.day())}</div>
    <div css={css({
      color: Colors.theme.text.box.default,
      fontSize: fontSize.toString()
    })}>{String(day.month() + 1) + "." + String(day.date())}</div>
  </div>
}


function getIdOfTemplate(j: number) {
  if (j < 10) {
    return "0" + j.toString();
  }
  return j.toString();
}


function calculateWeekdaysForView(day: dayjs.Dayjs): Dayjs[] {
  function getStartDate(day: dayjs.Dayjs) {
    if (day.day() === 0) {
      return day;
    }

    if (day.day() === 1) {
      return day.subtract(1, 'day')
    }

    if (day.day() === 2) {
      return day.subtract(2, 'day')
    }

    if (day.day() === 3) {
      return day.subtract(3, 'day')
    }

    if (day.day() === 4) {
      return day.subtract(4, 'day')
    }

    if (day.day() === 5) {
      return day.subtract(5, 'day')
    }

    return day.subtract(6, 'day')
  }

  const startDate = getStartDate(day);
  const result: Dayjs[] = [];
  for (let i = 0; i < 7; i++) {
    result.push(startDate.add(i, 'day'))
  }

  return result;
}

// const items = [
//   {
//     "player": "son",
//     "year": "1992"
//   },
//   {
//     "player": "lim",
//     "year": "1991"
//   }
// ];


export default TestSection;
