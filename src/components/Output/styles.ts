import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;

export const TextOutput = styled.textarea`
  background: #f2f2f2;
  width: 80vw;
  height: 40vh;
  border-radius: 10px;
  color: #111;
  resize: none;
  padding: 10px;
  overflow: auto;

  font-family: Poppins-Regular;
  font-size: 12px;
  border: 3px dashed #444;
  margin-bottom: 50px;
`;

export const Header = styled.div`
  width: 100vw;
`;

export const Title = styled.p`
  color: #111;
  padding-left: 6vw;
  font-family: Poppins-Regular;
  font-size: 18px;
`;

export const TableContainer = styled.table`
  width: 85vw;
  margin-bottom: 50px;
`;

export const Th = styled.th`
  background: #82c6bb;
  border-radius: 5px;
  padding: 5px;
`;

export const Tr = styled.tr``;

export const Td = styled.td`
  border: 2px solid #82c6bb;
  border-radius: 5px;
  padding: 5px;
`;

export const TableTitle = styled.p`
  color: #111;
  font-family: Poppins-SemiBold;
  font-size: 14px;
`;

export const TableValue = styled.p`
  color: #111;
  font-family: Poppins-Regular;
  font-size: 14px;
`;
