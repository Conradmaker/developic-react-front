import React from "react";
import styled from "styled-components";

const Btn = styled.button`
  width: 70px;
  height: 70px;
  border-radius: 35px;
  background: #006064;
  outline: none;
  border: none;
  display: flex;
  align-items: center;
  justify-content: center;
  position: fixed;
  bottom: 50px;
  right: 74px;
  color: #fff;
  font-size: 20px;
  box-shadow: 0 5px 10px #006064;
  transition: all 0.3s ease;
  cursor: pointer;
  &:hover {
    width: 90px;
    height: 90px;
    border-radius: 45px;
    bottom: 40px;
    right: 64px;
  }
`;

export default function Topbtn({ children }) {
  return <Btn>{children}</Btn>;
}
