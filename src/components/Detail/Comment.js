import React from "react";
import styled from "styled-components";
import Avatar from "../profile/Avatar";
import {ImCancelCircle} from "react-icons/im";
import {RiPencilRuler2Line} from "react-icons/ri";
import {AiOutlineExclamationCircle} from "react-icons/ai";

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
export default function Comment() {
  return (
    <CommentBox>
      <TopSection>
        <div>
          <Avatar small />
          <span>
            Conrad <small>2020-01-01</small>
          </span>
        </div>
        <small>
          REMOVE
          <i>
            <ImCancelCircle />
          </i>
        </small>
      </TopSection>
      <BottomSection>
        <span>가나다라마바사아자차카타파하</span>
        <div>
          <IconButton>
            <span>신고</span>
            <i>
              <AiOutlineExclamationCircle />
            </i>
          </IconButton>
          <IconButton>
            <span>수정</span>
            <i>
              <RiPencilRuler2Line />
            </i>
          </IconButton>
        </div>
      </BottomSection>
    </CommentBox>
  );
}
