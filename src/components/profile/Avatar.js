import React from "react";
import IMG from "../../assets/img/avatarsample.png";
import styled from "styled-components";

const ImgBox = styled.div`
  width: 230px;
  height: 230px;
  border-radius: 115px;
  overflow: hidden;
  img {
    width: 100%;
  }
`;

export default function Avatar() {
  return (
    <ImgBox>
      <img src={IMG} alt="avatar" />
    </ImgBox>
  );
}
