import React from "react";
import { BsArrowRight } from "react-icons/bs";
import Buttons from "../../components/common/Buttons";
import Banner from "../../components/main/Banner";
import Feed from "../../components/main/Feed";
import styled from "styled-components";
import Ad from "../../assets/img/띠배너2.jpg";
import { useSelector } from "react-redux";
import Shop from "../../components/main/Shop";

const CenterPositioner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;
const AdBanner = styled.div`
  width: 100%;
  position: relative;
  &:hover i,
  i:hover {
    display: flex;
  }
  img {
    width: 100%;
  }
  i {
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.3);
    align-items: center;
    justify-content: center;
    display: none;
    cursor: pointer;
    h5 {
      font-size: 25px;
      color: #fff;
    }
  }
`;
export const PreloaderContainer = styled.div`
  width: 100%;
  height: 200px;
  display: flex;
  align-items: center;
  justify-content: center;
`;
export default function MainPage() {
  const { PicFeedList } = useSelector((state) => state.photo);
  return (
    <>
      <Banner />
      <CenterPositioner>
        <h3>PICFEED</h3>
      </CenterPositioner>
      <Feed />
      <CenterPositioner>
        <Buttons color="gray" outline>
          PICFEED
          <BsArrowRight />
        </Buttons>
      </CenterPositioner>
      <AdBanner>
        <img src={Ad} alt="광고" />
        <i>
          <h5>
            MORE
            <BsArrowRight />
          </h5>
        </i>
      </AdBanner>
      <CenterPositioner>
        <h3>PICSHOP</h3>
      </CenterPositioner>
      <Shop />
      <CenterPositioner>
        <Buttons color="gray" outline>
          PICSHOP
          <BsArrowRight />
        </Buttons>
      </CenterPositioner>
    </>
  );
}
