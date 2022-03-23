import { JsonToCsv } from "./types";

export const jsonToCsv: JsonToCsv = (json) => {
  if (json !== "") {
    try {
      const parsedJson = JSON.parse(json);
      console.log("parsedJson", parsedJson);
      const header = Object.keys(parsedJson.items[0]).join(",");
      console.log("header", header);

      const body = parsedJson.items
        .map((j: any) => Object.values(j).join(","))
        .join("n");
      console.log("body", body);

      return `${header}\n${body}`;
    } catch (e) {
      return;
    }
  } else {
    return;
  }
};
