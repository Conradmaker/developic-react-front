import React from "react";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox} from "./ModalLayout";

export default function Addcart({close}) {
  return (
    <ModalLayout>
      <h1>장바구니에 추가되었습니다.</h1>
      <Gap />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          닫기
        </Buttons>
        <Buttons>장바구니 확인</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
