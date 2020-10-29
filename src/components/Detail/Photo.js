import React from "react";
import styled from "styled-components";
import {
  AiOutlineHeart,
  AiFillHeart,
  AiOutlineExclamationCircle,
} from "react-icons/ai";

const ImageContainer = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  img {
    border-radius: 10px;
    max-width: 100%;
    max-height: 360px;
  }
`;
export const IconButton = styled.div`
  position: absolute;
  bottom: 10px;
  right: 0;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  article {
    cursor: pointer;
    font-size: 20px;
    display: flex;
    align-items: center;
    i {
      color: #ed8074;
    }
  }
`;

export default function Photo({img}) {
  return (
    <ImageContainer>
      <img src={`http://localhost:3030/${img.image_src}`} alt={img.image_src} />
      <IconButton>
        <article>
          <i>
            <AiOutlineHeart />
          </i>
          <span>{img.Likers && img.Likers.length}</span>
        </article>

        <article>
          <i>
            <AiOutlineExclamationCircle />
          </i>
          <span>신고</span>
        </article>
      </IconButton>
    </ImageContainer>
  );
}
