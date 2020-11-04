import React from "react";
import Buttons from "../../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox} from "../ModalLayout";

export default function DeleteLike({open, close}) {
  return (
    <ModalLayout open={open}>
      <h1>좋아요를 취소 하시겠습니까?</h1>
      <Gap />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          닫기
        </Buttons>
        <Buttons>확인</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
