import React from "react";
import {useSelector} from "react-redux";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import {PreloaderContainer} from "../../pages/main/MainPage";
import ShopImageBox from "./ShopImageBox";
import Preloader from "../../assets/img/preloader.gif";

export const ShopCardContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  a {
    width: 30%;
  }
`;

export default function Shop({shop}) {
  const {loadPhotoListLoading} = useSelector((state) => state.photo);
  if (loadPhotoListLoading)
    return (
      <PreloaderContainer>
        <img src={Preloader} alt="로딩중" />
      </PreloaderContainer>
    );
  return (
    <ShopCardContainer>
      {shop &&
        shop.map((v, i) => i < 9 && <ShopImageBox image={v} key={v.id} />)}
    </ShopCardContainer>
  );
}
