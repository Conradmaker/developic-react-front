import React, {useState, useCallback} from "react";
import {useDispatch} from "react-redux";
import useInput from "../../hooks/useInput";
import {ButtonBox} from "../../pages/main/LoginPage";
import {SIGN_UP_REQUEST} from "../../reducer/user";
import Buttons from "../common/Buttons";
import {InputBox} from "../common/Input";
import Title from "../common/Title";

export default function SignupForm({setSlide}) {
  const dispatch = useDispatch();
  const [id, onChangeId] = useInput("");
  const [password, onChangePassword] = useInput("");
  const [check, , setCheck] = useInput("");
  const [email, onChangeEmail] = useInput("");
  const [name, onChangeName] = useInput("");
  const [passwordError, setPasswordError] = useState(true);
  const onChangeCheck = useCallback(
    (e) => {
      setCheck(e.target.value);
      if (e.target.value === password) {
        setPasswordError(false);
      } else {
        setPasswordError(true);
      }
    },
    [password, setCheck]
  );
  const onSubmit = (e) => {
    e.preventDefault();
    if (!id || !password || !email || !name) {
      alert("빠짐없이 입력하세요");
    } else if (passwordError) {
      alert("비밀번호가 일치하지 않습니다.");
    } else {
      dispatch({type: SIGN_UP_REQUEST, data: {id, password, email, name}});
    }
  };
  return (
    <>
      <section>
        <Title>SIGNUP</Title>
        <form onSubmit={onSubmit}>
          <InputBox>
            <label>ID &nbsp;</label>
            <input type="text" value={id} onChange={onChangeId} />
          </InputBox>
          <InputBox>
            <label>PW</label>
            <input
              type="password"
              value={password}
              onChange={onChangePassword}
            />
          </InputBox>
          <InputBox>
            <label>CHECK</label>
            <input type="text" value={check} onChange={onChangeCheck} />
          </InputBox>
          <InputBox>
            <label>EMAIL</label>
            <input type="email" value={email} onChange={onChangeEmail} />
          </InputBox>
          <InputBox>
            <label>NAME</label>
            <input type="text" value={name} onChange={onChangeName} />
          </InputBox>
          {passwordError && <span>비밀번호가 일치하지 않습니다.</span>}

          <ButtonBox>
            <Buttons type="submit" font="black">
              SIGN UP
            </Buttons>
            <Buttons type="button" onClick={() => setSlide(true)} outline>
              LOG IN
            </Buttons>
          </ButtonBox>
        </form>
      </section>
    </>
  );
}
