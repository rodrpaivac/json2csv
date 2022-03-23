import React from "react";
import Button from "../Button";
import { ButtonContainer, Container, Header, TextInput, Title } from "./styles";
import { Props } from "./types";

const Input: React.FC<Props> = ({ onChange, value, onConvert, onClean }) => {
  const example = `[
    {
      "id": 1,
      "name": "Roberta",
      "age": 28,
      "occupation": "Software Developer"
    },
    {
      "id": 2,
      "name": "Luis",
      "age": 20,
      "occupation": "College Student"
    }
  ]`;

  return (
    <Container>
      <Header>
        <Title>Entre com o JSON abaixo:</Title>
      </Header>
      <TextInput
        placeholder={`Exemplo:\n${example}`}
        value={value}
        onChange={(e) => {
          onChange(e.target.value);
        }}
      />
      <ButtonContainer>
        <Button label="LIMPAR" background="#CE6352" onClick={() => onClean()} />
        <Button
          label="CONVERTER"
          background="#81C7BB"
          onClick={() => onConvert()}
        />
      </ButtonContainer>
    </Container>
  );
};

export default Input;
