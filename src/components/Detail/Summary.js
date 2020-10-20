import React from "react";
import styled from "styled-components";
import { BiCart } from "react-icons/bi";
import Label from "../common/Label";
import Buttons from "../common/Buttons";

const ButtonBox = styled.div`
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

export default function Summary() {
  return (
    <SummaryBox>
      <Label>Last&nbsp;Article</Label>
      <Artist>
        <strong>Yoo Won Geun</strong>
        <small>More Picture > </small>
      </Artist>
      <span>2020-09-10</span>
      <p>9,000,000₩</p>
      <ButtonBox>
        <Buttons small>BUY NOW</Buttons>
        <Buttons small outline font="black">
          ADD CART&nbsp;
          <BiCart />
        </Buttons>
      </ButtonBox>
    </SummaryBox>
  );
}
