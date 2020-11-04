import React from "react";
import {Link} from "react-router-dom";
import List from "../../components/about/List";
import Buttons from "../../components/common/Buttons";
import Label from "../../components/common/Label";
import {Gap} from "../../components/modal/ModalLayout";
import {Faq, FaqQnA, Qna} from "../main/AboutPage";
import {InfoContainer} from "./UserInfo";

export default function QnaList() {
  return (
    <InfoContainer>
      <Label>1:1문의내역</Label>
      <FaqQnA>
        <Faq>
          <span>미답변목록</span>
          <List></List>
          <List></List>
          <List></List>
          <Gap />
          <span>답변목록</span>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
          <List></List>
        </Faq>
        <Qna>
          <Label>Q&A</Label>
          <span>
            원하는 답이 없다면
            <br />
            1:1문의를 이용하세요.
            <p>
              Open at AM 10:00 ~ PM 17:00
              <br />
              Lunch at PM 12:00 ~ 13:00
            </p>
            <div>
              <Link to="/about#about-faq">
                <Buttons>1:1문의 작성</Buttons>
              </Link>
            </div>
          </span>
        </Qna>
      </FaqQnA>
    </InfoContainer>
  );
}
