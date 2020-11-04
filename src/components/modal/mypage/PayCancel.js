import React from "react";
import {useState} from "react";
import Buttons from "../../common/Buttons";
import ModalLayout, {Gap, ModalBtnBox} from "../ModalLayout";

export default function PayCancel({close, open}) {
  const [reason, setReason] = useState("기타");
  const onChange = (e) => {
    setReason(e.target.value);
  };
  console.log(reason);
  return (
    <ModalLayout open={open}>
      <h1>결제를 취소하시겠습니까?</h1>
      <Gap />
      <label>
        <input
          type="radio"
          name="reason"
          value="단순변심"
          onChange={onChange}
        />
        단순변심
      </label>
      <label>
        <input
          type="radio"
          name="reason"
          value="돈이 없어짐"
          onChange={onChange}
        />
        돈이 없어짐
      </label>
      <label>
        <input
          type="radio"
          name="reason"
          value="결제방식변경"
          onChange={onChange}
        />
        결제방식변경
      </label>
      <label>
        <input
          type="radio"
          name="reason"
          value="서비스 불만족"
          onChange={onChange}
        />
        서비스 불만족
      </label>
      <Gap />
      <ModalBtnBox>
        <Buttons color="black" onClick={close}>
          닫기
        </Buttons>
        <Buttons>확인</Buttons>
      </ModalBtnBox>
    </ModalLayout>
  );
}
