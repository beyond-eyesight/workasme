import {injectable} from "inversify";
import {AxiosInstance, AxiosResponse} from "axios";
import {container} from "src/context/inversify/container";
import AxiosSupplier from "src/api/AxiosSupplier";
import {TYPES} from "src/context/inversify/types";
import {WeekViewDto} from "src/dtos/WeekViewDto";
import {store} from "src/context/redux/store";

@injectable()
class WeekViewApi {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = container.get<AxiosSupplier>(TYPES.AxiosSupplier).provide();
  }

  public async getWeekView(date: string, time: string): Promise<WeekViewDto> {
    let state = store.getState();

    const axiosResponse: AxiosResponse = await this.axiosInstance.get<WeekViewDto>('/life-history/workasme/week-view',
      {
        params:
          {startDate: date, standardTime: time},
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });


    return {
      dailyRecords: new Map(Object.entries(axiosResponse.data.dailyRecords)),
      edgeTime: axiosResponse.data.edgeTime !== null ? axiosResponse.data.edgeTime : undefined
    };

  }
}

export default WeekViewApi;
