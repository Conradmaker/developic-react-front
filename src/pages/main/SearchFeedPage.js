import React from "react";
import {useDispatch, useSelector} from "react-redux";
import {Link} from "react-router-dom";
import Layout from "../../components/common/Layout";
import Topbtn from "../../components/common/Topbtn";
import {ImagesContainer} from "../../components/main/Feed";
import ImageBox from "../../components/main/ImageBox";
import styled from "styled-components";
import {useEffect} from "react";
import {DELETE_LIST, LOAD_SEARCH_REQUEST} from "../../reducer/photo/actions";

export const SearchTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: center;
  span {
    font-size: 20px;
    strong {
      font-size: 21px;
      font-weight: bold;
    }
  }
`;

export default function SearchFeedPage({match}) {
  const dispatch = useDispatch();
  console.log(match.params.text);
  useEffect(() => {
    dispatch({type: DELETE_LIST});
    dispatch({
      type: LOAD_SEARCH_REQUEST,
      data: {sale: false, text: match.params.text},
    });
  }, [dispatch, match.params.text]);
  const {SearchList, loadPhotoListLoading} = useSelector(
    (state) => state.photo
  );
  return (
    <>
      <Layout>
        <SearchTitle>
          <span>
            <strong>{match.params.text}</strong>에 대한 검색결과는
            <strong>{SearchList[0] ? SearchList.length : 0}개</strong>입니다.
          </span>
        </SearchTitle>
        <ImagesContainer>
          {SearchList[0] &&
            SearchList.map((v) => (
              <Link to={`/detail/${v.id}`} key={v.id}>
                <ImageBox image={v} />
              </Link>
            ))}
        </ImagesContainer>
        <a href="#">
          <Topbtn>TOP</Topbtn>
        </a>
      </Layout>
    </>
  );
}
