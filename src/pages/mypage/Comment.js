import React from "react";
import Label from "../../components/common/Label";
import CommentListItem from "../../components/mypage/CommentListItem";
import {InfoContainer} from "./UserInfo";

export default function Comment() {
  return (
    <InfoContainer>
      <Label>나의 댓글목록</Label>
      <InfoContainer>
        <CommentListItem />
        <CommentListItem />
        <CommentListItem />
        <CommentListItem />
        <CommentListItem />
      </InfoContainer>
    </InfoContainer>
  );
}
