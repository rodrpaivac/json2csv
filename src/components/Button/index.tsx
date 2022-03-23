import React from "react";

import { Container, Label } from "./styles";
import { Props } from "./types";

const Button: React.FC<Props> = ({ onClick }) => {
  return (
    <Container onClick={onClick}>
      <Label>Converter para CSV</Label>
    </Container>
  );
};

export default Button;
