import React, {useEffect} from "react";
import styled from "styled-components";
import Avatar from "../profile/Avatar";
import {ImCancelCircle} from "react-icons/im";
import {RiPencilRuler2Line} from "react-icons/ri";
import {AiOutlineExclamationCircle} from "react-icons/ai";
import {useState} from "react";
import Delete from "../modal/Delete";
import Declare from "../modal/Declare";
import ChangeComment from "../modal/ChangeComment";
import {Link} from "react-router-dom";
import {useSelector} from "react-redux";

const BottomSection = styled.div`
  border-bottom: 1px solid gray;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px 0 20px 5px;
  span {
    font-size: 18px;
  }
  div {
    display: flex;
    align-items: center;
    p:nth-child(1) {
      color: #ed8074;
    }
  }
`;
const TopSection = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  div {
    cursor: pointer;
    display: flex;
    align-items: center;
    span {
      margin-left: 15px;
      font-size: 22px;
      small {
        font-size: 14px;
        color: gray;
      }
    }
  }
  small {
    color: #ed8074;
    display: flex;
    align-items: center;
    cursor: pointer;
    i {
      margin-left: 5px;
    }
  }
`;
const CommentBox = styled.div`
  & + & {
    margin-top: 20px;
  }
`;
const IconButton = styled.p`
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: flex-end;
  i {
    margin: 0 0 0 3px;
  }
  span {
    font-size: 16px;
  }
  & + & {
    margin-left: 10px;
  }
`;

export default function Comment({comment, me}) {
  const [removeOpen, setRemoveOpen] = useState(false);
  const closeRemove = () => setRemoveOpen(false);

  const [declareOpen, setDeclareOpen] = useState(false);
  const closeDeclare = () => setDeclareOpen(false);

  const [changeCommentOpen, setChangeCommentOpen] = useState(false);
  const closeChangeComment = () => setChangeCommentOpen(false);

  const {
    CommentError,
    deleteCommentSuccess,
    declareCommentSuccess,
  } = useSelector((state) => state.comment);
  useEffect(() => {
    if (deleteCommentSuccess) {
      alert("댓글이 삭제 되었습니다.");
      return closeRemove();
    }
  }, [deleteCommentSuccess]);
  useEffect(() => {
    if (declareCommentSuccess) {
      alert("성공적으로 접수되었습니다.");
      closeDeclare();
    }
  }, [declareCommentSuccess]);
  useEffect(() => {
    if (CommentError) {
      alert(CommentError);
    }
  }, [CommentError]);
  return (
    <CommentBox>
      <TopSection>
        <Link to={`/profile/${comment.UserId}`}>
          <div>
            <Avatar small />
            <span>
              {comment.User.nickname} <small>{comment.updatedAt}</small>
            </span>
          </div>
        </Link>
        {me === comment.UserId && (
          <small onClick={() => setRemoveOpen(true)}>
            REMOVE
            <i>
              <ImCancelCircle />
            </i>
          </small>
        )}
        {removeOpen && (
          <Delete userId={me} commentId={comment.id} close={closeRemove} />
        )}
      </TopSection>
      <BottomSection>
        <span>{comment.content}</span>
        <div>
          <IconButton onClick={() => setDeclareOpen(true)}>
            <span>신고</span>
            <i>
              <AiOutlineExclamationCircle />
            </i>
          </IconButton>
          {declareOpen && (
            <Declare
              alreadyDeclare={declareCommentSuccess}
              userId={comment.UserId}
              commentId={comment.id}
              close={closeDeclare}
            />
          )}
          {me === comment.UserId && (
            <IconButton onClick={() => setChangeCommentOpen(true)}>
              <span>수정</span>
              <i>
                <RiPencilRuler2Line />
              </i>
            </IconButton>
          )}
          {changeCommentOpen && (
            <ChangeComment
              userId={me}
              commentId={comment.id}
              close={closeChangeComment}
            />
          )}
        </div>
      </BottomSection>
    </CommentBox>
  );
}
