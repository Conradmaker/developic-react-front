import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import Buttons from "../../components/common/Buttons";
import {InputBox} from "../../components/common/Input";
import Label from "../../components/common/Label";
import {ModalBtnBox} from "../../components/modal/ModalLayout";
import AvatarForm from "../../components/mypage/AvatarForm";
import useInput from "../../hooks/useInput";
import {CHANGE_USER_INFO_REQUEST} from "../../reducer/user";
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
export default function UserInfo({history}) {
  const dispatch = useDispatch();
  const {changeUserInfoSuccess} = useSelector((state) => state.user);
  const {uploadImgSuccess: src} = useSelector((state) => state.photo);

  const [nickname, onChangeNickname] = useInput("");
  console.log(nickname);
  const [phone, onChangePhone] = useInput("");
  const [sns, onChangeSns] = useInput("");
  const [address, onChangeAddress] = useInput("");
  const [info, onChangeInfo] = useInput("");
  const onSubmitInfo = (e) => {
    dispatch({
      type: CHANGE_USER_INFO_REQUEST,
      data: {nickname, phone, sns, address, info, src},
    });
  };
  useEffect(() => {
    if (changeUserInfoSuccess) {
      alert("성공적으로 수정되었습니다.");
      return history.push("/");
    }
  });
  return (
    <InfoContainer>
      <form>
        <Label>개인정보 관리</Label>
        <AvatarForm />
        <InputBox>
          <label>닉네임</label>
          <input
            type="text"
            placeholder="NICKNAME"
            value={nickname}
            onChange={onChangeNickname}
          />
        </InputBox>
        <InputBox>
          <label>연락처</label>
          <input
            type="text"
            placeholder="PHONE"
            value={phone}
            onChange={onChangePhone}
          />
        </InputBox>
        <InputBox>
          <label>SNS</label>
          <input
            type="text"
            placeholder="INSTAGRAM"
            value={sns}
            onChange={onChangeSns}
          />
        </InputBox>
        <InputBox long>
          <label>주소</label>
          <input
            type="text"
            placeholder="ADDRESS"
            value={address}
            onChange={onChangeAddress}
          />
        </InputBox>
        <TextAreaBox>
          <label>소개</label>
          <textarea onChange={onChangeInfo} value={info}></textarea>
        </TextAreaBox>
      </form>
      <ModalBtnBox style={boxStyle}>
        <Buttons color="black" small>
          회원탈퇴
        </Buttons>
        <Buttons onClick={onSubmitInfo}>수정</Buttons>
      </ModalBtnBox>
    </InfoContainer>
  );
}
