import React from "react";
import IMG from "../../assets/img/avatarsample.png";
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

export default function Avatar({...rest}) {
  return (
    <ImgBox {...rest}>
      <img src={IMG} alt="avatar" />
    </ImgBox>
  );
}
