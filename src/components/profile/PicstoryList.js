import React, {useState} from "react";
import styled from "styled-components";
import PicstoryItem from "./PicstoryItem";
import {useSelector} from "react-redux";
import {IoIosArrowBack} from "react-icons/io";
import Feed from "../main/Feed";
const ListMenu = styled.div`
  height: 40px;
  width: 100%;
  display: flex;
  justify-content: space-between;
  align-items: center;
  h1 {
    font-size: 28px;
    font-weight: bold;
  }
  span {
    font-size: 25px;
    cursor: pointer;
  }
`;
const ListContainer = styled.div`
  width: 1100px;
  margin: 0 auto;
  display: flex;
  gap: 100px;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  section {
    width: 45%;
  }
`;

const PicstoryList = () => {
  const {FeedList} = useSelector((state) => state.photo);
  const [detail, setDetail] = useState(false);
  const onDetail = (id) => {
    console.log(id);
    setDetail(id);
  };
  const onBackList = () => {
    setDetail(false);
  };
  return (
    <ListContainer>
      {!detail ? (
        FeedList.map((v) => (
          <section onClick={() => onDetail(v.id)}>
            <PicstoryItem key={v.id} v={v} />
          </section>
        ))
      ) : (
        <>
          <ListMenu>
            <h1>픽스토리제목</h1>
            <span onClick={onBackList}>
              <IoIosArrowBack />
              BACK
            </span>
          </ListMenu>
          <Feed />
        </>
      )}
    </ListContainer>
  );
};

export default PicstoryList;
