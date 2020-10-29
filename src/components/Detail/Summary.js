import React from "react";
import styled from "styled-components";
import {BiCart} from "react-icons/bi";
import Label from "../common/Label";
import Buttons from "../common/Buttons";
import {Link} from "react-router-dom";

export const ButtonBox = styled.div`
  display: flex;
`;
const Artist = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
  cursor: pointer;
  &:hover {
    small {
      color: black;
      letter-spacing: 3px;
    }
  }
  strong {
    font-size: 20px;
  }
  small {
    font-size: 18px;
    color: #707070;
    transition: all 0.2s ease;
  }
`;
const SummaryBox = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 40px;
  p {
    color: #ed8074;
    font-weight: bold;
    font-size: 22px;
    letter-spacing: 2px;
  }
`;

export default function Summary({open, detail}) {
  console.log(detail);
  const {User} = detail;

  return (
    <SummaryBox>
      <Label>{detail.name}</Label>
      <Artist>
        <strong>{User && User.nickname}</strong>
        <Link to={`/profile/${User && User.nickname}`}>
          <small>More Picture > </small>
        </Link>
      </Artist>
      <span>{detail.createdAt}</span>
      {detail.price && <p>{detail.price}₩</p>}
      {!detail.sale ? (
        <ButtonBox>
          <Buttons small>BUY NOW</Buttons>
          <Buttons small outline font="black" onClick={() => open(true)}>
            ADD CART&nbsp;
            <BiCart />
          </Buttons>
        </ButtonBox>
      ) : (
        <ButtonBox>
          <Buttons color="green">NOT FOR SALE</Buttons>
        </ButtonBox>
      )}
    </SummaryBox>
  );
}
