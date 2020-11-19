export interface LK_ErrorMessage {
  message: string;
  stack: Array<LK_Error>;
}

export interface LK_Error {
  line: number;
  column: number;
  filename: string;
}
