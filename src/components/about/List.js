import React, {useState} from "react";
import styled, {css} from "styled-components";
import {AiOutlinePlus, AiOutlineMinus} from "react-icons/ai";
import {Gap} from "../modal/ModalLayout";
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
      height: auto;
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
export default function List({item}) {
  const [open, setOpen] = useState(false);
  return (
    <>
      <ListTitle open={open} onClick={() => setOpen(!open)}>
        <h1>{item && item.title}</h1>
        {open ? <AiOutlineMinus /> : <AiOutlinePlus />}
      </ListTitle>
      <ListDetail open={open}>
        <Gap>
          <span>질문</span>
        </Gap>
        <p>{item && item.que_content}</p>
        <p>
          {item && item.ans_content && (
            <>
              <Gap>
                <span>답변</span>
              </Gap>
              {item.ans_content}
            </>
          )}
        </p>
      </ListDetail>
    </>
  );
}
