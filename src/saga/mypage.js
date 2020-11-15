import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  DELETE_LIKE_LIST_ERROR,
  DELETE_LIKE_LIST_REQUEST,
  DELETE_LIKE_LIST_SUCCESS,
  LOAD_LIKE_LIST_ERROR,
  LOAD_LIKE_LIST_REQUEST,
  LOAD_LIKE_LIST_SUCCESS,
} from "../reducer/mypage";

//좋아요목록
async function loadLikeAPI() {
  const response = await axios.get("/mypage/like");
  return response.data;
}
function* loadLike(action) {
  try {
    const data = yield call(loadLikeAPI);
    yield put({type: LOAD_LIKE_LIST_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_LIKE_LIST_ERROR, error: e.response.data});
  }
}
function* watchLoadLike() {
  yield takeEvery(LOAD_LIKE_LIST_REQUEST, loadLike);
}

//좋아요취소
async function deleteLikeAPI(data) {
  const response = await axios.delete(`/mypage/like/${data}`);
  return response.data;
}
function* deleteLike(action) {
  try {
    const data = yield call(deleteLikeAPI, action.data);
    yield put({type: DELETE_LIKE_LIST_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: DELETE_LIKE_LIST_ERROR, error: e.response.data});
  }
}
function* watchDeleteLike() {
  yield takeEvery(DELETE_LIKE_LIST_REQUEST, deleteLike);
}

export default function* mypageSaga() {
  yield all([fork(watchLoadLike), fork(watchDeleteLike)]);
}
