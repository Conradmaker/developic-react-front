import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LOAD_FEEDS_REQUEST } from "../../reducer/photo";
import Preloader from "../../assets/img/preloader.gif";

const ImagesContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  columns: 3;
  gap: 50px;
  figure {
    margin-bottom: 30px;
    position: relative;
    img {
      width: 100%;
    }
    img:hover + i,
    i:hover {
      display: initial;
    }
    i {
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      right: 0;
      top: 0;
      bottom: 0;
      left: 0;
      display: none;
    }
  }
`;

export default function Feed() {
  const dispatch = useDispatch();
  const { PicFeedList, loadFeedsLoading, loadFeedsError } = useSelector(
    (state) => state.photo
  );
  useEffect(() => {
    dispatch({ type: LOAD_FEEDS_REQUEST });
  }, [dispatch]);
  if (loadFeedsLoading) return <img src={Preloader} alt="" srcset="" />;
  return (
    <>
      <ImagesContainer>
        {PicFeedList.map((v) => (
          <figure>
            <img src={v.src} alt={v.name}></img>
            <i></i>
          </figure>
        ))}
      </ImagesContainer>
    </>
  );
}
