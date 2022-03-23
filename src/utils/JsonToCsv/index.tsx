import { JsonToCsv } from "./types";

export const jsonToCsv: JsonToCsv = (json) => {
  if (json !== "") {
    try {
      const parsedJson = JSON.parse(json);
      const obj = { count: 2, items: parsedJson };

      console.log("parsedJson", parsedJson);
      const header = Object.keys(obj.items[0]).join(",");
      console.log("header", header);

      const body = obj.items
        .map((j: any) => Object.values(j).join(","))
        .join("n");
      console.log("body", body);

      return { header, body };
    } catch (e) {
      return;
    }
  } else {
    return;
  }
};
