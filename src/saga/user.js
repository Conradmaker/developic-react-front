import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {LOG_IN_ERROR, LOG_IN_REQUEST, LOG_IN_SUCCESS} from "../reducer/user";

async function logInAPI(data) {
  const response = await axios.post("", data);
  return response.data;
}
function* logIn(action) {
  try {
    const data = yield call(logInAPI, action.data);
    yield put({type: LOG_IN_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    put({type: LOG_IN_ERROR, error: e});
  }
}
function* watchLogIn() {
  yield takeEvery(LOG_IN_REQUEST, logIn);
}

export default function* userSaga() {
  yield all([fork(watchLogIn)]);
}
