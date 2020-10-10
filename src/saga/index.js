import { all } from "redux-saga/effects";
import photoSaga from "./photo";

export default function* rootSaga() {
  yield all([photoSaga()]);
}
