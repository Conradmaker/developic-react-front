import React from "react";
import styled from "styled-components";
import Label from "../../components/common/Label";
import LeftNavi from "../../components/about/LeftNavi";
import Title from "../../components/common/Title";
import Apply from "../../components/about/Apply";
import List from "../../components/about/List";
import Buttons from "../../components/common/Buttons";
import Layout from "../../components/common/Layout";
import {useState} from "react";
import ApplyModal from "../../components/modal/ApplyModal";
import QnAModal from "../../components/modal/QnAModal";
import {useSelector} from "react-redux";

export const Qna = styled.div`
  flex: 1.1;
  height: 270px;
  background: #e5e5e5;
  padding: 10px 15px;
  display: flex;
  flex-direction: column;
  span {
    line-height: 1.6;
    font-size: 18px;
  }
  p {
    margin: 50px 0 10px 0;
    text-align: end;
    font-size: 14px;
  }
  div {
    display: flex;
  }
`;
export const Faq = styled.div`
  flex: 2;
  span {
    display: block;
    margin: 10px 0 10px 0;
    font-size: 25px;
    font-weight: bold;
  }
`;
export const FaqQnA = styled.div`
  display: flex;
  gap: 20px;
`;
const SectionGap = styled.div`
  height: 70px;
`;
export const AboutContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
`;
export const HorizentalBox = styled.div`
  width: 100%;
  display: flex;
  gap: 70px;
`;
export const RightSection = styled.div`
  flex: 5;
`;
export const LeftSection = styled.div`
  flex: 1;
`;

export default function AboutPage() {
  const {me} = useSelector((state) => state.user);
  const [qnaOpen, setQnaOpen] = useState(false);
  const closeQna = () => setQnaOpen(false);

  const [applyOpen, setApplyOpen] = useState(false);
  const toggleApply = () => setApplyOpen(!applyOpen);
  const onBlock = () => alert("로그인해주세요");
  return (
    <Layout>
      <AboutContainer>
        <Title>ABOUT</Title>
        <HorizentalBox>
          <RightSection>
            <SectionGap id="about-service" />
            <Label>SERVICE</Label>
            {me ? <Apply open={toggleApply} /> : <Apply open={onBlock} />}
            {applyOpen && <ApplyModal me={me} close={toggleApply} />}
            <SectionGap id="about-notice" />
            <Label>NOTICE</Label>
            <List></List>
            <List></List>
            <List></List>
            <List></List>
            <SectionGap />
            <SectionGap id="about-faq" />
            <FaqQnA>
              <Faq>
                <Label>FAQ</Label>
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
                    <Buttons
                      onClick={() =>
                        me ? setQnaOpen(true) : alert("로그인해주세요")
                      }
                    >
                      1:1문의 작성
                    </Buttons>
                    {qnaOpen && <QnAModal me={me} close={closeQna} />}
                    <Buttons color="black" small>
                      작성 목록
                    </Buttons>
                  </div>
                </span>
              </Qna>
            </FaqQnA>
          </RightSection>
          <LeftSection>
            <LeftNavi></LeftNavi>
          </LeftSection>
        </HorizentalBox>
      </AboutContainer>
    </Layout>
  );
}
