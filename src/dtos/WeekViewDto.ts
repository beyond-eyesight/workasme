import {TimeDto} from "src/dtos/TimeDto";
import {DailyRecordDto} from "src/dtos/DailyRecordDto";


export interface WeekViewDto {
  dailyRecords: Map<string, DailyRecordDto>
  edgeTime: TimeDto | undefined
}


