import React from "react";
import styled, {keyframes} from "styled-components";
import LIMG from "../../assets/img/loadingImg.gif";
const goBack = keyframes`
from{
    transform:scale(1);
}
to{
    transform:scale(0);
    bottom: -400px;

}
`;
const farout = keyframes`
from{
    transform:scale(0.5)
}
to{
    transform:scale(1.2)
}
`;
const bling = keyframes`
from{
    text-shadow: 0 0 5px gray;
}
to{
    text-shadow: 0 0 20px #222;
}
`;
const LoadingBox = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  img {
    width: 600px;
    animation: ${farout} 3s alternate infinite;
  }
  span {
    font-size: 20px;
    font-weight: bold;
    animation: ${bling} 0.5s alternate infinite;
  }
`;
const LoadingContainer = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;
const WhiteBoard = styled.div`
  position: absolute;
  width: 1100px;
  height: 90vh;
  bottom: 0;
  background: #fff;
  animation: ${goBack} 0.4s forwards;
`;
export default function Loading({text}) {
  return (
    <LoadingContainer>
      <WhiteBoard />
      <LoadingBox>
        <img src={LIMG} alt="loading" />
        <span>{text}</span>
      </LoadingBox>
    </LoadingContainer>
  );
}
