export type JsonToCsv = (json: string) =>
  | {
      header: string;
      body: string;
    }
  | undefined;
