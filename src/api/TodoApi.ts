import {injectable} from "inversify";
import {AxiosInstance, AxiosResponse} from "axios";
import {container} from "src/context/inversify/container";
import AxiosSupplier from "src/api/AxiosSupplier";
import {TYPES} from "src/context/inversify/types";
import {TodoDto} from "src/dtos/TodoDto";
import {store} from "src/context/redux/store";
import {WeekViewDto} from "src/dtos/WeekViewDto";
import {CreateTodoCommand} from "src/dtos/CreateTodoCommand";
import {UpdateTodoFinishedCommand} from "src/dtos/UpdateTodoFinishedCommand";

@injectable()
class TodoApi {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = container.get<AxiosSupplier>(TYPES.AxiosSupplier).provide();
  }

  public async recordTodo(createTodoCommand: CreateTodoCommand): Promise<TodoDto> {
    let state = store.getState();
    const axiosResponse: AxiosResponse = await this.axiosInstance.post<WeekViewDto>('/life-history/todos',
      createTodoCommand,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });
    return axiosResponse.data;
  }

  async updateContent(id: number, content: string): Promise<TodoDto> {
    let state = store.getState();
    const axiosResponse: AxiosResponse = await this.axiosInstance.patch<WeekViewDto>(`/life-history/todos/${id}/content`,
      content,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token,
          "Content-Type": "text/plain"
        }
      });
    return axiosResponse.data;
  }

  async updateFinished(id: number, updateTodoFinishedCommand: UpdateTodoFinishedCommand): Promise<TodoDto> {
    let state = store.getState();
    const axiosResponse: AxiosResponse = await this.axiosInstance.patch<WeekViewDto>(`/life-history/todos/${id}/finished`,
      updateTodoFinishedCommand,
      {
        headers: {
          "Authorization": "Bearer " + state.sign.token
        }
      });
    return axiosResponse.data;
  }
}

export default TodoApi;
