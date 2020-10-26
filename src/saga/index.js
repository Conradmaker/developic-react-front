import {all} from "redux-saga/effects";
import aboutSaga from "./about";
import photoSaga from "./photo";
import userSaga from "./user";
import axios from "axios";
export default function* rootSaga() {
  axios.defaults.baseURL = "http://localhost:3030";
  axios.defaults.withCredentials = true;
  yield all([photoSaga(), userSaga(), aboutSaga()]);
}
