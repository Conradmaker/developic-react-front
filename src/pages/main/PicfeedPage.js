import React from "react";
import Layout from "../../components/common/Layout";
import {BannerBox} from "../../components/main/Banner";
import styled, {css, keyframes} from "styled-components";
import BANNERIMG from "../../assets/img/feedbanner.jpg";
import {CenterPositioner} from "./MainPage";
import Catagory from "../../components/main/Catagory";
import {ImagesContainer} from "../../components/main/Feed";
import ImageBox from "../../components/main/ImageBox";
import {Link} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {DELETE_LIST, LOAD_FEEDS_REQUEST} from "../../reducer/photo/actions";
import {BsArrowRight} from "react-icons/bs";
import {darken} from "polished";
import Topbtn from "../../components/common/Topbtn";
import {useState} from "react";
const wave = keyframes`
 0%{
  transform: translate(00px, 0px) scale(1);
 }
 7%{
  transform: translate(-30px, 30px) scale(0.8);
 }
 14%{
  transform: translate(-60px, 20px) scale(1.3);
 }
 21%{
  transform: translate(-90px, 50px) scale(1.2);
 }
 28%{
  transform: translate(-120px, 40px) scale(1.6);
 }
 35%{
  transform: translate(-150px, 70px) scale(1.4);
 }
 42%{
  transform: translate(-180px, 60px) scale(1.9);
 }
 49%{
  transform: translate(-210px, 90px) scale(1.8);
 }
 56%{
  transform: translate(-240px, 80px) scale(2.2);
 }
 63%{
  transform: translate(-270px, 0px) scale(2.0);
 }
 70%{
  transform: translate(-320px, 100px) scale(2.3);
 }
 85%{
  transform: translate(-320px, 00px) scale(3) rotate(200deg);
 }

 100%{
  transform: translate(-320px, 100px) scale(2.3) rotate(360deg);
 }
`;
export const Button = styled.button`
  background: #001c67;
  color: white;
  font-size: 35px;
  padding: 7px 12px;
  outline: none;
  border-radius: 5px;
  border: none;
  margin-bottom: 30px;
  cursor: pointer;
  &:hover {
    span {
      animation: ${wave} 2.4s ease-in-out forwards alternate;
    }
  }
  span {
    transition: all 1s;
    display: inline-block;
  }
`;
export const SmallBtn = styled.div`
  cursor: pointer;
  background: #006064;
  outline: none;
  border-radius: 5px;
  border: none;
  color: white;
  font-size: 18px;
  padding: 8px 22px;
  &:hover {
    background: ${darken(0.1, "#006064")};
  }
  ${(props) =>
    props.outline &&
    css`
      color: #006064;
      background: #fff;
      border: 1px solid #006064;
      &:hover {
        background: ${darken(0.1, "#fff")};
      }
    `}
`;
export const BannerContents = styled.div`
  display: flex;
  height: 100%;
  align-items: center;
  justify-content: center;
  gap: 500px;
  section {
    display: flex;
    flex-direction: column;
    justify-content: center;
    div {
      display: flex;
      gap: 30px;
      width: 100%;
    }
    h1 {
      display: flex;
      align-items: center;
      font-size: 60px;
      margin-bottom: 30px;
      font-weight: 400;
      color: #fff;
      i {
        font-size: 70px;
        height: 65px;
        color: yellow;
      }
    }
    p {
      color: #fff;
      font-size: 18px;
    }
  }
`;
const Banner = styled(BannerBox)`
  background-image: url(${BANNERIMG});
  background-size: cover;
  background-position: 0 0;
`;
export default function PicfeedPage() {
  const [catagoryState, setCatagoryState] = useState(5);
  const dispatch = useDispatch();
  const {FeedList, loadPhotoListLoading} = useSelector((state) => state.photo);
  const lastId = FeedList[FeedList.length - 1]?.id;
  useEffect(() => {
    dispatch({type: DELETE_LIST});
    dispatch({type: LOAD_FEEDS_REQUEST, data: {cata: catagoryState}});
  }, [dispatch, catagoryState]);

  useEffect(() => {
    const onScroll = () => {
      if (
        !loadPhotoListLoading &&
        window.pageYOffset + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300
      ) {
        dispatch({
          type: LOAD_FEEDS_REQUEST,
          data: {cata: catagoryState, lastId},
        });
      }
    };
    window.addEventListener("scroll", onScroll);
    return () => {
      window.removeEventListener("scroll", onScroll);
    };
  }, [catagoryState, dispatch, lastId, loadPhotoListLoading]);

  return (
    <Layout>
      <div id="top"></div>
      <Banner>
        <BannerContents>
          <section>
            <h1>
              Let's WAVE
              <i>
                <BsArrowRight />
              </i>
            </h1>
            <p>랜덤한 작가의 페이지로 이동합니다.</p>
          </section>
          <section>
            <Button>
              {/* eslint-disable-next-line */}
              <span role="img">🏄🏻‍♀️</span>SHAKE PIC
            </Button>
            <div>
              <SmallBtn outline>PROFILE</SmallBtn>
              <SmallBtn>MYPAGE</SmallBtn>
            </div>
          </section>
        </BannerContents>
      </Banner>
      <CenterPositioner>
        <h3>PICFEED</h3>
      </CenterPositioner>
      <Catagory changeCata={setCatagoryState} state={catagoryState} />
      <ImagesContainer>
        {FeedList.map((v) => (
          <Link to="#" key={v.id}>
            <ImageBox image={v} />
          </Link>
        ))}
      </ImagesContainer>
      <a href="#top">
        <Topbtn>TOP</Topbtn>
      </a>
    </Layout>
  );
}
