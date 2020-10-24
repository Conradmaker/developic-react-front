import React from "react";
import styled, {css} from "styled-components";
import Layout from "../../components/common/Layout";
import {useState} from "react";
import GIF1 from "../../assets/img/login1.gif";
import GIF2 from "../../assets/img/login2.gif";
import LogInForm from "../../components/login/LoginForm";
import SignupForm from "../../components/login/SignupForm";
const Hider = styled.div`
  z-index: 20;
  position: absolute;
  width: 40%;
  top: 0;
  bottom: 0;
  left: 0;
  transition: all 0.5s ease;
  display: flex;
  justify-content: center;
  align-items: center;
  img {
    transition: all 0.5s ease;
  }
  img:nth-child(1) {
    transform: translateX(293px);
    opacity: 1;
  }
  img:nth-child(2) {
    opacity: 0;
    transform: translateX(1000px);
  }

  ${(props) =>
    props.slide &&
    css`
      transform: translateX(-600px);
      img:nth-child(1) {
        opacity: 0;
      }
      img:nth-child(2) {
        opacity: 1;
      }
    `}
`;
const Container = styled.div`
  height: 60vh;
  width: 1100px;
  margin: 0 auto;
  margin-top: 30px;
  padding-bottom: 20px;
  box-sizing: border-box;
  display: flex;
  position: relative;
  overflow: hidden;
  section {
    width: 50%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    form {
      flex: 1;
      display: flex;
      flex-direction: column;
      span {
        color: red;
        font-size: 13px;
      }
      p {
        text-decoration: underline;
        line-height: 2;
      }
    }
  }
  section + section {
    margin-left: 130px;
  }
`;
export const ButtonBox = styled.div`
  display: flex;
  flex: 1;
  margin-bottom: 10px;
  align-items: flex-end;
  justify-content: center;
`;
export default function LoginPage({match}) {
  const {sl} = match.params;
  const [slide, setSlide] = useState(sl === "2");
  return (
    <Layout>
      <Container>
        <Hider slide={slide}>
          <img src={GIF1} width="100%" alt="1" />
          <img src={GIF2} width="133%" alt="1" />
        </Hider>
        <LogInForm setSlide={setSlide} />
        <SignupForm setSlide={setSlide} />
      </Container>
    </Layout>
  );
}
