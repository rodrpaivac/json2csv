import styled from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.button<ContainerProps>`
  padding: 0px 40px;
  display: flex;
  justify-content: center;
  align-items: center;

  border-radius: 20px;
  background: ${({ background }) => background};
  margin: 20px;
`;

export const Label = styled.p`
  color: #111;
  font-weight: bold;
`;
