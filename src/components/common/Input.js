import React from "react";
import styled, { css } from "styled-components";

export const InputBox = styled.div`
  height: 45px;
  display: flex;
  align-items: center;
  width: 400px;
  label {
    font-size: 19px;
    font-weight: bold;
    flex: 1;
  }
  input {
    font-size: 18px;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
    flex: 3;
    transition: all 0.3s ease;
    box-sizing: border-box;
    &:focus {
      border-bottom: 2px solid black;
      flex: 4;
    }
  }
  ${(props) =>
    props.long &&
    css`
      input:focus & {
        width: 350px;
      }
    `}
`;
export default function Input() {
  return (
    <InputBox>
      <label>ID</label>
      <input type="text" />
    </InputBox>
  );
}
