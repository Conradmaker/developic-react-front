import React from "react";
import styled from "styled-components";

const Box = styled.ul`
  width: 50%;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-evenly;
  color: #707070;
  cursor: pointer;

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

export default function Catagory() {
  return (
    <Container>
      <Box>
        <li>ALL</li>
        <li>ANIMALS</li>
        <li>PEOPLE</li>
        <li>URBAN</li>
        <li>NATURE</li>
        <li>ETC</li>
      </Box>
    </Container>
  );
}
