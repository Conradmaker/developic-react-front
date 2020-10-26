import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducer/user";

async function logInAPI(data) {
  const response = await axios.post("http://localhost:3030/user/login", data);
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

//회원가입
async function signUpAPI(data) {
  const response = await axios.post("http://localhost:3030/user/signup", data);
  return response.data;
}
function* signUp(action) {
  try {
    const data = yield call(signUpAPI, action.data);
    yield put({type: SIGN_UP_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: SIGN_UP_ERROR, error: e});
  }
}
function* watchSignUp() {
  yield takeEvery(SIGN_UP_REQUEST, signUp);
}
export default function* userSaga() {
  yield all([fork(watchLogIn), fork(watchSignUp)]);
}
