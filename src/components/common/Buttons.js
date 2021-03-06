import React from "react";
import styled, {css} from "styled-components";
import {darken} from "polished";

const StyledButton = styled.button`
  width: 150px;
  height: 45px;
  font-size: 14px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  ${(props) => {
    const selected = props.theme.pallete[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${darken(0.1, selected)};
      }
      ${(props) =>
        props.outline &&
        css`
          color: ${selected};
          background: none;
          border: 2px solid ${selected};
          &:hover {
            background: ${selected};
            color: white;
          }
          ${(props) =>
            props.inner &&
            css`
              color: #fff;
              border: 2px solid #fff;
              &:hover {
                background: none;
                font-weight: bold;
                color: #e5e5e5;
                border: 2px solid #e5e5e5;
              }
            `}
        `}
    `;
  }}
  ${(props) =>
    props.font === "black" &&
    css`
      color: black;
      font-weight: bold;
    `}
    & + & {
    margin-left: 1rem;
  }
  ${(props) =>
    props.small &&
    css`
      width: 120px;
      height: 45px;
    `}
  & + & {
    margin-left: 1rem;
  }
`;

function Buttons({children, type, ...rest}) {
  return (
    <StyledButton type={type} {...rest}>
      {children}
    </StyledButton>
  );
}
Buttons.defaultProps = {
  color: "yellow",
};
export default Buttons;
