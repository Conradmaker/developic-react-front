import React from "react";
import styled, {css} from "styled-components";

const Wheel = styled.div`
  position: absolute;
  height: 24px;
  width: 90px;
  border: 2px solid yellow;
  border-radius: 14px;
  transform: translateX(-18px);
  transition: all 0.3s ease-in-out;
  ${(props) =>
    props.vital &&
    css`
      transform: translateX(184px);
      border: 2px solid red;
    `}
`;
const Btn = styled.div`
  position: relative;
  width: 300px;
  height: 30px;
  background: #006064;
  border-radius: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 20px;
  box-sizing: border-box;
  color: #fff;
  cursor: pointer;
`;
export default function ToggleBtn({vital}) {
  return (
    <Btn>
      <span>판매가능</span>
      <span>판매불가</span>
      <Wheel vital={vital} />
    </Btn>
  );
}
