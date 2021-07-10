//todo: 나중에는 ExpectedTime을 ExpectedWork로 바꾸자

export interface TimeSnippet {
  columnNumber: number;
  expectedActivity: string;
  expectedTime: string;
  acutualActivity: string;
  actuaTime: string;
  timeCategory: string;
}

export enum TimeCategory {
  ETC = "ETC"
}
