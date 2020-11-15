import React, {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import Label from "../../components/common/Label";
import Delete from "../../components/modal/Delete";
import CommentListItem from "../../components/mypage/CommentListItem";
import {LOAD_COMMENT_LIST_REQUEST} from "../../reducer/mypage";
import {InfoContainer} from "./UserInfo";

export default function Comment({me}) {
  const dispatch = useDispatch();
  const {loadCommentListSuccess: Comments} = useSelector(
    (state) => state.mypage
  );
  const [open, setOpen] = useState(false);
  const [commentId, setCommentId] = useState(null);
  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch({type: LOAD_COMMENT_LIST_REQUEST});
  }, [dispatch]);
  console.log(commentId);
  return (
    <>
      <InfoContainer>
        <Label>나의 댓글목록</Label>
        <InfoContainer>
          {Comments &&
            Comments.map((v) => (
              <CommentListItem
                key={v.id}
                item={v}
                setOpen={setOpen}
                setCommentId={setCommentId}
              />
            ))}
        </InfoContainer>
      </InfoContainer>
      {open && (
        <Delete
          open={open}
          close={close}
          userId={Comments[0].UserId}
          commentId={commentId}
        />
      )}
    </>
  );
}
