import React from "react";
import { ThemeProvider, createGlobalStyle } from "styled-components";
import Buttons from "./components/common/Buttons";
import Layout from "./components/common/Layout";
import { Route } from "react-router-dom";

const GlobalStyle = createGlobalStyle`
body{
  background:#FFCA3E;
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
        <Route path="/" component={null} exact />
      </Layout>
    </ThemeProvider>
  );
}

export default App;
