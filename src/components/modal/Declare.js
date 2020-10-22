import React from "react";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox, ModalInput} from "./ModalLayout";

export default function Declare({open, close}) {
  return (
    <ModalLayout open={open}>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h1>🚔 신고하시겠습니까?</h1>
      <Gap />
      <ModalInput />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" small onClick={close}>
          취소
        </Buttons>
        <Buttons color="pink" small>
          신고
        </Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
