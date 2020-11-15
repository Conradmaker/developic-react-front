import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import Label from "../../components/common/Label";
import LikeItem, {ItemContainer} from "../../components/mypage/LikeItem";
import {LOAD_LIKE_LIST_REQUEST} from "../../reducer/mypage";
import {InfoContainer} from "./UserInfo";

export default function LikeList() {
  const dispatch = useDispatch();
  const {loadLikeListSuccess} = useSelector((state) => state.mypage);
  useEffect(() => {
    dispatch({type: LOAD_LIKE_LIST_REQUEST});
  }, [dispatch]);
  return (
    <InfoContainer>
      <Label>좋아요 목록</Label>
      <ItemContainer>
        {loadLikeListSuccess &&
          loadLikeListSuccess.map((v) => <LikeItem key={v.id} item={v} />)}
      </ItemContainer>
    </InfoContainer>
  );
}
