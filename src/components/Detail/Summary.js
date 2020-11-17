import React from "react";
import styled from "styled-components";
import {BiCart} from "react-icons/bi";
import Label from "../common/Label";
import Buttons from "../common/Buttons";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {ADD_CART_REQUEST, REMOVE_CART_REQUEST} from "../../reducer/user";

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
  const {me} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const {User} = detail;
  const onAddCart = () => {
    dispatch({type: ADD_CART_REQUEST, data: {id: detail.id}});
    open(true);
  };
  const onRemoveCart = () => {
    dispatch({type: REMOVE_CART_REQUEST, data: {id: detail.id}});
  };
  const Carted = me && me.CartIn.findIndex((v) => v.id === detail.id);
  return (
    <SummaryBox>
      <Label>{detail.name}</Label>
      <Artist>
        <strong>{User && User.nickname}</strong>
        <Link to={`/profile/${User && User.id}`}>
          <small>More Picture > </small>
        </Link>
      </Artist>
      <span>{detail.createdAt}</span>
      {detail.price && <p>{detail.price}₩</p>}
      {!detail.sale ? (
        <ButtonBox>
          <Buttons small>BUY NOW</Buttons>
          {!me ? (
            <Buttons
              small
              outline
              font="black"
              onClick={() => alert("로그인 해주세요")}
            >
              ADD CART&nbsp;
              <BiCart />
            </Buttons>
          ) : Carted ? (
            <Buttons small outline font="black" onClick={onAddCart}>
              ADD CART&nbsp;
              <BiCart />
            </Buttons>
          ) : (
            <Buttons small outline color="pink" onClick={onRemoveCart}>
              REMOVE CART&nbsp;
              <BiCart />
            </Buttons>
          )}
        </ButtonBox>
      ) : (
        <ButtonBox>
          <Buttons color="green">NOT FOR SALE</Buttons>
        </ButtonBox>
      )}
    </SummaryBox>
  );
}
