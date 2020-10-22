import React from "react";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox, ModalInput} from "./ModalLayout";

export default function Declare() {
  return (
    <ModalLayout>
      <h1>🚔 신고하시겠습니까?</h1>
      <Gap />
      <ModalInput />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" small>
          취소
        </Buttons>
        <Buttons color="pink" small>
          신고
        </Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
