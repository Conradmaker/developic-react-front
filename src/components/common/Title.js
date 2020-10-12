import React from "react";
import styled from "styled-components";

const Box = styled.div`
  width: 60px;
  height: 60px;
  background: #ffca3e;
  position: relative;
  margin: 20px 0;
  h5 {
    height: 60px;
    position: absolute;
    font-size: 27px;
    font-weight: bold;
    display: flex;
    align-items: center;
    left: 30px;
  }
`;

export default function Title({ children }) {
  return (
    <Box>
      <h5>{children}</h5>
    </Box>
  );
}
