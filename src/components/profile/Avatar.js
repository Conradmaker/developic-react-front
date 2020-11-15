import React from "react";
import styled, {css} from "styled-components";

const ImgBox = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 115px;
  overflow: hidden;
  img {
    width: 100%;
  }
  ${(props) =>
    props.small &&
    css`
      width: 40px;
      height: 40px;
      border-radius: 20px;
    `}
`;

export default function Avatar({src, ...rest}) {
  return (
    <ImgBox {...rest}>
      <img src={`http://localhost:3030/${src}`} alt="avatar" />
    </ImgBox>
  );
}
