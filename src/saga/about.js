import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  ADD_QUESTION_ERROR,
  ADD_QUESTION_REQUEST,
  ADD_QUESTION_SUCCESS,
  APPLY_WRITTER_ERROR,
  APPLY_WRITTER_SUCCESS,
} from "../reducer/about";
import {LOAD_SHOP_REQUEST} from "../reducer/photo/actions";

//작가신청
async function applyWritterAPI(data) {
  const response = await axios.post("", data);
  return response.data;
}
function* applyWritter(action) {
  try {
    const data = yield call(applyWritterAPI, action.data);
    yield put({type: APPLY_WRITTER_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: APPLY_WRITTER_ERROR, error: e});
  }
}
function* watchApplyWritter() {
  yield takeEvery(LOAD_SHOP_REQUEST, applyWritter);
}

//Q&A 질문 등록
async function addQuestionAPI(data) {
  const response = await axios.post("", data);
  return response.data;
}
function* addQuestion(action) {
  try {
    const data = yield call(addQuestionAPI, action.data);
    yield put({type: ADD_QUESTION_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: ADD_QUESTION_ERROR, error: e});
  }
}
function* watchAddQuestion() {
  yield takeEvery(ADD_QUESTION_REQUEST, addQuestion);
}
export default function* aboutSaga() {
  yield all([fork(watchApplyWritter), fork(watchAddQuestion)]);
}
