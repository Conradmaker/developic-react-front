import React from "react";
import Label from "../../components/common/Label";
import {
  BuyItemBox,
  BuyItemContainer,
  Summary,
} from "../../components/mypage/BuyItem";
import SaleItemBox from "../../components/mypage/SaleItemBox";
import {InfoContainer} from "./UserInfo";

export default function SaleList() {
  return (
    <InfoContainer>
      <Label>판매내역</Label>
      <BuyItemContainer>
        <BuyItemBox small />
        <BuyItemBox small>
          <Summary>
            <h3>TOTAL EARNED</h3>
            <em>10,231,000</em>
          </Summary>
          <Summary>
            <h3>TOTAL COUNT</h3>
            <h3>13</h3>
          </Summary>
        </BuyItemBox>
      </BuyItemContainer>
      <BuyItemContainer>
        <SaleItemBox />
        <SaleItemBox />
        <SaleItemBox />
      </BuyItemContainer>
    </InfoContainer>
  );
}
