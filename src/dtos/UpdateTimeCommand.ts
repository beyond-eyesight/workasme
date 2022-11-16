export interface UpdateTimeCommand {
  readonly title: string;
  readonly startDateTime: string;
  readonly endDateTime: string;
  readonly isGood: boolean;
  //todo: to enum
  readonly category: string;
  readonly memo: string | undefined;
}
