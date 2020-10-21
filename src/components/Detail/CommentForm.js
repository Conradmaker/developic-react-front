import React from "react";
import styled from "styled-components";

const FormContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 20px 0;
  h1 {
    font-size: 21px;
    font-weight: bold;
    margin: 10px 0;
  }
  form {
    position: relative;
    input {
      font-size: 18px;
      height: 35px;
      width: 730px;
      outline: none;
      border: none;
      border-bottom: 1px solid black;
    }
    button {
      cursor: pointer;
      outline: none;
      background: #000;
      color: #fff;
      border: none;
      height: 35px;
      width: 120px;
      &:hover {
        background: #444;
      }
    }
  }
`;
export default function CommentForm() {
  return (
    <FormContainer>
      <h1>댓글작성</h1>
      <form>
        <input type="text" placeholder="댓글을 입력해 주세요." />
        <button type="submit">등록</button>
      </form>
    </FormContainer>
  );
}
