import React from "react";
import LogIn from "../../components/login/LogIn";
import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100%;
  align-items: center;
  background-color: #e9e9e9;
  background: url("https://res.cloudinary.com/dbhnlktrv/image/upload/v1599997626/background_oeuhe7.jpg");
  background-attachment: fixed;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  display: grid;
  height: 100vh;
  place-items: center;
`;
export default function LoginPage() {
  return <LogIn></LogIn>;
}
