import React from "react";
import {useState} from "react";
import {useRef} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {UPLOAD_IMG_REQUEST} from "../../reducer/photo/actions";
import Buttons from "../common/Buttons";
import Label from "../common/Label";

export const UploadBox = styled.div`
  padding: 20px 0;
  form {
    display: flex;
    margin-bottom: 20px;
    input {
      font-size: 20px;
      width: 350px;
    }
  }
  span {
    font-size: 18px;
  }
  section {
    width: 505px;
    max-height: 320px;
    span {
      font-size: 15px;
      color: gray;
    }
    img {
      max-width: 505px;
      max-height: 320px;
    }
  }
`;
export default function UploadForm() {
  const {uploadImgSuccess} = useSelector((state) => state.photo);
  const dispatch = useDispatch();
  const imageInput = useRef();
  const [imgName, setImgName] = useState("");
  const onClickImageUpload = (e) => {
    e.preventDefault();
    imageInput.current.click();
  };
  const onChangeImg = (e) => {
    console.log("image", e.target.files);
    setImgName(e.target.files[0].name);
    const imageFormData = new FormData();
    imageFormData.append("image", e.target.files[0]);
    dispatch({type: UPLOAD_IMG_REQUEST, data: imageFormData});
  };
  return (
    <UploadBox>
      <Label>UPLOAD&nbsp;PHOTO</Label>
      <form encType="multipart/form-data">
        <input ref={imageInput} type="file" hidden onChange={onChangeImg} />
        <input type="text" disabled value={imgName} />
        <Buttons onClick={onClickImageUpload} color="green">
          SELECT A IMAGE
        </Buttons>
      </form>
      <h1>미리보기</h1>
      <section>
        {!uploadImgSuccess ? (
          <span>이미지를 업로드 해주세요</span>
        ) : (
          <img src={`http://localhost:3030/${uploadImgSuccess}`} alt="" />
        )}
      </section>
    </UploadBox>
  );
}
