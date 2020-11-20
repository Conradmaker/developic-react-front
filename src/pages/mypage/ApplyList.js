/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from "react";
import Apply from "../../components/about/Apply";
import Label from "../../components/common/Label";
import {InfoContainer} from "./UserInfo";
import styled, {css} from "styled-components";
import {FaCaretRight, FaGripLinesVertical} from "react-icons/fa";
import ApplyModal from "../../components/modal/ApplyModal";
import {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {LOAD_APPLY_REQUEST} from "../../reducer/mypage";
const Result = styled.div`
  padding: 40px 20px;
  h1 {
    font-size: 30px;
    font-weight: bold;
  }
  p {
    margin: 20px 0;
    font-size: 23px;
  }
  span {
  }
`;
const ApplyProcess = styled.ul`
  width: 60%;
  display: flex;
  align-items: center;
  gap: 15px;
  margin-bottom: 10px;
  li {
    font-size: 23px;
  }
  i {
    color: #ffca3e;
    font-size: 23px;
    display: flex;
    align-items: center;
    div {
      width: 2px;
      height: 25px;
      background: #ffca3e;
    }
  }
  ${(props) => {
    const progress = props.progress;
    if (progress === 0) {
      return css`
        li:nth-child(3) {
          font-weight: bold;
          border-bottom: 2px solid #000;
        }
      `;
    } else if (progress === 1) {
      return css`
        li:nth-child(5) {
          font-weight: bold;
          border-bottom: 2px solid #000;
        }
      `;
    } else if (progress === 2) {
      return css`
        li:nth-child(7) {
          font-weight: bold;
          border-bottom: 2px solid #000;
        }
      `;
    }
  }}
`;
export default function ApplyList({me}) {
  const dispatch = useDispatch();
  const [open, setOpen] = useState(false);
  const {loadApplySuccess} = useSelector((state) => state.mypage);
  const close = () => {
    setOpen(false);
  };
  useEffect(() => {
    dispatch({type: LOAD_APPLY_REQUEST});
  }, [dispatch]);
  return (
    <>
      <InfoContainer>
        <Label>작가신청조회</Label>
        <ApplyProcess progress={loadApplySuccess.progress}>
          <li>신청</li>
          <i>
            <FaCaretRight />
          </i>
          <li>검토중</li>
          <i>
            <FaCaretRight />
          </i>
          <li>승인</li>
          <i>
            <div></div>
          </i>
          <li>거절</li>
        </ApplyProcess>
        {loadApplySuccess.progress === 0 && (
          <Result>
            <h1>검토중이에요</h1>
            <p>조금만 더 기다려주세요!</p>
          </Result>
        )}
        {loadApplySuccess.progress === 1 && (
          <Result>
            <h1>축하합니다🎉</h1>
            <p>DEVELOPIC의 작가가 되셨습니다.</p>
            <span>이제 작품을 판매할수 있습니다.</span>
          </Result>
        )}
        {loadApplySuccess.progress === 2 && (
          <>
            <Result>
              <h1>죄송합니다😢</h1>
              <p>승인이 거절되었습니다.</p>
              <span>거절사유 : 작품이 10개 이하입니다.</span>
            </Result>
            <Apply open={() => setOpen(true)} />
          </>
        )}
      </InfoContainer>
      {open && <ApplyModal open={open} close={close} me={me} />}
    </>
  );
}
