import React from "react";
import Label from "../../components/common/Label";
import BuyItem, {
  BuyImgBox,
  BuyItemBox,
  BuyItemContainer,
  Summary,
} from "../../components/mypage/BuyItem";
import {InfoContainer} from "./UserInfo";

export default function BuyList() {
  return (
    <InfoContainer>
      <Label>구매내역</Label>
      <BuyItemContainer>
        <BuyItem />
        <BuyItem />
        <BuyItem />
        <BuyItem />
      </BuyItemContainer>
      <BuyItemContainer>
        <BuyItemBox small />
        <BuyItemBox small>
          <BuyImgBox />
          <Summary>
            <h3>TOTAL</h3>
            <em>10,231,000 ₩</em>
          </Summary>
        </BuyItemBox>
      </BuyItemContainer>
    </InfoContainer>
  );
}
