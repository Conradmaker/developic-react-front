import React from "react";
import { Link } from "react-router-dom";
import styled, { css } from "styled-components";
import { FaFacebookF, FaInstagram, FaTwitter } from "react-icons/fa";
import { darken } from "polished";
const Btn = styled.div`
  width: 50px;
  height: 50px;
  display: flex;
  align-items: center;
  justify-content: center;
  background: #006064;
  color: white;
  i {
    font-size: 30px;
  }
  &:hover {
    background: ${darken(0.05, "#006064")};
  }
  ${(props) =>
    props.yellow &&
    css`
      background: #ffca3e;
      &:hover {
        background: ${darken(0.1, "#ffca3e")};
      }
    `}
`;
const BtnBox = styled.div`
  display: flex;
`;

export default function SnsBtn() {
  return (
    <BtnBox>
      <Link to="#">
        <Btn>
          <i>
            <FaFacebookF />
          </i>
        </Btn>
      </Link>
      <Link to="#">
        <Btn yellow>
          <i>
            <FaInstagram />
          </i>
        </Btn>
      </Link>
      <Link to="#">
        <Btn>
          <i>
            <FaTwitter />
          </i>
        </Btn>
      </Link>
    </BtnBox>
  );
}
