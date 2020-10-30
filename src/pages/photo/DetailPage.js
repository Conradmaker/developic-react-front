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
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_DETAIL_REQUEST} from "../../reducer/photo/actions";
import {RESET_STATE} from "../../reducer/comment";

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

export default function DetailPage({match}) {
  const {id} = match.params;
  const dispatch = useDispatch();
  const {me} = useSelector((state) => state.user);
  const {Detail} = useSelector((state) => state.photo);
  const [cartModal, setCartModal] = useState(false);
  const onCloseCart = () => {
    setCartModal(false);
  };
  useEffect(() => {
    dispatch({type: LOAD_DETAIL_REQUEST, data: {id: id || 0}});
  }, [dispatch, id]);
  useEffect(() => {
    dispatch({type: RESET_STATE});
  }, [dispatch]);
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
                <Photo img={Detail} />
              </LeftVisual>
              <RightVisual>
                <Summary open={setCartModal} detail={Detail} />
                {cartModal && <Addcart close={onCloseCart} />}
              </RightVisual>
            </Visual>
            <div id="about" />
            <PageTitle>
              <Label>ABOUT THIS PHOTO</Label>
              {me && me.id === Detail.UserId && (
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
              )}
            </PageTitle>
            <AboutPhoto info={Detail.info} />
            <div id="comment" />
            <Label>COMMENTS</Label>
            <CommentForm photoId={id} me={me} />
            {Detail.Comments &&
              Detail.Comments.map((v) => (
                <Comment key={v.id} comment={v} me={me && me.id} />
              ))}
          </RightSection>
          <LeftSection>
            <LeftMenu />
          </LeftSection>
        </HorizentalBox>
      </AboutContainer>
    </Layout>
  );
}
