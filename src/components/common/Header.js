import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import IMG from "../../assets/img/logo.png";
import {MdSearch} from "react-icons/md";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_MY_INFO_REQUEST, LOG_OUT_REQUEST} from "../../reducer/user";
import {useEffect} from "react";

const Rightmenu = styled.ul`
  display: flex;
  align-items: center;
  color: #006064;
  font-size: 20px;
  a {
    text-decoration: none;
    margin-right: 20px;
  }
  i {
    font-size: 27px;
    cursor: pointer;
    z-index: 9999;
  }
`;

const HeaderContainer = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  z-index: 10;
`;
const HeaderBox = styled.div`
  width: 1300px;
  margin: 0 auto;
  height: 90px;
  box-sizing: border-box;
  padding: 0 50px;
  display: flex;
  align-content: center;
  justify-content: space-between;
  a {
    display: flex;
    align-items: center;
  }
`;

export default function Header({toggle, open}) {
  const {me} = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const onLogOut = () => {
    dispatch({type: LOG_OUT_REQUEST});
  };
  useEffect(() => {
    if (!me) {
      dispatch({type: LOAD_MY_INFO_REQUEST});
    }
  }, [dispatch, me]);

  return (
    <HeaderContainer>
      <HeaderBox>
        <Link to="/">
          <img src={IMG} width="250px" alt="" />
        </Link>
        <Rightmenu>
          {me ? (
            <>
              <Link to={`/profile/${me.id}`}>{me.nickname} 님</Link>
              <Link onClick={onLogOut}>LOGOUT</Link>
            </>
          ) : (
            <>
              <Link to="/login/1">SIGNUP</Link>
              <Link to="/login/2">LOGIN</Link>
            </>
          )}
          <i onClick={() => toggle(true)}>
            <MdSearch />
          </i>
        </Rightmenu>
      </HeaderBox>
    </HeaderContainer>
  );
}
