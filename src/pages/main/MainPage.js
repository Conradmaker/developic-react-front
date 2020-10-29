import React from "react";
import {BsArrowRight} from "react-icons/bs";
import Buttons from "../../components/common/Buttons";
import Banner from "../../components/main/Banner";
import Feed from "../../components/main/Feed";
import styled from "styled-components";
import Ad from "../../assets/img/띠배너2.jpg";
import Shop from "../../components/main/Shop";
import {Link} from "react-router-dom";
import Layout from "../../components/common/Layout";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_MAINS_REQUEST} from "../../reducer/photo/actions";

export const CenterPositioner = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;
const AdBanner = styled.div`
  width: 100%;
  position: relative;
  margin: 50px 0;
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
  const dispatch = useDispatch();
  const {me} = useSelector((state) => state.user);
  const {MainList} = useSelector((state) => state.photo);
  useEffect(() => {
    dispatch({type: LOAD_MAINS_REQUEST});
  }, [dispatch]);
  const {feed, shop} = MainList;
  return (
    <Layout>
      <Banner me={me} />
      <CenterPositioner>
        <h3>PICFEED</h3>
      </CenterPositioner>
      <Feed feed={feed} />
      <CenterPositioner>
        <Link to="/picfeed">
          <Buttons color="gray" outline>
            PICFEED
            <BsArrowRight />
          </Buttons>
        </Link>
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
      <Shop shop={shop} />
      <CenterPositioner>
        <Link to="/picshop">
          <Buttons color="gray" outline>
            PICSHOP
            <BsArrowRight />
          </Buttons>
        </Link>
      </CenterPositioner>
    </Layout>
  );
}
