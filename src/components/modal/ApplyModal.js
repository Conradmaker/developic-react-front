import React, {useEffect} from "react";
import Label from "../common/Label";
import ModalLayout, {Gap, ModalBtnBox} from "./ModalLayout";
import styled, {css} from "styled-components";
import {FiCircle, FiCheckCircle} from "react-icons/fi";
import Buttons from "../common/Buttons";
import {useDispatch, useSelector} from "react-redux";
import {APPLY_WRITTER_REQUEST} from "../../reducer/about";
const Term = styled.p`
  margin: 10px 0 20px 0;
  width: 400px;
  line-height: 1.4;
  font-size: 17px;
  color: rgb(100, 100, 100);
`;
const Notice = styled.div`
  display: flex;
  font-size: 20px;
  align-items: center;
  margin-top: 10px;
  i {
    font-weight: bold;
  }
  span {
    flex: 1;
    margin: 10px 20px;
  }
  p {
    font-weight: bold;
  }
  ${(props) =>
    props.done &&
    css`
      i,
      p {
        color: red;
      }
    `}
`;
export default function ApplyModal({open, close, me, length}) {
  const {applyWritterError, applyWritterSuccess} = useSelector(
    (state) => state.about
  );
  const dispatch = useDispatch();
  const onApply = () => {
    dispatch({type: APPLY_WRITTER_REQUEST, data: {id: me.id}});
  };

  useEffect(() => {
    if (applyWritterError) {
      return alert(applyWritterError);
    }
  }, [applyWritterError]);
  useEffect(() => {
    if (applyWritterSuccess) {
      alert(applyWritterSuccess);
      close();
    }
  }, [applyWritterSuccess, close]);
  return (
    <ModalLayout open={open}>
      <Label>작가신청</Label>
      <Gap />
      <h1>
        {/*  eslint-disable-next-line jsx-a11y/accessible-emoji */}
        <strong>🕺🏼</strong> 잠깐!
      </h1>
      {length > 9 ? (
        <Notice>
          <i>
            <FiCheckCircle />
          </i>
          <span>10개 이상의 게시글을 등록하셨나요?</span>
          <p>{length}/10</p>
        </Notice>
      ) : (
        <Notice done>
          <i>
            <FiCircle />
          </i>
          <span>10개 이상의 게시글을 등록하셨나요?</span>
          <p>{length}/10</p>
        </Notice>
      )}
      <Gap />
      <h1>이용약관</h1>
      <Term>
        Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy text ever
        since the 1500s, when an unknown printer took a galley of type and
        scrambled it to make a type specimen book. It has survived not only five
        centuries, but also the leap into electronic typesetting, remaining
        essentially unchanged. It was popularised in the 1960s with the release
        of Letraset sheets containing Lorem Ipsum passages, and more recently
        with desktop publishing software like Aldus PageMaker including versions
        of Lorem Ipsum.
      </Term>
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" small onClick={close}>
          닫기
        </Buttons>
        <Buttons onClick={onApply} small font="black">
          신청
        </Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
