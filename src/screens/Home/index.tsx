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
    if (json !== "") {
      try {
        const parsedJson = JSON.parse(json);

        const header = Object.keys(parsedJson.items[0]).join(",");
        const body = parsedJson.items
          .map((j: any) => Object.values(j).join(","))
          .join("n");

        setCsv(`${header}\n${body}`);
      } catch (error) {
        console.log("error", error);
        alert("JSON inválido. Por favor, entre com um JSON válido.");
      }
    } else {
      alert("Campo vazio. Por favor, entre com um JSON antes de prosseguir.");
    }
  };

  const onClean = () => {
    setJson("");
    setCsv("");
  };

  return (
    <Container>
      <Input
        onChange={onChange}
        value={json}
        onConvert={onConvert}
        onClean={onClean}
      />
      {csv && <Output csv={csv} />}
    </Container>
  );
};

export default Home;
