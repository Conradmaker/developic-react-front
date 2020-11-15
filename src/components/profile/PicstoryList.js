import React, {useState} from "react";
import styled from "styled-components";
import PicstoryItem from "./PicstoryItem";
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

const PicstoryList = ({picstory}) => {
  const [detail, setDetail] = useState(false);
  const onDetail = (index) => {
    setDetail(index);
  };
  const onBackList = () => {
    setDetail(false);
  };
  return (
    <ListContainer>
      {!detail ? (
        picstory.map((v, i) => (
          <section onClick={() => onDetail(i)}>
            <PicstoryItem key={v.id} v={v} />
          </section>
        ))
      ) : (
        <>
          <ListMenu>
            <h1>{picstory[detail].name}</h1>
            <span onClick={onBackList}>
              <IoIosArrowBack />
              BACK
            </span>
          </ListMenu>
          <Feed feed={picstory[detail].Photos} />
        </>
      )}
    </ListContainer>
  );
};

export default PicstoryList;
