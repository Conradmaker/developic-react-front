import React, {useEffect} from "react";
import styled, {css} from "styled-components";
import Layout from "../../components/common/Layout";
import {useState} from "react";
import GIF1 from "../../assets/img/login1.gif";
import GIF2 from "../../assets/img/login2.gif";
import LogInForm from "../../components/login/LoginForm";
import SignupForm from "../../components/login/SignupForm";
import {useSelector} from "react-redux";
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
export default function LoginPage({match, history}) {
  const {me, signUpSuccess, signUpError} = useSelector((state) => state.user);
  const {sl} = match.params;
  const [slide, setSlide] = useState(sl === "2");
  useEffect(() => {
    if (me) {
      history.replace("/");
    }
  }, [history, me]);
  useEffect(() => {
    if (signUpSuccess) {
      alert("회원가입이 완료되었습니다.");
      history.replace("/login/2");
      //만약 안되면 slide 를 true로 바꿔주자. setSlide(true)
    }
  }, [history, signUpSuccess]);
  useEffect(() => {
    if (signUpError) {
      alert(signUpError);
    }
  }, [signUpError]);
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
