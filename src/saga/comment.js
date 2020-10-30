import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import axios from "axios";
import {
  ADD_COMMENT_ERROR,
  ADD_COMMENT_REQUEST,
  ADD_COMMENT_SUCCESS,
} from "../reducer/comment";

//댓글달기
async function addCommentAPI(data) {
  const response = await axios.post("/photo/comment", data);
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

export default function* commentSaga() {
  yield all([fork(watchAddComment)]);
}
