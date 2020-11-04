import React, {useState} from "react";
import styled, {css} from "styled-components";
import Buttons from "../common/Buttons";
import IMG from "../../assets/img/avatarsample.png";
import PayCancel from "../modal/mypage/PayCancel";
export const Summary = styled.div`
  width: 50%;
  border-left: 4px solid #999;
  margin: 5px 0;
  padding: 10px 0 10px 20px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  h3 {
    color: #006064;
  }
  em {
    font-size: 25px;
    &::after {
      content: "₩";
    }
  }
  h2 {
    font-size: 18px;
    font-weight: bold;
  }
  div {
    display: flex;
    gap: 10px;
    justify-content: flex-end;
    align-items: center;
    span {
      font-weight: bold;
      color: #006064;
    }
    button {
      width: 70px;
      height: 25px;
    }
  }
  p {
    display: flex;
    justify-content: space-between;
    span {
      font-weight: bold;
      &::after {
        content: " ₩";
      }
    }
    small {
      font-size: 14px;
    }
  }
`;
export const BuyImgBox = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  img {
    max-height: 100%;
    max-width: 100%;
  }
  button {
    margin-right: 10px;
  }
`;
export const BuyItemBox = styled.div`
  width: 48%;
  height: 150px;
  margin-bottom: 40px;
  display: flex;
  ${(props) =>
    props.small &&
    css`
      height: 100px;
    `}
`;
export const BuyItemContainer = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function BuyItem() {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <BuyItemBox>
        <BuyImgBox>
          <img src={IMG} alt="" />
        </BuyImgBox>
        <Summary>
          <h2>STEELHEAD AND SPINES IN ALASKA</h2>
          <div>
            <Buttons color="pink" onClick={() => setOpen(true)}>
              구매취소
            </Buttons>
            <span>배송중</span>
          </div>
          <p>
            <span>9,000,000</span>
            <small>2020-10-04</small>
          </p>
        </Summary>
      </BuyItemBox>
      {open && <PayCancel open={open} close={close} />}
    </>
  );
}
