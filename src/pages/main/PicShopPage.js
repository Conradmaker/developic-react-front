import React from "react";
import Layout from "../../components/common/Layout";
import { BannerBox } from "../../components/main/Banner";
import styled from "styled-components";
import BANNERIMG from "../../assets/img/picshopbanner.jpg";
import { CenterPositioner } from "./MainPage";
import { ShopCardContainer } from "../../components/main/Shop";
import Catagory from "../../components/main/Catagory";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { LOAD_FEEDS_REQUEST } from "../../reducer/photo";
import Topbtn from "../../components/common/Topbtn";
import { BannerContents, Button, SmallBtn } from "./PicfeedPage";
import ShopImageBox from "../../components/main/ShopImageBox";
const Banner = styled(BannerBox)`
  background-image: url(${BANNERIMG});
  background-size: cover;
  background-position: 0 0;
`;
export default function PicShopPage() {
  const dispatch = useDispatch();
  const { PicFeedList } = useSelector((state) => state.photo);
  useEffect(() => {
    dispatch({ type: LOAD_FEEDS_REQUEST });
  }, [dispatch]);

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
            <Button style={{ opacity: "0" }}>
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
      <Catagory></Catagory>
      <ShopCardContainer>
        {PicFeedList.map((v) => (
          <ShopImageBox image={v} key={v.id} />
        ))}
      </ShopCardContainer>
      <a href="#top">
        <Topbtn>TOP</Topbtn>
      </a>
    </Layout>
  );
}
