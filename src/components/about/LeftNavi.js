import React from "react";
import styled from "styled-components";
import { GoTriangleRight } from "react-icons/go";

const NavBox = styled.ul`
  display: flex;
  flex-direction: column;
  position: sticky;
  top: 100px;
  li {
    color: #707070;
    line-height: 2.5;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export default function LeftNavi() {
  return (
    <NavBox>
      <a href="#about-service">
        <li>
          <GoTriangleRight />
          작가신청
        </li>
      </a>
      <a href="#about-notice">
        <li>
          <GoTriangleRight />
          공지사항
        </li>
      </a>
      <a href="#about-faq">
        <li>
          <GoTriangleRight />
          1:1문의
        </li>
      </a>
      <a href="#about-faq">
        <li>
          <GoTriangleRight />
          자주하는질문
        </li>
      </a>
    </NavBox>
  );
}
