import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage.js";
import AboutPage from "./pages/main/AboutPage";
import PicfeedPage from "./pages/main/PicfeedPage.js";
import PicShopPage from "./pages/main/PicShopPage.js";
import LoginPage from "./pages/main/LoginPage.js";
import Allpost from "./pages/profile/Allpost.js";
import DetailPage from "./pages/photo/DetailPage";

const GlobalStyle = createGlobalStyle`
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
      <Route path="/picshop" component={PicShopPage} exact />
      <Route path="/about" component={AboutPage} exact />
      <Route path="/login/:sl" component={LoginPage} exact />
      <Route path="/profile/:id" component={Allpost} exact />
      <Route path="/detail/:id" component={DetailPage} exact />
    </ThemeProvider>
  );
}

export default App;
