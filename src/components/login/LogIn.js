import React from "react";
import "./login.css";
import styled, { keyframes } from "styled-components";
const show = keyframes`
from {
    opacity: 0;
    z-index: 1;
  }

to {
    opacity: 1;
    z-index: 5;
  }
`;
const Container = styled.div`
  width: 100vw;
  height: 100vh;
  align-items: center;
  background-color: #e9e9e9;
  background: url("https://res.cloudinary.com/dbhnlktrv/image/upload/v1599997626/background_oeuhe7.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
  z-index: 9999;
`;
const Box = styled.div`
  background-color: #e9e9e9;
  border-radius: 0.7rem;
  box-shadow: 0 0.9rem 1.7rem rgba(0, 0, 0, 0.25),
    0 0.7rem 0.7rem rgba(0, 0, 0, 0.22);
  height: 420px;
  max-width: 758px;
  overflow: hidden;
  position: relative;
  width: 100%;
`;
const Input = styled.input`
  background-color: #fff;
  border: none;
  padding: 0.9rem 0.9rem;
  margin: 0.5rem 0;
  width: 100%;
`;
const Form = styled.form`
  background-color: var(--white);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  padding: 0 3rem;
  height: 100%;
  text-align: center;
  * > button {
    margin-top: 1.5rem;
  }
  h2 {
    font-weight: 300;
    margin: 0;
    margin-bottom: 1.25rem;
  }
`;
const Btn = styled.button`
  background-color: #0367a6;
  background-image: linear-gradient(90deg, #0367a6 0%, #008997 74%);
  border-radius: 20px;
  border: 1px solid #0367a6;
  color: var(--white);
  cursor: pointer;
  font-size: 0.8rem;
  font-weight: bold;
  letter-spacing: 0.1rem;
  padding: 0.9rem 4rem;
  text-transform: uppercase;
  transition: transform 80ms ease-in;
  &:active {
    transform: scale(0.95);
  }

  &:focus {
    outline: none;
  }
`;
const Link = styled.a`
  color: #333;
  font-size: 0.9rem;
  margin: 1.5rem 0;
  text-decoration: none;
`;
export default function LogIn() {
  return (
    <Container>
      <Box class="container right-panel-active">
        {/* <!-- Sign Up --> */}
        <div class="container__form container--signup">
          <Form action="#" id="form1">
            <h2 class="form__title">회원가입</h2>
            <Input type="text" placeholder="UserName" />
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Btn>회원가입</Btn>
          </Form>
        </div>

        {/* <!-- Sign In --> */}
        <div class="container__form container--signin">
          <Form action="#" id="form2">
            <h2 class="form__title">로그인</h2>
            <Input type="email" placeholder="Email" />
            <Input type="password" placeholder="Password" />
            <Link href="#">회원이 아니신가요?</Link>
            <Btn>로그인</Btn>
          </Form>
        </div>

        {/* <!-- Overlay --> */}
        <div class="container__overlay">
          <div class="overlay">
            <div class="overlay__panel overlay--left">
              <Btn id="signIn">로그인</Btn>
            </div>
            <div class="overlay__panel overlay--right">
              <Btn id="signUp">회원가입</Btn>
            </div>
          </div>
        </div>
      </Box>
    </Container>
  );
}
