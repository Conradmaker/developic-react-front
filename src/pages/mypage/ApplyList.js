/* eslint-disable jsx-a11y/accessible-emoji */
import React, {useState} from "react";
import Apply from "../../components/about/Apply";
import Label from "../../components/common/Label";
import {InfoContainer} from "./UserInfo";
import styled from "styled-components";
import {FaCaretRight, FaGripLinesVertical} from "react-icons/fa";
import ApplyModal from "../../components/modal/ApplyModal";
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
  li:nth-child(1) {
    font-weight: bold;
    border-bottom: 2px solid #000;
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
`;
export default function ApplyList({me}) {
  const [open, setOpen] = useState(false);
  const close = () => {
    setOpen(false);
  };
  return (
    <>
      <InfoContainer>
        <Label>작가신청조회</Label>
        <ApplyProcess>
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
        <Result>
          <h1>축하합니다🎉</h1>
          <p>DEVELOPIC의 작가가 되셨습니다.</p>
          <span>이제 작품을 판매할수 있습니다.</span>
        </Result>
        <Result>
          <h1>죄송합니다😢</h1>
          <p>승인이 거절되었습니다.</p>
          <span>거절사유 : 작품이 10개 이하입니다.</span>
        </Result>
        <Apply open={() => setOpen(true)} />
      </InfoContainer>
      {open && <ApplyModal open={open} close={close} me={me} />}
    </>
  );
}
