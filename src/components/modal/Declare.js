import React from "react";
import {useDispatch} from "react-redux";
import useInput from "../../hooks/useInput";
import {DECLARE_COMMENT_REQUEST} from "../../reducer/comment";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox, ModalInput} from "./ModalLayout";

export default function Declare({
  open,
  close,
  userId,
  commentId,
  alreadyDeclare,
}) {
  const dispatch = useDispatch();
  const [reason, onChangeReason] = useInput("");
  const onDeclare = () => {
    if (alreadyDeclare) {
      alert("바로 신고할 수 없습니다.");
      return close();
    }
    if (reason === "") {
      return alert("사유를 적어주세요.");
    }
    dispatch({
      type: DECLARE_COMMENT_REQUEST,
      data: {userId, commentId, reason},
    });
  };
  return (
    <ModalLayout open={open}>
      {/* eslint-disable-next-line jsx-a11y/accessible-emoji */}
      <h1>🚔 신고하시겠습니까?</h1>
      <Gap />
      <ModalInput onChange={onChangeReason} />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" small onClick={close}>
          취소
        </Buttons>
        <Buttons onClick={onDeclare} color="pink" small>
          신고
        </Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
