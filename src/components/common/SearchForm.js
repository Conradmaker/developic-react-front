import React, { useState } from "react";
import styled, { css } from "styled-components";
import {
  MdSearch,
  MdCheckBoxOutlineBlank,
  MdCheckBox,
  MdClose,
} from "react-icons/md";
import Buttons from "./Buttons";

const SearchContainer = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  width: 100%;
  height: 0;
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  opacity: 0;
  box-shadow: 0 0 30px #737373;
  z-index: 9999;
  ${(props) =>
    props.open &&
    css`
      height: 100px;
      opacity: 1;
    `}
`;
const SearchBox = styled.form`
  width: 800px;
  height: 100px;
  margin: 0 auto;
  padding-left: 100px;
  display: flex;
  align-items: center;
  justify-content: center;

  input {
    flex: 1;
    font-size: 18px;
    border: none;
    outline: none;
    border-bottom: 1px solid black;
  }
  i {
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
  }
  i + i {
    font-size: 25px;
    margin: 50px;
    span {
      font-size: 17px;
    }
    &:hover {
      color: #ed8074;
    }
  }
`;
const SaleCheck = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin-right: 15px;
  i {
    font-size: 20px;
    color: #707070;
    cursor: pointer;
  }
`;

export default function SearchForm({ open, toggle }) {
  const [check, setCheck] = useState(false);
  return (
    <SearchContainer open={open}>
      <SearchBox>
        <SaleCheck>
          <i onClick={() => setCheck(!check)}>
            {check ? <MdCheckBox /> : <MdCheckBoxOutlineBlank />}
          </i>
          <span>판매가능상품</span>
        </SaleCheck>
        <input type="text" placeholder="SEARCH" />
        <i>
          <MdSearch />
        </i>
        <i onClick={() => toggle(false)}>
          <MdClose />
          <span>닫기</span>
        </i>
      </SearchBox>
    </SearchContainer>
  );
}
