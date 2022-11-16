import {injectable} from "inversify";
import {AxiosInstance, AxiosResponse} from "axios";
import {container} from "src/context/inversify/container";
import AxiosSupplier from "src/api/AxiosSupplier";
import {TYPES} from "src/context/inversify/types";
import {TimeDto} from "src/dtos/TimeDto";
import {store} from "src/context/redux/store";
import {WeekViewDto} from "src/dtos/WeekViewDto";
import {CreateTimeCommand} from "src/dtos/CreateTimeCommand";
import {UpdateTimeCommand} from "src/dtos/UpdateTimeCommand";

@injectable()
class TimeApi {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = container.get<AxiosSupplier>(TYPES.AxiosSupplier).provide();
  }

  public async recordTime(createTimeCommand: CreateTimeCommand): Promise<TimeDto> {
    let state = store.getState();
    const axiosResponse: AxiosResponse = await this.axiosInstance.post<WeekViewDto>('/life-history/times',
      createTimeCommand,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });
    return axiosResponse.data;
  }

  public async updateTime(id: number, updateTimeCommand: UpdateTimeCommand): Promise<TimeDto> {
    let state = store.getState();
    const axiosResponse: AxiosResponse = await this.axiosInstance.put<WeekViewDto>(`/life-history/times/${id}`,
      updateTimeCommand,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });
    return axiosResponse.data;
  }

  async deleteTime(id: number) {
    let state = store.getState();
    await this.axiosInstance.delete<WeekViewDto>(`/life-history/times/${id}`,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });
  }
}

export default TimeApi;


