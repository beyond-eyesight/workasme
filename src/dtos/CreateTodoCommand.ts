export interface CreateTodoCommand {
  readonly isFinished: boolean;
  readonly date: string;
  readonly content: string;
}
