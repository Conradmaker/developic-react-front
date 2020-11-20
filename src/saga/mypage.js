import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  DELETE_LIKE_LIST_ERROR,
  DELETE_LIKE_LIST_REQUEST,
  DELETE_LIKE_LIST_SUCCESS,
  LOAD_APPLY_ERROR,
  LOAD_APPLY_REQUEST,
  LOAD_APPLY_SUCCESS,
  LOAD_CART_ERROR,
  LOAD_CART_REQUEST,
  LOAD_CART_SUCCESS,
  LOAD_COMMENT_LIST_ERROR,
  LOAD_COMMENT_LIST_REQUEST,
  LOAD_COMMENT_LIST_SUCCESS,
  LOAD_LIKE_LIST_ERROR,
  LOAD_LIKE_LIST_REQUEST,
  LOAD_LIKE_LIST_SUCCESS,
  LOAD_QNA_LIST_ERROR,
  LOAD_QNA_LIST_REQUEST,
  LOAD_QNA_LIST_SUCCESS,
  REMOVE_CARTS_ERROR,
  REMOVE_CARTS_REQUEST,
  REMOVE_CARTS_SUCCESS,
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

//장바구니조회
async function loadCartAPI() {
  const response = await axios.get("/mypage/cart");
  return response.data;
}
function* loadCart() {
  try {
    const data = yield call(loadCartAPI);
    yield put({type: LOAD_CART_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_CART_ERROR, error: e.response.data});
  }
}
function* watchLoadCart() {
  yield takeEvery(LOAD_CART_REQUEST, loadCart);
}

//장바구니일괄삭제
async function removeCartsAPI(data) {
  const response = await axios.post("/mypage/carts", {data});
  return response.data;
}
function* removeCarts(action) {
  try {
    const data = yield call(removeCartsAPI, action.data);
    yield put({type: REMOVE_CARTS_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: REMOVE_CARTS_ERROR, error: e.response.data});
  }
}
function* watchRemoveCarts() {
  yield takeEvery(REMOVE_CARTS_REQUEST, removeCarts);
}

//작가신청조회
async function loadApplyAPI(data) {
  const response = await axios.get("/mypage/apply");
  return response.data;
}
function* loadApply() {
  try {
    const data = yield call(loadApplyAPI);
    yield put({type: LOAD_APPLY_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_APPLY_ERROR, error: e.response.data});
  }
}
function* watchLoadApply() {
  yield takeEvery(LOAD_APPLY_REQUEST, loadApply);
}
export default function* mypageSaga() {
  yield all([
    fork(watchLoadLike),
    fork(watchDeleteLike),
    fork(watchLoadComment),
    fork(watchLoadQna),
    fork(watchLoadCart),
    fork(watchRemoveCarts),
    fork(watchLoadApply),
  ]);
}
