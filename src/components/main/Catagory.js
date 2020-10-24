import React from "react";
import styled, {css} from "styled-components";

const Box = styled.ul`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #707070;
  cursor: pointer;
  ${(props) => {
    return css`
      li:nth-child(${props.state + 1}) {
        border-bottom: 1px solid #707070;
      }
    `;
  }}
  li {
    padding: 5px 10px;
    box-sizing: border-box;
  }
  li:hover {
    border-bottom: 1px solid #707070;
  }
`;
const Container = styled.div`
  width: 100%;
  margin-bottom: 20px;
`;

export default function Catagory({changeCata, state}) {
  return (
    <Container>
      <Box state={state}>
        <li onClick={() => changeCata(0)}>ALL</li>
        <li onClick={() => changeCata(1)}>ANIMALS</li>
        <li onClick={() => changeCata(2)}>PEOPLE</li>
        <li onClick={() => changeCata(3)}>URBAN</li>
        <li onClick={() => changeCata(4)}>NATURE</li>
        <li onClick={() => changeCata(5)}>ETC</li>
      </Box>
    </Container>
  );
}
