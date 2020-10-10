import React from "react";
import styled from "styled-components";
import { IoMdHeartEmpty } from "react-icons/io";

const Description = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  h3 {
    margin-bottom: 20px;
  }
  p {
    font-size: 20px;
  }
`;

const Image = styled.div`
  margin-bottom: 30px;
  position: relative;
  img {
    width: 100%;
  }
  img:hover + i,
  i:hover {
    display: flex;
  }
  i {
    background: rgba(0, 0, 0, 0.5);
    position: absolute;
    right: 0;
    top: 0;
    bottom: 0;
    left: 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    display: none;
    color: white;
    padding: 15px;
    span {
      position: absolute;
      top: 15px;
      right: 15px;
      display: flex;
      align-items: center;
      font-size: 25px;
      cursor: pointer;
      small {
        font-size: 18px;
      }
    }
  }
`;
export default function ImageBox({ image }) {
  return (
    <Image>
      <img src={image.src} alt={image.name}></img>
      <i>
        <span>
          <IoMdHeartEmpty />
          <small>255</small>
        </span>
        <Description>
          <h3>{image.name}</h3>
          <p>{image.author}</p>
        </Description>
      </i>
    </Image>
  );
}
