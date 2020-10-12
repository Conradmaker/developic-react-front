import React from "react";
import { IoMdHeartEmpty } from "react-icons/io";
import { Link } from "react-router-dom";
import styled from "styled-components";
import Buttons from "../common/Buttons";
import { ImageCover } from "./ImageBox";

const Summary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-top: 10px;
  h3 {
    font-size: 18px;
    color: #000000;
    font-weight: bold;
  }
  p {
    font-size: 17px;
    color: #006064;
    font-weight: bold;
  }
`;

const ImageBox = styled.div`
  width: 100%;
  height: 230px;
  padding: 10px;
  box-sizing: border-box;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #eceff1;
  position: relative;
  img:hover + i,
  i:hover {
    display: flex;
  }
  img {
    max-height: 200px;
    max-width: 300px;
    box-shadow: 0 0 15px black;
  }
  i {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.5);
    display: none;
  }
`;

const Card = styled.div`
  width: 30%;

  margin-bottom: 50px;
  display: flex;
  flex-direction: column;
`;

export default function ShopImageBox({ image }) {
  return (
    <Card>
      <ImageBox>
        <img src={image.src} alt="" />
        <ImageCover>
          <span>
            <IoMdHeartEmpty />
            <small>255</small>
          </span>
          <Link to="/">
            <Buttons outline inner>
              Detail
            </Buttons>
          </Link>
        </ImageCover>
      </ImageBox>
      <Summary>
        <h3>{image.name}</h3>
        <p>{image.price}</p>
      </Summary>
    </Card>
  );
}
