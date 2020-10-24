import React, {useState} from "react";
import {useCallback} from "react";
import {useDispatch} from "react-redux";
import {ButtonBox} from "../../pages/main/LoginPage";
import {LOG_IN_REQUEST} from "../../reducer/user";
import Buttons from "../common/Buttons";
import {InputBox} from "../common/Input";
import Title from "../common/Title";

const initialInput = {id: "", password: ""};

export default function LogInForm({setSlide}) {
  const dispatch = useDispatch();
  const [inputs, setInputs] = useState(initialInput);
  const onChange = useCallback(
    (e) => {
      const {name, value} = e.target;
      setInputs({
        ...inputs,
        [name]: value,
      });
    },
    [inputs]
  );
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type: LOG_IN_REQUEST, data: {id, password}});
  };
  const {id, password} = inputs;
  return (
    <>
      <section>
        <Title>LOGIN</Title>
        <form onSubmit={onSubmit}>
          <InputBox>
            <label>ID &nbsp;</label>
            <input type="text" name="id" value={id} onChange={onChange} />
          </InputBox>
          <InputBox>
            <label>PW</label>
            <input
              type="password"
              name="password"
              value={password}
              onChange={onChange}
            />
          </InputBox>
          <p>아이디 / 비밀번호 찾기</p>

          <ButtonBox>
            <Buttons type="submit" font="black">
              LOG IN
            </Buttons>
            <Buttons type="button" onClick={() => setSlide(false)} outline>
              SIGN UP
            </Buttons>
          </ButtonBox>
        </form>
      </section>
    </>
  );
}
