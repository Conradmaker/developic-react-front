import React from "react";
import styled from "styled-components";
import Buttons from "../../components/common/Buttons";
import {InputBox} from "../../components/common/Input";
import Label from "../../components/common/Label";
import {ModalBtnBox} from "../../components/modal/ModalLayout";
import AvatarForm from "../../components/mypage/AvatarForm";
const TextAreaBox = styled.div`
  margin: 20px 0;
  display: flex;
  label {
    display: block;
    width: 100px;
    height: 20px;
    font-size: 19px;
    font-weight: bold;
  }
  textarea {
    min-width: 500px;
    max-width: 500px;
    min-height: 300px;
  }
`;
export const InfoContainer = styled.div``;
const boxStyle = {
  marginLeft: "300px",
};
export default function UserInfo() {
  return (
    <InfoContainer>
      <form>
        <Label>개인정보 관리</Label>
        <AvatarForm />
        <InputBox>
          <label>닉네임</label>
          <input type="text" placeholder="NICKNAME" />
        </InputBox>
        <InputBox>
          <label>연락처</label>
          <input type="text" placeholder="PHONE" />
        </InputBox>
        <InputBox>
          <label>SNS</label>
          <input type="text" placeholder="INSTAGRAM" />
        </InputBox>
        <InputBox long>
          <label>주소</label>
          <input type="text" placeholder="ADDRESS" />
        </InputBox>
        <TextAreaBox>
          <label>소개</label>
          <textarea></textarea>
        </TextAreaBox>
      </form>
      <ModalBtnBox style={boxStyle}>
        <Buttons color="black" small>
          회원탈퇴
        </Buttons>
        <Buttons>수정</Buttons>
      </ModalBtnBox>
    </InfoContainer>
  );
}
