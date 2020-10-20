import React from "react";
import { GoTriangleRight } from "react-icons/go";
import { NavBox } from "../about/LeftNavi";

export default function LeftMenu() {
  return (
    <NavBox>
      <a href="#about-service">
        <li>
          <GoTriangleRight />
          작품정보
        </li>
      </a>
      <a href="#about-notice">
        <li>
          <GoTriangleRight />
          작가설명
        </li>
      </a>
      <a href="#about-faq">
        <li>
          <GoTriangleRight />
          COMMENT
        </li>
      </a>
      <a href="#about-faq">
        <li>
          <GoTriangleRight />
          TOP
        </li>
      </a>
    </NavBox>
  );
}
