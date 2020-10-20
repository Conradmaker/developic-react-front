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
  div {
    position: absolute;
    bottom: 10px;
    right: 0;
    display: flex;
    justify-content: flex-end;
    gap: 40px;
    article {
      font-size: 20px;
      display: flex;
      align-items: center;
      i {
        color: #ed8074;
      }
    }
  }
`;

export default function Photo() {
  return (
    <ImageContainer>
      <img
        src="https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/1.jpg"
        alt="캡아"
      />
      <div>
        <article>
          <i>
            <AiOutlineHeart />
          </i>
          <span>303</span>
        </article>

        <article>
          <i>
            <AiOutlineExclamationCircle />
          </i>
          <span>신고</span>
        </article>
      </div>
    </ImageContainer>
  );
}
