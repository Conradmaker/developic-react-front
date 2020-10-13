import React from "react";
import styled from "styled-components";
import BANNER1 from "../../assets/img/banner1.png";
import BTN from "../common/Buttons";

export const BannerBox = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 350px;
  background-image: url(${BANNER1});
  background-size: contain;
  background-position: 55px 0;
  background-repeat: no-repeat;
  position: relative;
`;
const BtnBox = styled.div`
  display: flex;
  position: absolute;
  bottom: 45px;
  right: 100px;
`;

export default function Banner() {
  return (
    <>
      <BannerBox>
        <BtnBox>
          <BTN color="pink">PROFILE</BTN>
          <BTN color="pink" outline>
            PROFILE
          </BTN>
        </BtnBox>
      </BannerBox>
    </>
  );
}
