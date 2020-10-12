import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Layout from "./components/common/Layout";
import { Route } from "react-router-dom";
import MainPage from "./pages/main/MainPage.js";
import LoginPage from "./pages/main/LoginPage";
import AboutPage from "./pages/main/AboutPage";

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
      <Layout>
        <Route path="/" component={MainPage} exact />
        <Route path="/about" component={AboutPage} exact />
      </Layout>
      <Route path="/login" component={LoginPage} exact />
    </ThemeProvider>
  );
}

export default App;
