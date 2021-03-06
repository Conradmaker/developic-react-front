import React from "react";
import styled from "styled-components";
import Label from "../common/Label";
import {InputBox} from "../common/Input";
import ToggleBtn from "../common/ToggleBtn";
import {useState} from "react";
import InfoEditor from "./InfoEditor";
import Buttons from "../common/Buttons";
import AddPicstory from "../modal/AddPicstory";
import useInput from "../../hooks/useInput";
import {useDispatch, useSelector} from "react-redux";
import {ADD_PHOTO_REQUEST} from "../../reducer/photo/actions";

export const PicstoryBox = styled.div`
  display: flex;
  input {
    width: 270px;
    border: none;
    border-bottom: 1px solid #000;
    background: none;
    outline: none;
    margin-left: 25px;
  }
`;
const Positioner = styled.div`
  min-height: 20px;
  display: flex;
  justify-content: flex-end;
`;
const SelctInput = styled.select`
  width: 300px;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid black;
  outline: none;
  display: flex;
`;
const InformationFormBox = styled.form`
  padding: 30px 0;
`;
export const SubTitle = styled.span`
  font-size: 19px;
  font-weight: bold;
  margin-top: 20px;
  display: block;
`;
export default function InformationForm() {
  const dispatch = useDispatch();
  const {uploadImgSuccess} = useSelector((state) => state.photo);
  const [modalOpen, setModalOpen] = useState(false);
  const onClose = () => {
    setModalOpen(false);
  };
  const [title, onChangeTitle] = useInput("");
  const [cata, onChangeCata] = useInput(4);
  const [price, onChangePrice] = useInput(null);
  const [about, setAbout] = useState("");
  const [picstory, setPicstory] = useState(null);
  const [sale, setSale] = useState(false);
  const onToggle = () => {
    setSale(!sale);
  };
  const onSubmit = (e) => {
    e.preventDefault();
    dispatch({
      type: ADD_PHOTO_REQUEST,
      data: {
        name: title,
        sale,
        price,
        src: uploadImgSuccess,
        info: about,
        catagory: cata,
        picstory,
      },
    });
  };
  const [picstoryName, onChangePicstoryName, setName] = useInput("");
  return (
    <InformationFormBox>
      <Label>INFORMATION</Label>
      <InputBox>
        <label>제목</label>
        <input
          type="text"
          name="title"
          value={title}
          onChange={onChangeTitle}
        />
      </InputBox>
      <Positioner />
      <InputBox>
        <label>카테고리</label>
        <SelctInput onChange={onChangeCata}>
          <option value="0">ANIMALS</option>
          <option value="1">PEOPLE</option>
          <option value="2">URBAN</option>
          <option value="3">NATURE</option>
          <option value="4">ETC</option>
        </SelctInput>
      </InputBox>
      <Positioner />
      <InputBox onClick={onToggle}>
        <label>판매여부</label>
        <ToggleBtn vital={sale} />
      </InputBox>
      <Positioner />
      {!sale && (
        <InputBox>
          <label>가격</label>
          <input
            type="number"
            name="price"
            value={price}
            onChange={onChangePrice}
          />
        </InputBox>
      )}
      <SubTitle>소개</SubTitle>
      <InfoEditor setAbout={setAbout} />
      <Positioner />
      <PicstoryBox>
        <SubTitle>픽스토리</SubTitle>
        <input
          type="text"
          disabled
          placeholder="등록을 원하시면 선택해주세요"
          value={picstory}
        />
        <Buttons
          type="button"
          color="green"
          small
          onClick={() => setModalOpen(true)}
        >
          SELECT
        </Buttons>
        {modalOpen && (
          <AddPicstory
            setPicstory={setPicstory}
            picstory={picstory}
            close={onClose}
            picstoryName={picstoryName}
            onChangePicstoryName={onChangePicstoryName}
            setName={setName}
          />
        )}
      </PicstoryBox>
      <Positioner />
      <Positioner>
        <Buttons type="button" onClick={onSubmit}>
          등록
        </Buttons>
      </Positioner>
    </InformationFormBox>
  );
}
