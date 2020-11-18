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
import {DELETE_LIST, LOAD_SHOPS_REQUEST} from "../../reducer/photo/actions";
import Topbtn from "../../components/common/Topbtn";
import {BannerContents, Button, SmallBtn} from "./PicfeedPage";
import ShopImageBox from "../../components/main/ShopImageBox";
import {Link} from "react-router-dom";
import {Helmet} from "react-helmet";
const Banner = styled(BannerBox)`
  background-image: url(${BANNERIMG});
  background-size: cover;
  background-position: 0 0;
`;
export default function PicShopPage() {
  const [catagoryState, setCatagoryState] = useState(5);
  const dispatch = useDispatch();
  const {me} = useSelector((state) => state.user);
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
    <>
      <Helmet>
        <title>asdasd222</title>
      </Helmet>
      <Layout>
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
              {me ? (
                <div>
                  <Link to={`/profile/${me.id}`}>
                    <SmallBtn outline>PROFILE</SmallBtn>
                  </Link>
                  <Link to={``}>
                    <SmallBtn>MYPAGE</SmallBtn>
                  </Link>
                </div>
              ) : (
                <div>
                  <Link to={`/login/1`}>
                    <SmallBtn outline>SIGNUP</SmallBtn>
                  </Link>
                  <Link to={`/login/2`}>
                    <SmallBtn>LOGIN</SmallBtn>
                  </Link>
                </div>
              )}
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
        <a href="#">
          <Topbtn>TOP</Topbtn>
        </a>
      </Layout>
    </>
  );
}
