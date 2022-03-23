import React from "react";
import Button from "../Button";
import { Container, TextInput, Title } from "./styles";
import { Props } from "./types";

const Input: React.FC<Props> = ({ onChange, value, onConvert, onClean }) => {
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
      <Button
        label="Converter"
        background="#629bc4"
        onClick={() => onConvert()}
      />
      <Button label="Limpar" background="#c4626f" onClick={() => onClean()} />
    </Container>
  );
};

export default Input;
