import React from "react";
import {Link} from "react-router-dom";
import styled from "styled-components";
import BANNER1 from "../../assets/img/banner1.png";
import BTN from "../common/Buttons";

export const BannerBox = styled.div`
  margin: 30px 0;
  width: 100%;
  height: 400px;
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
  a + a {
    margin-left: 20px;
  }
`;

export default function Banner({me}) {
  return (
    <>
      <BannerBox>
        <BtnBox>
          {me ? (
            <>
              <Link to={`/profile/${me.id}`}>
                <BTN color="pink">PROFILE</BTN>
              </Link>
              <Link to="/edit">
                <BTN color="pink" outline>
                  EDIT
                </BTN>
              </Link>
            </>
          ) : (
            <>
              <Link to="/login/2">
                <BTN color="pink">LOGIN</BTN>
              </Link>
              <Link to="/login/1">
                <BTN color="pink" outline>
                  SIGNUP
                </BTN>
              </Link>
            </>
          )}
        </BtnBox>
      </BannerBox>
    </>
  );
}
