import React from "react";
import Label from "../common/Label";
import ModalLayout, {Gap, ModalBtnBox} from "./ModalLayout";
import styled from "styled-components";
import {PicstoryBox, SubTitle} from "../edit/InformationForm";
import Buttons from "../common/Buttons";
import useInput from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  ADD_PICSTORY_REQUEST,
  LOAD_PICSTORY_REQUEST,
} from "../../reducer/photo/actions";

const NewPicstoryForm = styled.form`
  h2 {
    font-size: 22px;
    color: rgb(50, 50, 50);
  }
`;
const PicList = styled.ul`
  border-left: 4px solid #e9e9e9;
  li {
    margin: 10px 0 10px 20px;
    font-size: 20px;
    cursor: pointer;
    &::before {
      content: "☛ ";
    }
  }
`;
export default function AddPicstory({close}) {
  const dispatch = useDispatch();
  const {PicstoryList} = useSelector((state) => state.photo);
  const [picstoryName, onChangePicstoryName, setName] = useInput("");
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({type: ADD_PICSTORY_REQUEST, data: {name: picstoryName}});
    setName("");
  };
  useEffect(() => {
    dispatch({type: LOAD_PICSTORY_REQUEST});
  }, [dispatch]);
  return (
    <ModalLayout>
      <Label>PICSTORY</Label>
      <PicList>
        {PicstoryList.map((v) => (
          <li key={v.id}>{v.name}</li>
        ))}
      </PicList>
      <Gap />
      <Gap />
      <NewPicstoryForm onSubmit={onSubmit}>
        <h2>NEW PICSTORY</h2>
        <PicstoryBox>
          <SubTitle>이름</SubTitle>
          <input
            type="text"
            placeholder="픽스토리 이름을 입력해주세요"
            value={picstoryName}
            onChange={onChangePicstoryName}
          />
          <Buttons type="submit" color="green" small>
            ADD
          </Buttons>
        </PicstoryBox>
      </NewPicstoryForm>
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          뒤로
        </Buttons>
        <Buttons font="black">확인</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
