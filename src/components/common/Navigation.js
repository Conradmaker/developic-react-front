import React from "react";
import styled from "styled-components";
import {NavLink} from "react-router-dom";

const NavBox = styled.ul`
  width: 30%;
  height: 30px;
  margin: 0 auto;
  display: flex;
  justify-content: space-around;
  position: sticky;
  top: 30px;
  a {
    color: black;
    text-decoration: none;
  }
  li {
    font-size: 20px;
    line-height: 1.5;
    cursor: pointer;
  }
  z-index: 15;
`;

export default function Navigation() {
  return (
    <NavBox>
      <NavLink to="/picfeed" activeStyle={{borderBottom: "2px solid #ffca3e"}}>
        <li>PICFEED</li>
      </NavLink>
      <NavLink to="/picshop" activeStyle={{borderBottom: "2px solid #ffca3e"}}>
        <li>PICSHOP</li>
      </NavLink>
      <NavLink to="/about" activeStyle={{borderBottom: "2px solid #ffca3e"}}>
        <li>ABOUT</li>
      </NavLink>
    </NavBox>
  );
}
