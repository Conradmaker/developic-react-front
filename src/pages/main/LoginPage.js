import React from "react";
import styled, { css } from "styled-components";
import Layout from "../../components/common/Layout";
import Title from "../../components/common/Title";
import Buttons from "../../components/common/Buttons";
import { InputBox } from "../../components/common/Input";
import { useState } from "react";
import GIF1 from "../../assets/img/login1.gif";
import GIF2 from "../../assets/img/login2.gif";
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
const ButtonBox = styled.div`
  display: flex;
`;
export default function LoginPage({ match }) {
  const { sl } = match.params;
  console.log(sl);
  const [slide, setSlide] = useState(sl === "2");
  return (
    <Layout>
      <Container>
        <Hider slide={slide}>
          <img src={GIF1} width="100%" alt="1" />
          <img src={GIF2} width="133%" alt="1" />
        </Hider>
        <section>
          <Title>LOGIN</Title>
          <form>
            <InputBox>
              <label>ID &nbsp;</label>
              <input type="text" />
            </InputBox>
            <InputBox>
              <label>PW</label>
              <input type="password" />
            </InputBox>
            <p>아이디 / 비밀번호 찾기</p>
          </form>
          <ButtonBox>
            <Buttons font="black">LOG IN</Buttons>
            <Buttons onClick={() => setSlide(false)} outline>
              SIGN UP
            </Buttons>
          </ButtonBox>
        </section>
        <section>
          <Title>SIGNUP</Title>
          <form>
            <InputBox>
              <label>ID &nbsp;</label>
              <input type="text" />
            </InputBox>
            <InputBox>
              <label>PW</label>
              <input type="password" />
            </InputBox>
            <InputBox>
              <label>CHECK</label>
              <input type="text" />
            </InputBox>
            <InputBox>
              <label>EMAIL</label>
              <input type="password" />
            </InputBox>
            <InputBox>
              <label>NAME</label>
              <input type="password" />
            </InputBox>
            <span>비밀번호가 일치하지 않습니다.</span>
          </form>
          <ButtonBox>
            <Buttons font="black">SIGN UP</Buttons>
            <Buttons onClick={() => setSlide(true)} outline>
              LOG IN
            </Buttons>
          </ButtonBox>
        </section>
      </Container>
    </Layout>
  );
}
