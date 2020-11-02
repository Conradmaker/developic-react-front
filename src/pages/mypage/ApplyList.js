import React from "react";
import Apply from "../../components/about/Apply";
import Label from "../../components/common/Label";
import {InfoContainer} from "./UserInfo";

export default function ApplyList() {
  return (
    <InfoContainer>
      <Label>작가신청조회</Label>
      <Apply />
    </InfoContainer>
  );
}
