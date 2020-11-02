import React from "react";
import {useRef} from "react";
import styled from "styled-components";
import {CenterPositioner} from "../../pages/main/MainPage";
import Buttons from "../common/Buttons";
import Avatar from "../profile/Avatar";

const AvatarFormContainer = styled.div`
  padding: 20px 0;
  label {
    font-size: 19px;
    font-weight: bold;
  }
  form {
    display: flex;
    margin-bottom: 20px;
    input {
      font-size: 20px;
      width: 300px;
    }
  }
  span {
    font-size: 18px;
  }
`;
export default function AvatarForm() {
  const imageInput = useRef();
  const onClickImage = () => {
    imageInput.current.click();
  };
  return (
    <AvatarFormContainer>
      <label>아바타</label>
      <Avatar />
      <CenterPositioner />
      <form encType="multipart/form-data">
        <input type="file" ref={imageInput} hidden />
        <input type="text" disabled />
        <Buttons type="button" color="green" onClick={onClickImage}>
          SELECT A IMAGE
        </Buttons>
      </form>
    </AvatarFormContainer>
  );
}
