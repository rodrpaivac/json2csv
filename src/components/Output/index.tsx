import React, { useEffect, useState } from "react";
import { Props, TableProps } from "./types";

import {
  Container,
  Header,
  TableContainer,
  Th,
  Tr,
  TextOutput,
  Title,
  Td,
} from "./styles";

const Output: React.FC<Props> = ({ csv, header, body, obj }) => {
  return (
    <Container>
      <Header>
        <Title>O CSV é:</Title>
      </Header>

      <TextOutput value={csv} disabled />
      <Table obj={obj} />
    </Container>
  );
};

const Table: React.FC<TableProps> = ({ obj }) => {
  const [header, setHeader] = useState<string[]>([]);
  const [body, setBody] = useState<string[][]>([]);
  useEffect(() => {
    console.log("OBJ", obj);
    const tempHeader = Object.keys(obj[0]);
    setHeader(tempHeader);
    const tempBody: string[][] = obj.map((j: any) => Object.values(j));
    setBody(tempBody);
    console.log("tempBody", tempBody); // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <>
      <TableContainer>
        <thead>
          {header.map((element, index) => (
            <Th>{element}</Th>
          ))}
        </thead>
        <tbody>
          {body.map((element) => {
            return (
              <Tr>
                {element.map((item) => (
                  <Td>{item}</Td>
                ))}
              </Tr>
            );
          })}
        </tbody>
      </TableContainer>
    </>
  );
};
export default Output;
