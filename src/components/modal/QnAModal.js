import React from "react";
import Buttons from "../common/Buttons";
import Label from "../common/Label";
import ModalLayout, {Gap, Info, ModalBtnBox, ModalInput} from "./ModalLayout";

export default function QnAModal() {
  return (
    <ModalLayout>
      <Label>1:1 Q&A</Label>
      <Gap />
      <h1>제목</h1>
      <ModalInput />
      <Gap />
      <h1>내용</h1>
      <textarea></textarea>
      <Info>운영시간: AM 10:00 ~ PM 12:00 / PM 1:00 ~ PM 5:00</Info>
      <Gap />
      <ModalBtnBox>
        <Buttons color="black">닫기</Buttons>
        <Buttons font="black">등록</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
