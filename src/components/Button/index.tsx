import React from "react";

import { Container, Label } from "./styles";
import { Props } from "./types";

const Button: React.FC<Props> = ({ onClick, background, label }) => {
  return (
    <Container background={background} onClick={onClick}>
      <Label>{label}</Label>
    </Container>
  );
};

export default Button;
