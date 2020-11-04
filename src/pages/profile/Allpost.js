import React, {useEffect} from "react";
import Layout from "../../components/common/Layout";
import Title from "../../components/common/Title";
import styled, {css} from "styled-components";
import UserInfo from "../../components/profile/UserInfo";
import Feed from "../../components/main/Feed";
import {useState} from "react";
import PicstoryList from "../../components/profile/PicstoryList";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_PROFILE_REQUEST} from "../../reducer/user";

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
export default function Allpost({match}) {
  const dispatch = useDispatch();
  const {profile} = useSelector((state) => state.user);
  const {id} = match.params;
  const [link, setLink] = useState("allpost");
  console.log(profile);
  useEffect(() => {
    dispatch({type: LOAD_PROFILE_REQUEST, data: {userId: id}});
  }, [dispatch, id]);
  if (!id) return null;
  return (
    <Layout>
      <ProfileContainer>
        <Title>Profile</Title>
        <UserInfo
          profile={profile && profile.profile}
          photos={profile && profile.userPhotos}
        />
        <Catagory link={link}>
          <span onClick={() => setLink("allpost")}>ALL&nbsp;POST</span>
          <span onClick={() => setLink("picstory")}>PICSTORY</span>
        </Catagory>
      </ProfileContainer>
      {link === "allpost" && <Feed feed={profile && profile.userPhotos} />}
      {link === "picstory" && (
        <PicstoryList picstory={profile && profile.picstory} />
      )}
    </Layout>
  );
}
