import React from "react";
import {useEffect} from "react";
import {useState} from "react";
import {useDispatch, useSelector} from "react-redux";
import {ADD_QUESTION_REQUEST} from "../../reducer/about";
import Buttons from "../common/Buttons";
import Label from "../common/Label";
import ModalLayout, {Gap, Info, ModalBtnBox, ModalInput} from "./ModalLayout";
const initialState = {title: "", content: ""};

export default function QnAModal({close, me}) {
  const [inputs, setInputs] = useState(initialState);
  const {title, content} = inputs;
  const onChange = (e) => {
    const {name, value} = e.target;
    setInputs({
      ...inputs,
      [name]: value,
    });
  };
  const dispatch = useDispatch();
  const {addQuestionSuccess, addQuestionError} = useSelector(
    (state) => state.about
  );
  const onAdd = () => {
    dispatch({type: ADD_QUESTION_REQUEST, data: {id: me.id, title, content}});
    close();
  };
  useEffect(() => {
    if (addQuestionSuccess) {
      alert(addQuestionSuccess);
    }
  }, [addQuestionSuccess]);
  useEffect(() => {
    if (addQuestionError) {
      alert(addQuestionError);
    }
  }, [addQuestionError]);
  return (
    <ModalLayout>
      <Label>1:1 Q&A</Label>
      <Gap />
      <h1>제목</h1>
      <ModalInput type="text" name="title" onChange={onChange} value={title} />
      <Gap />
      <h1>내용</h1>
      <textarea name="content" onChange={onChange} value={content}></textarea>
      <Info>운영시간: AM 10:00 ~ PM 12:00 / PM 1:00 ~ PM 5:00</Info>
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          닫기
        </Buttons>
        <Buttons onClick={onAdd} font="black">
          등록
        </Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
