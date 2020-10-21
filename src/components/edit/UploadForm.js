import React from "react";
import {useRef} from "react";
import styled from "styled-components";
import Buttons from "../common/Buttons";
import Label from "../common/Label";

const UploadBox = styled.div`
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
  const imageInput = useRef();
  const onClickImageUpload = (e) => {
    e.preventDefault();
    imageInput.current.click();
  };
  return (
    <UploadBox>
      <Label>UPLOAD&nbsp;PHOTO</Label>
      <form>
        <input ref={imageInput} type="file" hidden />
        <input type="text" disabled value="경로" />
        <Buttons onClick={onClickImageUpload} color="green">
          SELECT A IMAGE
        </Buttons>
      </form>
      <h1>미리보기</h1>
      <section>
        <span>이미지를 업로드 해주세요</span>
        <img
          src="https://pds.joins.com/news/component/htmlphoto_mmdata/201106/22/htm_2011062217015620002010-001.JPG"
          alt=""
        />
      </section>
    </UploadBox>
  );
}
