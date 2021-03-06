import React from "react";
import {useSelector} from "react-redux";
import {Route} from "react-router-dom";
import Layout from "../../components/common/Layout";
import Title from "../../components/common/Title";
import MyPageNavi from "../../components/mypage/MyPageNavi";
import {
  AboutContainer,
  HorizentalBox,
  LeftSection,
  RightSection,
} from "../main/AboutPage";
import ApplyList from "./ApplyList";
import BuyList from "./BuyList";
import Cart from "./Cart";
import Comment from "./Comment";
import LikeList from "./LikeList";
import QnaList from "./QnaList";
import SaleList from "./SaleList";
import UserInfo from "./UserInfo";

export default function MyPage() {
  const {me} = useSelector((state) => state.user);
  return (
    <Layout>
      <AboutContainer>
        <Title>MY&nbsp;PAGE</Title>
        <HorizentalBox>
          <RightSection>
            <Route path="/mypage/userinfo" component={UserInfo} />
            <Route path="/mypage/like" component={LikeList} />
            <Route path="/mypage/buy" component={BuyList} />
            <Route path="/mypage/cart" component={Cart} />
            {/* <Route path="/mypage/apply" component={ApplyList} /> */}
            <Route exact path="/mypage/apply">
              <ApplyList me={me} />
            </Route>
            <Route path="/mypage/sale" component={SaleList} />
            <Route path="/mypage/comment">
              <Comment me={me} />
            </Route>
            <Route path="/mypage/qna" component={QnaList} />
          </RightSection>
          <LeftSection>
            <MyPageNavi />
          </LeftSection>
        </HorizentalBox>
      </AboutContainer>
    </Layout>
  );
}
