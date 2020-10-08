import React, { useState } from "react";
import styled from "styled-components";
import Header from "./Header";
import Navigation from "./Navigation";
import SearchForm from "./SearchForm";

const Positioner = styled.div`
  background: #fff;
  margin: 90px auto;
  padding: 40px 0;
  box-sizing: border-box;
  width: 1300px;
  box-shadow: 0 0 30px #737373;
  position: relative;
`;

export default function Layout({ children }) {
  const [searchOpen, setSearchOpen] = useState(false);
  return (
    <>
      <SearchForm toggle={setSearchOpen} open={searchOpen} />
      <Header toggle={setSearchOpen} open={searchOpen}></Header>
      <Positioner>
        <Navigation />
        {children}
      </Positioner>
    </>
  );
}
