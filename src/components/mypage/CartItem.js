import React from "react";
import styled from "styled-components";
import {FiCheckCircle, FiCircle} from "react-icons/fi";
import IMG from "../../assets/img/avatarsample.png";

const SummaryBox = styled.div`
  flex: 7;
  padding: 5px 20px;
  box-sizing: border-box;
  border-left: 3px solid #999;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  h2 {
    font-size: 22px;
  }
  span {
    font-size: 20px;
    &::before {
      content: "- ";
    }
  }
  p {
    font-size: 21px;
    font-weight: bold;
    color: #006064;
    align-self: flex-end;
    &::after {
      content: " ₩";
    }
  }
`;
const ImgBox = styled.div`
  flex: 3;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-height: 100%;
    max-width: 100%;
    cursor: pointer;
  }
`;
const CheckBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  i {
    font-size: 28px;
    color: #006064;
    cursor: pointer;
  }
`;

const CartItemBox = styled.div`
  width: 84%;
  height: 120px;
  display: flex;
  padding: 30px 0 10px 0;
  border-bottom: 1px solid #eee;
`;

export default function CartItem() {
  return (
    <CartItemBox>
      <CheckBox>
        <i>
          <FiCheckCircle />
        </i>
      </CheckBox>
      <ImgBox>
        <img src={IMG} alt="" />
      </ImgBox>
      <SummaryBox>
        <h2>STELLHEAD AND SPINES IN ALASKA</h2>
        <span>conrad</span>
        <p>9,000,000</p>
      </SummaryBox>
    </CartItemBox>
  );
}
