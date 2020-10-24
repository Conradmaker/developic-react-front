import {all} from "redux-saga/effects";
import aboutSaga from "./about";
import photoSaga from "./photo";
import userSaga from "./user";

export default function* rootSaga() {
  yield all([photoSaga(), userSaga(), aboutSaga()]);
}
