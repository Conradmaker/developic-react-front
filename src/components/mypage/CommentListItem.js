import React from "react";
import styled from "styled-components";
import IMG from "../../assets/img/avatarsample.png";
import {Summary} from "./BuyItem";
import {CgPlayListRemove} from "react-icons/cg";

const CommentSummary = styled(Summary)`
  width: 60%;
  border: none;
`;

const Remove = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  display: none;
  i {
    display: flex;
    justify-content: center;
    align-items: center;
    font-size: 25px;
    color: #ed8074;
    cursor: pointer;
  }
`;

const CommentImgBox = styled.div`
  width: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-width: 100%;
    max-height: 100%;
  }
`;

const CommentBox = styled.div`
  width: 90%;
  height: 120px;
  display: flex;
  border-left: 3px solid #999;
  margin-bottom: 30px;
  border-bottom: 1px solid #eee;
  &:hover ${Remove} {
    display: flex;
  }
`;

export default function CommentListItem({setOpen, setCommentId, item}) {
  return (
    <CommentBox>
      <CommentImgBox>
        <img
          src={`http://localhost:3030/${item.Photo.image_src}`}
          alt={item.Photo.image_src}
        />
      </CommentImgBox>
      <CommentSummary>
        <h2>{item.Photo.name}</h2>
        <p>{item.content}</p>
      </CommentSummary>
      <Remove>
        <i
          onClick={() => {
            setCommentId(item.id);
            setOpen(true);
          }}
        >
          <CgPlayListRemove />
        </i>
      </Remove>
    </CommentBox>
  );
}
