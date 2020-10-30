import React from "react";
import {useDispatch} from "react-redux";
import useInput from "../../hooks/useInput";
import {CHANGE_COMMENT_REQUEST} from "../../reducer/comment";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox, ModalInput} from "./ModalLayout";

export default function ChangeComment({open, close, userId, commentId}) {
  const [content, onChangeContent] = useInput("");
  const dispatch = useDispatch();
  const onChange = () => {
    dispatch({
      type: CHANGE_COMMENT_REQUEST,
      data: {userId, commentId, content},
    });
    close();
  };
  return (
    <ModalLayout open={open}>
      <h1>댓글수정</h1>
      <Gap />
      <ModalInput onChange={onChangeContent} />
      <Gap />
      <ModalBtnBox>
        <Buttons small color="black" onClick={close}>
          취소
        </Buttons>
        <Buttons onClick={onChange} small>
          수정
        </Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
