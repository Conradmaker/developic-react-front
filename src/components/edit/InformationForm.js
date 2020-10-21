import React from "react";
import styled from "styled-components";
import Label from "../common/Label";
import {InputBox} from "../common/Input";
import ToggleBtn from "../common/ToggleBtn";
import {useState} from "react";
import InfoEditor from "./InfoEditor";
import Buttons from "../common/Buttons";
const PicstoryBox = styled.div`
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
  height: 20px;
`;
const SelctInput = styled.select`
  width: 300px;
  border: none;
  font-size: 18px;
  border-bottom: 1px solid black;
  outline: none;
  display: flex;
`;
const InformationFormBox = styled.div`
  padding: 30px 0;
`;
const SubTitle = styled.span`
  font-size: 19px;
  font-weight: bold;
  margin-top: 20px;
  display: block;
`;
export default function InformationForm() {
  const [about, setAbout] = useState("");
  console.log(about);
  const [sale, setSale] = useState(false);
  const onToggle = () => {
    setSale(!sale);
    console.log(sale);
  };

  return (
    <InformationFormBox>
      <Label>INFORMATION</Label>
      <InputBox>
        <label>제목</label>
        <input type="text" name="title" />
      </InputBox>
      <Positioner />
      <InputBox>
        <label>카테고리</label>
        <SelctInput>
          <option value="">ANIMALS</option>
          <option value="">PEOPLE</option>
          <option value="">URBAN</option>
          <option value="">NATURE</option>
          <option value="">ETC</option>
        </SelctInput>
      </InputBox>
      <Positioner />
      <InputBox onClick={onToggle}>
        <label>판매여부</label>
        <ToggleBtn vital={sale} />
      </InputBox>
      <SubTitle>소개</SubTitle>
      <InfoEditor setAbout={setAbout} />
      <Positioner />
      <PicstoryBox>
        <SubTitle>픽스토리</SubTitle>
        <input
          type="text"
          disabled
          placeholder="등록을 원하시면 선택해주세요"
        />
        <Buttons color="green" small>
          SELECT
        </Buttons>
      </PicstoryBox>
    </InformationFormBox>
  );
}
