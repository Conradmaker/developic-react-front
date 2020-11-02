import React from "react";
import Label from "../../components/common/Label";
import LikeItem, {ItemContainer} from "../../components/mypage/LikeItem";
import {InfoContainer} from "./UserInfo";

export default function LikeList() {
  return (
    <InfoContainer>
      <Label>좋아요 목록</Label>
      <ItemContainer>
        <LikeItem></LikeItem>
      </ItemContainer>
    </InfoContainer>
  );
}
