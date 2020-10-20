import React from "react";
import styled from "styled-components";
import Layout from "../../components/common/Layout";
import Catagory from "../../components/main/Catagory";
import LeftMenu from "../../components/Detail/LeftMenu";
import {
  AboutContainer,
  HorizentalBox,
  LeftSection,
  RightSection,
} from "../main/AboutPage";
import Title from "../../components/common/Title";
import { IoIosArrowBack } from "react-icons/io";
import Photo from "../../components/Detail/Photo";
import Summary from "../../components/Detail/Summary";

const LeftVisual = styled.div`
  flex: 14;
`;
const RightVisual = styled.div`
  flex: 7;
`;
const Visual = styled.div`
  height: 400px;
  display: flex;
  gap: 70px;
`;
const PageTitle = styled.div`
  width: 100%;
  height: 100px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  span {
    cursor: pointer;
    font-size: 22px;
    font-weight: bold;
    display: flex;
    align-items: center;
  }
`;

export default function DetailPage() {
  return (
    <Layout>
      <AboutContainer>
        <HorizentalBox>
          <RightSection>
            <PageTitle>
              <Title>DETAIL</Title>
              <span>
                <IoIosArrowBack />
                BACK
              </span>
            </PageTitle>
            <Visual>
              <LeftVisual>
                <Photo />
              </LeftVisual>
              <RightVisual>
                <Summary />
              </RightVisual>
            </Visual>
          </RightSection>
          <LeftSection>
            <LeftMenu />
          </LeftSection>
        </HorizentalBox>
      </AboutContainer>
    </Layout>
  );
}
