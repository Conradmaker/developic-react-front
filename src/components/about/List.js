import React, { useState } from "react";
import styled, { css } from "styled-components";
import { AiOutlinePlus, AiOutlineMinus } from "react-icons/ai";
const ListDetail = styled.div`
  width: 100%;
  padding: 0 10px;
  height: 0px;
  transition: all 0.3s ease;
  overflow: hidden;
  line-height: 1.5;
  background: #fff;
  ${(props) =>
    props.open &&
    css`
      padding: 10px;
      transition: all 0.3s ease;
      height: 200px;
    `};
`;
const ListTitle = styled.div`
  width: 100%;
  box-sizing: border-box;
  font-weight: bold;
  border-bottom: 1px solid #000;
  padding: 10px;
  font-size: 25px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
  h1 {
    font-size: 17px;
  }
  ${(props) =>
    props.open &&
    css`
      border-bottom: 1px solid #e5e5e5;
    `}
`;
export default function List() {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListTitle open={open} onClick={() => setOpen(!open)}>
        <h1>첫번째 공지입니다.</h1>
        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </ListTitle>
      <ListDetail open={open}>
        <p>
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry's standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </p>
      </ListDetail>
    </>
  );
}
