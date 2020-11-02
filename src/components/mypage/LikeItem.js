import React from "react";
import styled from "styled-components";
import IMG from "../../assets/img/avatarsample.png";
import {FaRegTimesCircle} from "react-icons/fa";
const Summary = styled.div`
  flex: 1;
  padding: 10px 0;
  font-weight: bold;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    span {
      font-size: 14px;
      color: #999;
      &::before {
        content: "BY ";
      }
    }
    i {
      font-size: 19px;
      color: orangered;
    }
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  img {
    max-width: 97%;
    max-height: 97%;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 10px gray;
    }
  }
`;
const ItemBox = styled.div`
  width: 30%;
  height: 250px;

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;
export default function LikeItem() {
  return (
    <>
      <ItemBox>
        <ImgBox>
          <img src={IMG} alt="" />
        </ImgBox>
        <Summary>
          <h2>STEELHEAD AND SPINES IN</h2>
          <div>
            <span>CONRAD</span>
            <i>
              <FaRegTimesCircle />
            </i>
          </div>
        </Summary>
      </ItemBox>
    </>
  );
}
