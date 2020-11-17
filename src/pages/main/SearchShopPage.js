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
import {DELETE_LIST, LOAD_SEARCH_REQUEST} from "../../reducer/photo/actions";
import Topbtn from "../../components/common/Topbtn";
import ShopImageBox from "../../components/main/ShopImageBox";
import {SearchTitle} from "./SearchFeedPage";

export default function SearchShopPage({match}) {
  const dispatch = useDispatch();
  const {SearchList, loadPhotoListLoading} = useSelector(
    (state) => state.photo
  );
  useEffect(() => {
    dispatch({type: DELETE_LIST});
    dispatch({
      type: LOAD_SEARCH_REQUEST,
      data: {sale: true, text: match.params.text},
    });
  }, [dispatch, match.params.text]);
  return (
    <Layout>
      <SearchTitle>
        <span>
          <strong>{match.params.text}</strong>에 대한 검색결과는
          <strong>{SearchList[0] ? SearchList.length : 0}개</strong>입니다.
        </span>
      </SearchTitle>
      <CenterPositioner>
        <h3>PICSHOP</h3>
      </CenterPositioner>
      <ShopCardContainer>
        {SearchList &&
          SearchList.map((v) => <ShopImageBox image={v} key={v.id} />)}
      </ShopCardContainer>
      <a href="#">
        <Topbtn>TOP</Topbtn>
      </a>
    </Layout>
  );
}
