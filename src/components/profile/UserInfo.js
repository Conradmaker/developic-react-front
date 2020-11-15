import React from "react";
import styled from "styled-components";
import Avatar from "./Avatar";
import SnsBtn from "./SnsBtn";
import UserSummary from "./UserSummary";
const RightInfo = styled.div`
  flex: 1;
`;
const LeftInfo = styled.div`
  display: flex;
  align-items: center;
  flex-direction: column;
  flex: 1;
  h1 {
    font-size: 27px;
    margin-top: 20px;
  }
  p {
    margin: 20px 0;
    font-size: 17px;
  }
`;
const ProfileBox = styled.div`
  display: flex;
  width: 100%;
  margin: 30px auto;
  height: 400px;
`;
export default function UserInfo({profile, photos}) {
  return (
    <ProfileBox>
      <LeftInfo>
        <Avatar src={profile && profile.avatar} />
        <h1>{profile && profile.nickname}</h1>
        <p>{profile && profile.email}</p>
        <SnsBtn />
      </LeftInfo>
      <RightInfo>
        <UserSummary profile={profile} photos={photos} />
      </RightInfo>
    </ProfileBox>
  );
}
