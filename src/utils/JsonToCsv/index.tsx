import { JsonToCsv } from "./types";

export const jsonToCsv: JsonToCsv = (json, setObj = () => {}) => {
  if (json !== "") {
    try {
      const parsedJson = JSON.parse(json);
      setObj(parsedJson);
      const obj = { count: 2, items: parsedJson };

      const header = Object.keys(obj.items[0]).join(",");

      const body = obj.items
        .map((element: any) => Object.values(element).join(","))
        .join("n");

      return { header, body };
    } catch (e) {
      console.log("error", e);
      return;
    }
  } else {
    return;
  }
};
