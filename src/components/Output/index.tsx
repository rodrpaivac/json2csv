import React from "react";
import { Props } from "./types";

import { Container, TextOutput, Title } from "./styles";

const Output: React.FC<Props> = ({ csv }) => {
  return (
    <Container>
      <Title>O CSV é:</Title>
      <TextOutput value={csv} disabled />
    </Container>
  );
};

export default Output;
