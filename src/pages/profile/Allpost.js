import React from "react";
import Layout from "../../components/common/Layout";
import Title from "../../components/common/Title";
import styled, { css } from "styled-components";
import UserInfo from "../../components/profile/UserInfo";
import Feed from "../../components/main/Feed";
import { useState } from "react";
import PicstoryList from "../../components/profile/PicstoryList";

const Catagory = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 70px auto;
  span {
    font-size: 25px;
    margin: 0 20px;
    cursor: pointer;
  }
  ${(props) =>
    props.link === "allpost" &&
    css`
      span:nth-child(1) {
        border-bottom: 2px solid #ffca3e;
      }
    `}
  ${(props) =>
    props.link === "picstory" &&
    css`
      span:nth-child(2) {
        border-bottom: 2px solid #ffca3e;
      }
    `}
`;
const ProfileContainer = styled.div`
  width: 1100px;
  margin: 40px auto;
`;
export default function Allpost() {
  const [link, setLink] = useState("allpost");
  return (
    <Layout>
      <ProfileContainer>
        <Title>Profile</Title>
        <UserInfo />
        <Catagory link={link}>
          <span onClick={() => setLink("allpost")}>ALL&nbsp;POST</span>
          <span onClick={() => setLink("picstory")}>PICSTORY</span>
        </Catagory>
      </ProfileContainer>
      {link === "allpost" && <Feed />}
      {link === "picstory" && <PicstoryList />}
    </Layout>
  );
}
