import React from "react";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox, ModalInput} from "./ModalLayout";

export default function ChangeComment({open, close}) {
  return (
    <ModalLayout open={open}>
      <h1>댓글수정</h1>
      <Gap />
      <ModalInput />
      <Gap />
      <ModalBtnBox>
        <Buttons small color="black" onClick={close}>
          취소
        </Buttons>
        <Buttons small>수정</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
