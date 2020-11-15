import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  DELETE_LIKE_LIST_ERROR,
  DELETE_LIKE_LIST_REQUEST,
  DELETE_LIKE_LIST_SUCCESS,
  LOAD_COMMENT_LIST_ERROR,
  LOAD_COMMENT_LIST_REQUEST,
  LOAD_COMMENT_LIST_SUCCESS,
  LOAD_LIKE_LIST_ERROR,
  LOAD_LIKE_LIST_REQUEST,
  LOAD_LIKE_LIST_SUCCESS,
  LOAD_QNA_LIST_ERROR,
  LOAD_QNA_LIST_REQUEST,
  LOAD_QNA_LIST_SUCCESS,
} from "../reducer/mypage";

//좋아요목록
async function loadLikeAPI() {
  const response = await axios.get("/mypage/like");
  return response.data;
}
function* loadLike() {
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

//댓글목록 조회
async function loadCommentAPI() {
  const response = await axios.get("/mypage/comment");
  return response.data;
}
function* loadComment() {
  try {
    const data = yield call(loadCommentAPI);
    yield put({type: LOAD_COMMENT_LIST_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_COMMENT_LIST_ERROR, error: e.response.data});
  }
}
function* watchLoadComment() {
  yield takeEvery(LOAD_COMMENT_LIST_REQUEST, loadComment);
}

//Qna목록 조회
async function loadQnaAPI() {
  const response = await axios.get("/mypage/qna");
  return response.data;
}
function* loadQna() {
  try {
    const data = yield call(loadQnaAPI);
    yield put({type: LOAD_QNA_LIST_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_QNA_LIST_ERROR, error: e.response.data});
  }
}
function* watchLoadQna() {
  yield takeEvery(LOAD_QNA_LIST_REQUEST, loadQna);
}
export default function* mypageSaga() {
  yield all([
    fork(watchLoadLike),
    fork(watchDeleteLike),
    fork(watchLoadComment),
    fork(watchLoadQna),
  ]);
}
