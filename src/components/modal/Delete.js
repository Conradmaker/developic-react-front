import React from "react";
import {useDispatch} from "react-redux";
import {DELETE_COMMENT_REQUEST} from "../../reducer/comment";
import Buttons from "../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox} from "./ModalLayout";

export default function Delete({open, close, userId, commentId}) {
  const dispatch = useDispatch();
  const onDelete = () => {
    dispatch({type: DELETE_COMMENT_REQUEST, data: {userId, commentId}});
  };
  return (
    <ModalLayout open={open}>
      <h1>삭제하시겠습니까?</h1>
      <Gap />
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          취소
        </Buttons>
        <Buttons onClick={onDelete}>삭제</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
