import React from "react";
import styled from "styled-components";

const ImgWrapper = styled.div`
  width: 50%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;

  img {
    transition: all 0.2s ease;
    max-width: 100%;
    max-height: 195px;
  }
`;
const Summary = styled.div`
  width: 45%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  h1 {
    transition: all 0.2s ease;
    font-size: 25px;
    margin-bottom: 25px;
  }
  p {
    transition: all 0.2s ease;
    font-size: 17px;
    align-self: flex-end;
  }
`;
const ItemBox = styled.div`
  background: #fff6f4;
  width: 100%;
  height: 150px;
  display: flex;
  align-items: center;
  padding: 0 5px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.2s ease;
  &:hover {
    border-radius: 10px;
    height: 100px;
    box-shadow: 0 0 15px gray;
    h1 {
      text-shadow: 0 5px 10px gray;
    }
    img {
      box-shadow: 0 5px 10px gray;
    }
    p {
      text-shadow: 0 5px 10px gray;
    }
  }
`;

const PicstoryItem = ({v}) => {
  console.log(v);
  return (
    <ItemBox>
      <ImgWrapper>
        {v.Photos[0] ? (
          <img
            src={`http://localhost:3030/${v.Photos[0].image_src}`}
            alt={v.id}
          />
        ) : (
          <h1>빈 픽스토리 입니다.</h1>
        )}
      </ImgWrapper>
      <Summary>
        <h1>{v.name}</h1>
        <p>2020-01-10</p>
      </Summary>
    </ItemBox>
  );
};
export default PicstoryItem;
