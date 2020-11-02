import React from "react";
import Buttons from "../../components/common/Buttons";
import Label from "../../components/common/Label";
import {
  BuyImgBox,
  BuyItemBox,
  BuyItemContainer,
  Summary,
} from "../../components/mypage/BuyItem";
import CartItem from "../../components/mypage/CartItem";
import {InfoContainer} from "./UserInfo";

export default function Cart() {
  return (
    <InfoContainer>
      <Label>장바구니 리스트</Label>
      <CartItem />
      <CartItem />
      <CartItem />
      <BuyItemContainer>
        <BuyItemBox small />
        <BuyItemBox small>
          <BuyImgBox>
            <Buttons small color="black">
              선택취소
            </Buttons>
            <Buttons small>선택구매</Buttons>
          </BuyImgBox>
          <Summary>
            <h3>TOTAL</h3>
            <em>10,231,000</em>
          </Summary>
        </BuyItemBox>
      </BuyItemContainer>
    </InfoContainer>
  );
}
