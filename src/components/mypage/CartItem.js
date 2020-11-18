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

export default function CartItem({item, onChangeCheck}) {
  return (
    <CartItemBox>
      <CheckBox>
        <input
          type="checkbox"
          value={item.id}
          name="check"
          onChange={onChangeCheck}
        />
      </CheckBox>
      <ImgBox>
        <img src={`http://localhost:3030/${item.image_src}`} alt="" />
      </ImgBox>
      <SummaryBox>
        <h2>{item.name}</h2>
        <span>{item.User.nickname}</span>
        <p>{item.price}</p>
      </SummaryBox>
    </CartItemBox>
  );
}
