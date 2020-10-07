import React from "react";
import styled, { css } from "styled-components";
import { darken } from "polished";

const StyledButton = styled.button`
  width: 150px;
  height: 45px;
  font-size: 14px;
  outline: none;
  border: none;
  color: white;
  cursor: pointer;
  ${(props) => {
    const selected = props.theme.pallete[props.color];
    return css`
      background: ${selected};
      &:hover {
        background: ${darken(0.1, selected)};
      }
    `;
  }}
  ${(props) =>
    props.font === "black" &&
    css`
      color: black;
    `}
`;

function Buttons({ children, ...rest }) {
  return <StyledButton {...rest}>{children}</StyledButton>;
}
Buttons.defaultProps = {
  color: "yellow",
};
export default Buttons;
