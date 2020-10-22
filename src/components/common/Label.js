import React from "react";
import styled from "styled-components";

const Text = styled.div`
  height: 35px;
  font-size: 20px;
  line-height: 1.5;
  font-size: 25px;
  margin-bottom: 20px;
  position: relative;
  em {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 60px;
    height: 2px;
    background: #ffca3e;
  }
`;
export default function Label({children}) {
  return (
    <Text>
      {children}
      <em />
    </Text>
  );
}
