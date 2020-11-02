import React from "react";
import {GoTriangleRight} from "react-icons/go";
import {NavLink} from "react-router-dom";
import {NavBox} from "../about/LeftNavi";

export default function MyPageNavi() {
  return (
    <NavBox>
      <NavLink
        to="/mypage/userinfo"
        activeStyle={{textDecoration: "underline"}}
      >
        <li>
          <GoTriangleRight />
          개인정보수정
        </li>
      </NavLink>
      <NavLink to="/mypage/like" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          좋아요목록
        </li>
      </NavLink>
      <NavLink to="/mypage/buy" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          구매내역
        </li>
      </NavLink>
      <NavLink to="/mypage/cart" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          장바구니
        </li>
      </NavLink>
      <NavLink to="/mypage/apply" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          작가신청결과
        </li>
      </NavLink>
      <NavLink to="/mypage/sale" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          판매내역
        </li>
      </NavLink>
      <NavLink to="/mypage/comment" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          작성댓글목록
        </li>
      </NavLink>
      <NavLink to="/mypage/qna" activeStyle={{textDecoration: "underline"}}>
        <li>
          <GoTriangleRight />
          1:1문의내역
        </li>
      </NavLink>
    </NavBox>
  );
}
