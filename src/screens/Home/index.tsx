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
    setCsv(json);
  };

  return (
    <Container>
      <Input onChange={onChange} value={json} onConvert={onConvert} />
      {csv && <Output csv={csv} />}
    </Container>
  );
};

export default Home;
