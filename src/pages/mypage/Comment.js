import React from "react";
import {useState} from "react";
import Label from "../../components/common/Label";
import Delete from "../../components/modal/Delete";
import CommentListItem from "../../components/mypage/CommentListItem";
import {InfoContainer} from "./UserInfo";

export default function Comment({me}) {
  const [open, setOpen] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <InfoContainer>
        <Label>나의 댓글목록</Label>
        <InfoContainer>
          <CommentListItem setOpen={setOpen} setCommentId={setCommentId} />
          <CommentListItem />
        </InfoContainer>
      </InfoContainer>
      {open && (
        <Delete
          open={open}
          close={close}
          userId={me.id}
          commentId={commentId}
        />
      )}
    </>
  );
}
