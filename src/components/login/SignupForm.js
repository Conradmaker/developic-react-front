import React from "react";
import {ButtonBox} from "../../pages/main/LoginPage";
import Buttons from "../common/Buttons";
import {InputBox} from "../common/Input";
import Title from "../common/Title";

export default function SignupForm({setSlide}) {
  return (
    <>
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
    </>
  );
}
