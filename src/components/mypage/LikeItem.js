import React, {useCallback} from "react";
import styled from "styled-components";
import IMG from "../../assets/img/avatarsample.png";
import {FaRegTimesCircle} from "react-icons/fa";
import {useState} from "react";
import DeleteLike from "../modal/mypage/DeleteLike";
import {useDispatch} from "react-redux";
import {DELETE_LIKE_LIST_REQUEST} from "../../reducer/mypage";
const Summary = styled.div`
  flex: 1;
  padding: 10px 0;
  font-weight: bold;
  div {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin: 10px 0;
    span {
      font-size: 14px;
      color: #999;
      height: 20px;
      &::before {
        content: "BY ";
      }
    }
    i {
      height: 20px;
      width: 20px;
      display: none;
      font-size: 19px;
      color: orangered;
      cursor: pointer;
    }
  }
`;
const ImgBox = styled.div`
  width: 100%;
  height: 190px;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #eee;
  img {
    max-width: 97%;
    max-height: 97%;
    transition: all 0.3s;
    cursor: pointer;
    &:hover {
      transform: translateY(-10px);
      box-shadow: 0 10px 10px gray;
    }
  }
`;
const ItemBox = styled.div`
  width: 30%;
  height: 250px;

  margin-bottom: 20px;
  display: flex;
  flex-direction: column;
  &:hover {
    i {
      display: flex;
    }
  }
`;
export const ItemContainer = styled.div`
  width: 100%;
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
`;

export default function LikeItem({item}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const onLikeDelete = useCallback(() => {
    dispatch({type: DELETE_LIKE_LIST_REQUEST, data: item.id});
    setOpen(false);
  }, [dispatch, item.id]);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <ItemBox>
        <ImgBox>
          <img
            src={`http://localhost:3030/${item.image_src}`}
            alt={item.image_src}
          />
        </ImgBox>
        <Summary>
          <h2>{item.name}</h2>
          <div>
            <span>{item.User.nickname}</span>
            <i onClick={() => setOpen(true)}>
              <FaRegTimesCircle />
            </i>
          </div>
        </Summary>
      </ItemBox>
      {open && (
        <DeleteLike close={close} open={open} onLikeDelete={onLikeDelete} />
      )}
    </>
  );
}
