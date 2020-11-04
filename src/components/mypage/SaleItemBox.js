import React from "react";
import Buttons from "../common/Buttons";
import {BuyImgBox, BuyItemBox, Summary} from "./BuyItem";
import IMG from "../../assets/img/avatarsample.png";

export default function SaleItemBox() {
  return (
    <BuyItemBox>
      <BuyImgBox>
        <img src={IMG} alt="" />
      </BuyImgBox>
      <Summary>
        <h2>STEELHEAD AND SPINES IN ALASKA</h2>
        <div>
          <Buttons color="yellow">상태수정</Buttons>
          <span>FOR CONRAD</span>
        </div>
        <p>
          <span>9,000,000</span>
          <small>2020-10-04</small>
        </p>
      </Summary>
    </BuyItemBox>
  );
}
