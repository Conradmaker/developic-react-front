import React from "react";
import {ButtonBox} from "../../pages/main/LoginPage";
import Buttons from "../common/Buttons";
import {InputBox} from "../common/Input";
import Title from "../common/Title";

export default function LogInForm({setSlide}) {
  return (
    <>
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
    </>
  );
}
