import styled from "styled-components";
import { ContainerProps } from "./types";

export const Container = styled.button<ContainerProps>`
  padding: 5px 12vw;
  display: flex;
  justify-content: center;
  align-items: center;
  box-shadow: 2px 1px 5px #bababa;
  border-radius: 30px;
  background: ${({ background }) => background};
`;

export const Label = styled.p`
  color: #101010;
  font-family: Poppins-Bold;
  font-size: 12px;
`;
