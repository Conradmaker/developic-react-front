import React from "react";
import {useState} from "react";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {CenterPositioner} from "../../pages/main/MainPage";
import {UPLOAD_IMG_REQUEST} from "../../reducer/photo/actions";
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
  const {uploadImgSuccess} = useSelector((state) => state.photo);
  const [imageName, setImageName] = useState("");
  const dispatch = useDispatch();
  const imageInput = useRef();
  const onClickImage = () => {
    imageInput.current.click();
  };
  const onChangeImage = (e) => {
    console.log("image", e.target.files);
    setImageName(e.target.files[0].name);
    const imageFormData = new FormData();
    imageFormData.append("image", e.target.files[0]);
    dispatch({type: UPLOAD_IMG_REQUEST, data: imageFormData});
  };
  return (
    <AvatarFormContainer>
      <label>아바타</label>
      {uploadImgSuccess && <Avatar src={uploadImgSuccess} />}
      <CenterPositioner />
      <form encType="multipart/form-data">
        <input type="file" ref={imageInput} hidden onChange={onChangeImage} />
        <input type="text" disabled value={imageName} />
        <Buttons type="button" color="green" onClick={onClickImage}>
          SELECT A IMAGE
        </Buttons>
      </form>
    </AvatarFormContainer>
  );
}
