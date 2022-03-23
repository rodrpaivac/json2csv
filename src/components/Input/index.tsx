import React from "react";
import Button from "../Button";
import { Container, TextInput, Title } from "./styles";
import { Props } from "./types";

const Input: React.FC<Props> = ({ onChange, value, onConvert }) => {
  return (
    <Container>
      <Title>Entre com o JSON abaixo:</Title>
      <TextInput
        placeholder="Digite aqui o JSON"
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <Button onClick={() => onConvert()} />
    </Container>
  );
};

export default Input;
