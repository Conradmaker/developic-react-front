import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  LOAD_MY_INFO_ERROR,
  LOAD_MY_INFO_REQUEST,
  LOAD_MY_INFO_SUCCESS,
  LOAD_PROFILE_ERROR,
  LOAD_PROFILE_REQUEST,
  LOAD_PROFILE_SUCCESS,
  LOG_IN_ERROR,
  LOG_IN_REQUEST,
  LOG_IN_SUCCESS,
  LOG_OUT_ERROR,
  LOG_OUT_REQUEST,
  LOG_OUT_SUCCESS,
  SIGN_UP_ERROR,
  SIGN_UP_REQUEST,
  SIGN_UP_SUCCESS,
} from "../reducer/user";

//로그인
async function logInAPI(data) {
  const response = await axios.post("/user/login", data);
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

//로그인유지
async function loadMyInfoAPI() {
  const response = await axios.get("/user/");
  return response.data;
}
function* loadMyInfo() {
  try {
    const data = yield call(loadMyInfoAPI);
    yield put({type: LOAD_MY_INFO_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_MY_INFO_ERROR, error: e});
  }
}
function* watchLoadMyInfo() {
  yield takeEvery(LOAD_MY_INFO_REQUEST, loadMyInfo);
}

//로그아웃
async function logOutAPI(data) {
  const response = await axios.get("/user/logout");
  return response.data;
}
function* logOut() {
  try {
    const data = yield call(logOutAPI);
    yield put({type: LOG_OUT_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOG_OUT_ERROR, error: e});
  }
}
function* watchLogOut() {
  yield takeEvery(LOG_OUT_REQUEST, logOut);
}

//회원가입
async function signUpAPI(data) {
  const response = await axios.post("/user/signup", data);
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

//프로필조회
async function loadProfileAPI(data) {
  const response = await axios.get(`/load/profile/${data.userId}`);
  return response.data;
}
function* loadProfile(action) {
  try {
    const data = yield call(loadProfileAPI, action.data);
    yield put({type: LOAD_PROFILE_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_PROFILE_ERROR, error: e});
  }
}
function* watchLoadProfile() {
  yield takeEvery(LOAD_PROFILE_REQUEST, loadProfile);
}
export default function* userSaga() {
  yield all([
    fork(watchLogIn),
    fork(watchSignUp),
    fork(watchLogOut),
    fork(watchLoadMyInfo),
    fork(watchLoadProfile),
  ]);
}
