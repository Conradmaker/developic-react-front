import React from "react";
import styled from "styled-components";
import {HiOutlineArrowLeft} from "react-icons/hi";
const Desc = styled.div`
  max-width: 450px;
  height: 300px;
  span {
    display: block;
    text-indent: 10px;
    font-size: 18px;
    line-height: 1.3;
  }
  p {
    margin-top: 20px;
    cursor: pointer;
    padding: 7px 0;
    display: flex;
    position: relative;
    align-items: center;
    width: 115px;
    border-bottom: 1px solid #006064;
    transition: all 0.3s ease;
    div {
      position: absolute;
      right: -25px;
      width: 30px;
      height: 30px;
      background: #006064;
      border: 1px solid #006064;
      display: flex;
      align-items: center;
      justify-content: center;
      color: #fff;
      font-size: 20px;
      transition: all 0.3s ease;
    }
    &:hover {
      width: 430px;
      div {
        transform: rotate(-90deg);
      }
    }
  }
`;
const Counter = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px 0 30px 0;
  li {
    display: flex;
    flex-direction: column;
    align-items: center;
    strong {
      font-size: 23px;
    }
    small {
      color: #707070;
    }
  }
`;
const SummaryBox = styled.div`
  h1 {
    margin-top: 15px;
    font-size: 28px;
    font-weight: bold;
  }
`;

let liker = 0;
export default function UserSummary({profile, photos}) {
  photos && photos.map((v) => (liker += v.Likers.length));
  return (
    <SummaryBox>
      <h1>ABOUT ARTIST</h1>
      <Counter>
        <li>
          <strong>{photos && photos.length}</strong>
          <small>Pictures</small>
        </li>
        <li>
          <strong>{profile && profile.Picstories.length}</strong>
          <small>PicStory</small>
        </li>
        <li>
          <strong>{liker}</strong>
          <small>Liked</small>
        </li>
      </Counter>
      <Desc>
        <span>{profile && profile.info}</span>
        <p>
          MORE ABOUT
          <div>
            <HiOutlineArrowLeft />
          </div>
        </p>
      </Desc>
    </SummaryBox>
  );
}
