import React from "react";
import styled from "styled-components";

const Text = styled.div`
  font-size: 20px;
  line-height: 1.5;
  border-bottom: 2px solid #ffca3e;
  width: 50px;
  font-size: 25px;
  margin-bottom: 20px;
`;
export default function Label({ children }) {
  return <Text>{children}</Text>;
}
