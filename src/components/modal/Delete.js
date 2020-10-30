import React from "react";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox} from "./ModalLayout";

export default function Delete({open, close, userId, commentId}) {
  return (
    <ModalLayout open={open}>
      <h1>삭제하시겠습니까?</h1>
      <Gap />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          취소
        </Buttons>
        <Buttons>삭제</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
