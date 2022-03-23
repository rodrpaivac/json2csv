import React from "react";
import { Props } from "./types";

import { Container, Header, TextOutput, Title } from "./styles";

const Output: React.FC<Props> = ({ csv }) => {
  return (
    <Container>
      <Header>
        <Title>O CSV é:</Title>
      </Header>

      <TextOutput value={csv} disabled />
    </Container>
  );
};

export default Output;
