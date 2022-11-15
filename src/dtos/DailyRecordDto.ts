import {TimeDto} from "src/dtos/TimeDto";
import {TodoDto} from "src/dtos/TodoDto";

export interface DailyRecordDto {
  times: TimeDto[],
  todos: TodoDto[]
}
