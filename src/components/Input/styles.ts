import styled from "styled-components";

export const Container = styled.div`
  padding: 2vw;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TextInput = styled.textarea`
  background: #f2f2f2;
  width: 90vw;
  height: 20vh;
  border-radius: 10px;
  color: #111;
  resize: none;
  padding: 10px;
  overflow: auto;

  font-family: Poppins-Regular;
  font-size: 12px;
  border: 1px solid #222;
`;

export const Header = styled.div`
  width: 100vw;
`;

export const Title = styled.p`
  color: #111;
  padding-left: 3vw;
  font-family: Poppins-Light;
  font-size: 18px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  width: 70vw;
  padding: 5vw 0px;
`;
