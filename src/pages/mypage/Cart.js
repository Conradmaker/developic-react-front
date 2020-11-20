import React, {useState, useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Buttons from "../../components/common/Buttons";
import Label from "../../components/common/Label";
import {
  BuyImgBox,
  BuyItemBox,
  BuyItemContainer,
  Summary,
} from "../../components/mypage/BuyItem";
import CartItem from "../../components/mypage/CartItem";
import {LOAD_CART_REQUEST, REMOVE_CARTS_REQUEST} from "../../reducer/mypage";
import {InfoContainer} from "./UserInfo";

export default function Cart() {
  const dispatch = useDispatch();
  const {loadCartSuccess} = useSelector((state) => state.mypage);
  const [checked, setChecked] = useState([]);
  const changeChecked = (e) => {
    if (e.target.checked) {
      setChecked([...checked, parseInt(e.target.value)]);
    } else {
      setChecked(checked.filter((v) => v !== parseInt(e.target.value)));
    }
  };
  let current = 0;
  loadCartSuccess && loadCartSuccess.forEach((v) => (current += v.price));
  const total = current;

  const removeCart = (e) => {
    dispatch({type: REMOVE_CARTS_REQUEST, data: checked});
  };
  useEffect(() => {
    dispatch({type: LOAD_CART_REQUEST});
  }, [dispatch]);
  return (
    <InfoContainer>
      <Label>장바구니 리스트</Label>
      {loadCartSuccess &&
        loadCartSuccess.map((v) => (
          <CartItem item={v} key={v.id} onChangeCheck={changeChecked} />
        ))}
      <BuyItemContainer>
        <BuyItemBox small />
        <BuyItemBox small>
          <BuyImgBox>
            <Buttons small color="black" onClick={removeCart}>
              선택취소
            </Buttons>
            <Buttons small>선택구매</Buttons>
          </BuyImgBox>
          <Summary>
            <h3>TOTAL</h3>
            <em>{total}</em>
          </Summary>
        </BuyItemBox>
      </BuyItemContainer>
    </InfoContainer>
  );
}
