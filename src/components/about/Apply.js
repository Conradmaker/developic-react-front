import React, {useState} from "react";
import styled from "styled-components";
import IMG from "../../assets/img/작가신청.jpg";
import Buttons from "../common/Buttons";

const Summary = styled.div`
  h5 {
    font-size: 19px;
    font-weight: bold;
    margin-bottom: 5px;
  }
  span {
    font-size: 15px;
  }
`;

const InnerBox = styled.div`
  width: 70%;
  height: 80px;
  background: #fff;
  padding: 0 20px;
  border-bottom: 1px solid #e5e5e5;
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
const Container = styled.div`
  height: 250px;
  background-size: cover;
  background-image: url(${IMG});
  position: relative;
`;

export default function Apply({open}) {
  return (
    <Container>
      <InnerBox>
        <Summary>
          <h5>작가신청</h5>
          <span>will you with me?</span>
        </Summary>
        <Buttons font="black" onClick={open}>
          작가신청
        </Buttons>
      </InnerBox>
    </Container>
  );
}
