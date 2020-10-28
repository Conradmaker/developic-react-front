import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import styled from "styled-components";
import {LOAD_FEEDS_REQUEST} from "../../reducer/photo/actions";
import Preloader from "../../assets/img/preloader.gif";
import ImageBox from "./ImageBox";
import {Link} from "react-router-dom";
import {PreloaderContainer} from "../../pages/main/MainPage";

export const ImagesContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  columns: 3;
  gap: 50px;
`;

export default function Feed({feed}) {
  const {loadPhotoListLoading} = useSelector((state) => state.photo);
  if (loadPhotoListLoading)
    return (
      <PreloaderContainer>
        <img src={Preloader} alt="로딩중" />
      </PreloaderContainer>
    );
  return (
    <>
      <ImagesContainer>
        {feed &&
          feed.map(
            (v, i) =>
              i < 10 && (
                <Link to={`/detail/${v.id}`} key={v.id}>
                  <ImageBox image={v} />
                </Link>
              )
          )}
      </ImagesContainer>
      {/* <Buttons color="gray" outline onClick={loadMore}>
        LOADMORE
        <BsArrowRight />
      </Buttons> */}
    </>
  );
}
