import React from "react";
import {useSelector} from "react-redux";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ShopImageBox from "./ShopImageBox";

export const ShopCardContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Shop() {
  const {FeedList} = useSelector((state) => state.photo);
  return (
    <ShopCardContainer>
      {FeedList.map((v, i) => i < 9 && <ShopImageBox image={v} key={v.id} />)}
    </ShopCardContainer>
  );
}
