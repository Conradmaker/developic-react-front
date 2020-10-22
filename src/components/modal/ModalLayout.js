import React from "react";
import styled, {keyframes} from "styled-components";

const fadeIn = keyframes`
from{
  opacity:0;
}
to{
  opacity:1;
}
`;
const slideDown = keyframes`
from{
  transform: translateY(-300px)
}
to{
  transform: translateY(0)
}
`;
export const Info = styled.b`
  font-size: 14px;
  font-weight: bold;
  color: #006064;
  align-self: flex-end;
  margin-top: 10px;
`;
export const ModalInput = styled.input`
  font-size: 18px;
  height: 30px;
  width: 400px;
  outline: none;
  border: none;
  border-bottom: 1px solid black;
  background: none;
  transition: all 0.2s ease-in-out;
  &:focus {
    box-shadow: 0 5px 0px black;
  }
`;
export const Gap = styled.div`
  height: 30px;
`;
export const ModalBtnBox = styled.div`
  display: flex;
  gap: 20px;
  align-self: flex-end;
`;
export const ModalContainer = styled.div`
  background: rgba(0, 0, 0, 0.6);
  position: fixed;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  display: flex;
  justify-content: center;
  z-index: 1000;
  animation: ${fadeIn} 0.2s;
`;
const ModalBox = styled.div`
  padding: 30px 40px;
  background: #fff;
  position: absolute;
  top: 150px;
  display: flex;
  flex-direction: column;
  animation: ${slideDown} 0.24s;
  h1 {
    align-self: flex-start;
    font-size: 25px;
    font-weight: bold;
  }
  small {
    color: #006064;
  }
  textarea {
    outline: none;
    font-size: 18px;
    font-family: "san-serif";
    padding: 10px;
    border: none;
    box-sizing: border-box;
    max-width: 400px;
    min-width: 400px;
    max-height: 300px;
    min-height: 300px;
    background: #eee;
    &:focus {
      border: 2px solid black;
    }
  }
`;
export default function ModalLayout({children}) {
  return (
    <ModalContainer>
      <ModalBox>{children}</ModalBox>
    </ModalContainer>
  );
}
