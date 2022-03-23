export type JsonToCsv = (
  json: string,
  setObj?: (array: string[]) => void
) =>
  | {
      header: string;
      body: string;
    }
  | undefined;
