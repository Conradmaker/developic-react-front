import React from "react";
import { useSelector } from "react-redux";
// import { Link } from "react-router-dom";
import styled from "styled-components";
import ShopImageBox from "./ShopImageBox";

const ShopCardContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
`;

export default function Shop() {
  const { PicFeedList } = useSelector((state) => state.photo);
  return (
    <ShopCardContainer>
      {PicFeedList.map(
        (v, i) => i !== 8 && <ShopImageBox image={v} key={v.id} />
      )}
    </ShopCardContainer>
  );
}
