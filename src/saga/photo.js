import { all, delay, fork, put, takeEvery } from "redux-saga/effects";
import {
  LOAD_FEEDS_ERROR,
  LOAD_FEEDS_REQUEST,
  LOAD_FEEDS_SUCCESS,
} from "../reducer/photo";

function* loadFeeds(action) {
  try {
    yield delay(2000);
    yield put({ type: LOAD_FEEDS_SUCCESS });
  } catch (e) {
    console.error(e);
    yield put({ type: LOAD_FEEDS_ERROR, error: e });
  }
}
function* watchLoadFeeds() {
  yield takeEvery(LOAD_FEEDS_REQUEST, loadFeeds);
}

export default function* photoSaga() {
  yield all([fork(watchLoadFeeds)]);
}
