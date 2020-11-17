import React from "react";
import {ThemeProvider, createGlobalStyle} from "styled-components";
import {Route} from "react-router-dom";
import MainPage from "./pages/main/MainPage.js";
import AboutPage from "./pages/main/AboutPage";
import PicfeedPage from "./pages/main/PicfeedPage.js";
import PicShopPage from "./pages/main/PicShopPage.js";
import LoginPage from "./pages/main/LoginPage.js";
import Allpost from "./pages/profile/Allpost.js";
import DetailPage from "./pages/photo/DetailPage";
import EditPage from "./pages/profile/EditPage.js";
import "../node_modules/react-draft-wysiwyg/dist/react-draft-wysiwyg.css";
import MyPage from "./pages/mypage/Mypage.js";
import SearchFeedPage from "./pages/main/SearchFeedPage.js";
import SearchShopPage from "./pages/main/SearchShopPage.js";

const GlobalStyle = createGlobalStyle`
html{
  scroll-behavior:smooth;
}
body{
  background:#FFCA3E;
}
h3{
  font-size:23px;
  font-weight:bold;
}
a{
  color:black;
  text-decoration:none;
}
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        pallete: {
          black: "#000",
          yellow: "#FFCA3E",
          green: "#006064",
          pink: "#ED8074",
          gray: "#707070",
        },
      }}
    >
      <GlobalStyle />
      <Route path="/" component={MainPage} exact />
      <Route path="/picfeed" component={PicfeedPage} exact />
      <Route path="/picfeed/:text" component={SearchFeedPage} exact />
      <Route path="/picshop" component={PicShopPage} exact />
      <Route path="/picshop/:text" component={SearchShopPage} exact />
      <Route path="/about" component={AboutPage} exact />
      <Route path="/login/:sl" component={LoginPage} exact />
      <Route path="/profile/:id" component={Allpost} exact />
      <Route path="/detail/:id" component={DetailPage} exact />
      <Route path="/edit" component={EditPage} exact />
      <Route path="/mypage" component={MyPage} />
    </ThemeProvider>
  );
}

export default App;
