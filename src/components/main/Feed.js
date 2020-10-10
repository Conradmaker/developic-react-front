import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import styled from "styled-components";
import { LOAD_FEEDS_REQUEST } from "../../reducer/photo";
import Preloader from "../../assets/img/preloader.gif";
import ImageBox from "./ImageBox";
import { Link } from "react-router-dom";
import Buttons from "../common/Buttons";

const ImagesContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  columns: 3;
  gap: 50px;
`;

export default function Feed() {
  const dispatch = useDispatch();
  const { PicFeedList, loadFeedsLoading, loadFeedsError } = useSelector(
    (state) => state.photo
  );
  useEffect(() => {
    dispatch({ type: LOAD_FEEDS_REQUEST });
  }, [dispatch]);
  const loadMore = useCallback(() => {
    dispatch({ type: LOAD_FEEDS_REQUEST });
  }, [dispatch]);
  //if (loadFeedsLoading) return <img src={Preloader} alt="" srcset="" />;
  return (
    <>
      <ImagesContainer>
        {PicFeedList.map((v) => (
          <Link to="#">
            <ImageBox image={v} key={v.id} />
          </Link>
        ))}
      </ImagesContainer>
      <Buttons color="gray" outline onClick={loadMore}>
        더보기
      </Buttons>
    </>
  );
}
