//todo: 나중에는 ExpectedTime을 ExpectedWork로 바꾸자

export interface TimeSnippet {
  expectedActivity: string;
  expectedTime: string;
  actualActivity: string;
  actualTime: string;
  timeCategory: string;
}

export enum TimeCategory {
  ETC = "ETC"
}
