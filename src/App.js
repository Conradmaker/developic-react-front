import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Layout from "./components/common/Layout";
import { Route } from "react-router-dom";
import MainPage from './pages/main/MainPage.js'

const GlobalStyle = createGlobalStyle`
body{
  background:#FFCA3E;
}
h3{
  font-size:23px;
  font-weight:bold;
}
`;

function App() {
  return (
    <ThemeProvider
      theme={{
        pallete: {
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
      </Layout>
    </ThemeProvider>
  );
}

export default App;
