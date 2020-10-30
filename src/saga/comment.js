import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
  CHANGE_COMMENT_ERROR,
  CHANGE_COMMENT_REQUEST,
  CHANGE_COMMENT_SUCCESS,
  DELETE_COMMENT_ERROR,
  DELETE_COMMENT_REQUEST,
  DELETE_COMMENT_SUCCESS,
} from "../reducer/comment";

//댓글달기
async function addCommentAPI(data) {
  const response = await axios.post("/comment/add", data);
  return response.data;
}
function* addComment(action) {
  try {
    const data = yield call(addCommentAPI, action.data);
    yield put({type: ADD_COMMENT_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: ADD_COMMENT_ERROR, error: e.response.data});
  }
}
function* watchAddComment() {
  yield takeEvery(ADD_COMMENT_REQUEST, addComment);
}
//댓글삭제
async function deleteCommentAPI(data) {
  const response = await axios.delete(
    `/comment/delete?uid=${data.userId}&cid=${data.commentId}`
  );
  return response.data;
}
function* deleteComment(action) {
  try {
    const data = yield call(deleteCommentAPI, action.data);
    yield put({type: DELETE_COMMENT_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: DELETE_COMMENT_ERROR, error: e.response.data});
  }
}
function* watchDeleteComment() {
  yield takeEvery(DELETE_COMMENT_REQUEST, deleteComment);
}
//댓글수정
async function changeCommentAPI(data) {
  const response = await axios.patch(`/comment/change`, data);
  return response.data;
}
function* changeComment(action) {
  try {
    const data = yield call(changeCommentAPI, action.data);
    yield put({type: CHANGE_COMMENT_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: CHANGE_COMMENT_ERROR, error: e.response.data});
  }
}
function* watchChangeComment() {
  yield takeEvery(CHANGE_COMMENT_REQUEST, changeComment);
}
export default function* commentSaga() {
  yield all([
    fork(watchAddComment),
    fork(watchDeleteComment),
    fork(watchChangeComment),
  ]);
}
