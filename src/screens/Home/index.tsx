import React, { useState } from "react";
import Input from "../../components/Input";
import Output from "../../components/Output";

import { Container } from "./styles";

const Home: React.FC = () => {
  const [json, setJson] = useState<string>("");
  const [csv, setCsv] = useState<string>("");

  const onChange = (text: string) => {
    setJson(text);
  };

  const onConvert = () => {
    // e.preventDefault();
    const parsedJson = JSON.parse(json);
    console.log("parsedJson", parsedJson);
    // if (
    //   !Array.isArray(parsedJson) ||
    //   !parsedJson.every((p) => typeof p === "object" && p !== null)
    // ) {
    //   console.log("return");
    //   return;
    // }

    const heading = Object.keys(parsedJson.items[0]).join(",");
    const body = parsedJson.items
      .map((j: any) => Object.values(j).join(","))
      .join("n");

    console.log("header", heading);
    console.log("body", body);

    setCsv(`${heading}\n${body}`);
  };

  return (
    <Container>
      <Input onChange={onChange} value={json} onConvert={onConvert} />
      {csv && <Output csv={csv} />}
    </Container>
  );
};

export default Home;
