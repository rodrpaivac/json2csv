import React from "react";
import Button from "../Button";
import { ButtonContainer, Container, Header, TextInput, Title } from "./styles";
import { Props } from "./types";

const Input: React.FC<Props> = ({ onChange, value, onConvert, onClean }) => {
  return (
    <Container>
      <Header>
        <Title>Entre com o JSON abaixo:</Title>
      </Header>
      <TextInput
        placeholder="Digite aqui o JSON"
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
