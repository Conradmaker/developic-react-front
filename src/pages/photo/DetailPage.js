import React from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import LeftMenu from "../../components/Detail/LeftMenu";
import {RiDeleteBin6Line, RiPencilRuler2Line} from "react-icons/ri";
import {
  AboutContainer,
  HorizentalBox,
  LeftSection,
  RightSection,
} from "../main/AboutPage";
import Title from "../../components/common/Title";
import {IoIosArrowBack} from "react-icons/io";
import Photo, {IconButton} from "../../components/Detail/Photo";
import Summary from "../../components/Detail/Summary";
import Label from "../../components/common/Label";
import AboutPhoto from "../../components/Detail/AboutPhoto";
import CommentForm from "../../components/Detail/CommentForm";
import Comment from "../../components/Detail/Comment";
import {useState} from "react";
import Addcart from "../../components/modal/Addcart";

const IconBtnBox = styled(IconButton)`
  position: static;
  display: flex;
  justify-content: flex-end;
  gap: 40px;
  article {
    i {
    }
  }
`;
const LeftVisual = styled.div`
  flex: 14;
`;
const RightVisual = styled.div`
  flex: 7;
`;
const Visual = styled.div`
  height: 400px;
  display: flex;
  gap: 70px;
`;
export const PageTitle = styled.div`
  width: 100%;
  margin: 50px 0 20px 0;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
`;

export default function DetailPage() {
  const [cartModal, setCartModal] = useState(false);
  const onCloseCart = () => {
    setCartModal(false);
  };
  return (
    <Layout>
      <div id="top" />
      <AboutContainer>
        <HorizentalBox>
          <RightSection>
            <div id="detail" />
            <PageTitle>
              <Title>DETAIL</Title>
              <span>
                <IoIosArrowBack />
                BACK
              </span>
            </PageTitle>
            <Visual>
              <LeftVisual>
                <Photo />
              </LeftVisual>
              <RightVisual>
                <Summary open={setCartModal} />
                {cartModal && <Addcart close={onCloseCart} />}
              </RightVisual>
            </Visual>
            <div id="about" />
            <PageTitle>
              <Label>ABOUT&nbsp;THIS&nbsp;PHOTO</Label>
              <IconBtnBox>
                <article>
                  <i>
                    <RiPencilRuler2Line />
                  </i>
                  &nbsp;수정
                </article>
                <article>
                  <i>
                    <RiDeleteBin6Line />
                  </i>
                  &nbsp;삭제
                </article>
              </IconBtnBox>
            </PageTitle>
            <AboutPhoto />
            <div id="comment" />
            <Label>COMMENTS</Label>
            <CommentForm />
            <Comment />
            <Comment />
            <Comment />
          </RightSection>
          <LeftSection>
            <LeftMenu />
          </LeftSection>
        </HorizentalBox>
      </AboutContainer>
    </Layout>
  );
}
