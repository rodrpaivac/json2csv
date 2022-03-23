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
  border: 1px solid #111;
`;

export const Th = styled.th`
  border: 1px solid #555;
`;

export const Tr = styled.tr`
  border: 1px solid #555;
`;

export const Td = styled.td`
  border: 1px solid #555;
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
