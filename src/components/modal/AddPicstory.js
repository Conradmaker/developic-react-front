import React from "react";
import Label from "../common/Label";
import ModalLayout, {Gap, ModalBtnBox} from "./ModalLayout";
import styled from "styled-components";
import {PicstoryBox, SubTitle} from "../edit/InformationForm";
import Buttons from "../common/Buttons";

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
export default function AddPicstory() {
  return (
    <ModalLayout>
      <Label>PICSTORY</Label>
      <PicList>
        <li>Accrdion</li>
        <li>Picstory2</li>
        <li>33333</li>
      </PicList>
      <Gap />
      <Gap />
      <NewPicstoryForm>
        <h2>NEW PICSTORY</h2>
        <PicstoryBox>
          <SubTitle>제목</SubTitle>
          <input type="text" placeholder="제목을 입력해주세요" />
          <Buttons color="green" small>
            ADD
          </Buttons>
        </PicstoryBox>
      </NewPicstoryForm>
      <Gap />
      <ModalBtnBox>
        <Buttons color="black">뒤로</Buttons>
        <Buttons font="black">확인</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
