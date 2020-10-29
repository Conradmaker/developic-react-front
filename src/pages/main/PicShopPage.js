import React, {useState} from "react";
import Layout from "../../components/common/Layout";
import {BannerBox} from "../../components/main/Banner";
import styled from "styled-components";
import BANNERIMG from "../../assets/img/picshopbanner.jpg";
import {CenterPositioner} from "./MainPage";
import {ShopCardContainer} from "../../components/main/Shop";
import Catagory from "../../components/main/Catagory";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {
  DELETE_LIST,
  LOAD_FEEDS_REQUEST,
  LOAD_SHOPS_REQUEST,
} from "../../reducer/photo/actions";
import Topbtn from "../../components/common/Topbtn";
import {BannerContents, Button, SmallBtn} from "./PicfeedPage";
import ShopImageBox from "../../components/main/ShopImageBox";
const Banner = styled(BannerBox)`
  background-image: url(${BANNERIMG});
  background-size: cover;
  background-position: 0 0;
`;
export default function PicShopPage() {
  const [catagoryState, setCatagoryState] = useState(5);
  const dispatch = useDispatch();
  const {ShopList, loadPhotoListLoading} = useSelector((state) => state.photo);
  useEffect(() => {
    dispatch({type: DELETE_LIST});
    dispatch({type: LOAD_SHOPS_REQUEST, data: {cata: catagoryState}});
  }, [catagoryState, dispatch]);
  const lastId = ShopList[ShopList.length - 1]?.id;
  useEffect(() => {
    const onScroll = () => {
      if (
        !loadPhotoListLoading &&
        window.pageYOffset + document.documentElement.clientHeight >
          document.documentElement.scrollHeight - 300
      ) {
        dispatch({
          type: LOAD_SHOPS_REQUEST,
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
            <h1>PICSHOP</h1>
            <p>Welcome to PICTURE forest</p>
          </section>
          <section>
            <Button style={{opacity: "0"}}>
              <span></span>
            </Button>
            <div>
              <SmallBtn outline>PROFILE</SmallBtn>
              <SmallBtn>MYPAGE</SmallBtn>
            </div>
          </section>
        </BannerContents>
      </Banner>
      <CenterPositioner>
        <h3>PICSHOP</h3>
      </CenterPositioner>
      <Catagory changeCata={setCatagoryState} state={catagoryState} />
      <ShopCardContainer>
        {ShopList.map((v) => (
          <ShopImageBox image={v} key={v.id} />
        ))}
      </ShopCardContainer>
      <a href="#top">
        <Topbtn>TOP</Topbtn>
      </a>
    </Layout>
  );
}
