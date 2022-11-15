import {injectable} from "inversify";
import {AxiosInstance, AxiosResponse} from "axios";
import {container} from "src/context/inversify/container";
import AxiosSupplier from "src/api/AxiosSupplier";
import {TYPES} from "src/context/inversify/types";
import {TimeDto} from "src/dtos/TimeDto";
import {store} from "src/context/redux/store";
import {WeekViewDto} from "src/dtos/WeekViewDto";
import {CreateTimeCommand} from "src/dtos/CreateTimeCommand";

@injectable()
class TimeApi {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = container.get<AxiosSupplier>(TYPES.AxiosSupplier).provide();
  }

  public async recordTime(createTimeCommand: CreateTimeCommand): Promise<TimeDto> {
    let state = store.getState();
    console.log("timeApi", state.sign.token)
    const axiosResponse: AxiosResponse = await this.axiosInstance.post<WeekViewDto>('/life-history/times',
      createTimeCommand,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });
    return axiosResponse.data;
  }
}

export default TimeApi;


