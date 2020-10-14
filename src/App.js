import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import { Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage.js";
import AboutPage from "./pages/main/AboutPage";
import LogIn from "./components/login/LogIn";
import PicfeedPage from "./pages/main/PicfeedPage.js";
import PicShopPage from "./pages/main/PicShopPage.js";

const GlobalStyle = createGlobalStyle`
body{
  background:#FFCA3E;
}
h3{
  font-size:23px;
  font-weight:bold;
}
a{
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
      <Route path="/login" component={LogIn} exact />
    </ThemeProvider>
  );
}

export default App;
