import React, { useState } from "react";
import Input from "../../components/Input";
import Output from "../../components/Output";
import { jsonToCsv } from "../../utils/JsonToCsv";

import { Container, Header, Title } from "./styles";

const Home: React.FC = () => {
  const [json, setJson] = useState<string>("");
  const [csv, setCsv] = useState<string>("");

  const [obj, setObj] = useState<string[]>([]);

  const [header, setHeader] = useState<string>("");
  const [body, setBody] = useState<string>("");

  const onChange = (text: string) => {
    setJson(text);
  };

  const onConvert = () => {
    if (json !== "") {
      const response = jsonToCsv(json, setObj);
      if (response) {
        setHeader(response.header);
        setBody(response.body);
        setCsv(`${response.header}\n${response.body}`);
      } else {
        setCsv("");
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
      <Header>
        <Title>Conversor de JSON para CSV</Title>
      </Header>
      <Input
        onChange={onChange}
        value={json}
        onConvert={onConvert}
        onClean={onClean}
      />
      {csv && <Output csv={csv} header={header} body={body} obj={obj} />}
    </Container>
  );
};

export default Home;
