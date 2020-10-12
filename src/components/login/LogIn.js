import React from "react";
import styled from "styled-components";

export default function LogIn() {
  return (
    <div class="container right-panel-active">
      {/* <!-- Sign Up --> */}
      <div class="container__form container--signup">
        <form class="form" id="form1">
          <h2 class="form__title">회원가입</h2>
          <input type="text" placeholder="UserName" class="input" />
          <input type="email" placeholder="Email" class="input" />
          <input type="password" placeholder="Password" class="input" />
          <button class="btn">회원가입</button>
        </form>
      </div>

      {/* <!-- Sign In --> */}
      <div class="container__form container--signin">
        <form class="form" id="form2">
          <h2 class="form__title">로그인</h2>
          <input type="email" placeholder="Email" class="input" />
          <input type="password" placeholder="Password" class="input" />
          <a href="/" class="link">
            회원이 아니신가요?
          </a>
          <button class="btn">로그인</button>
        </form>
      </div>

      {/* <!-- Overlay --> */}
      <div class="container__overlay">
        <div class="overlay">
          <div class="overlay__panel overlay--left">
            <button class="btn" id="signIn">
              로그인
            </button>
          </div>
          <div class="overlay__panel overlay--right">
            <button class="btn" id="signUp">
              회원가입
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
