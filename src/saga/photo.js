import axios from "axios";
import {all, call, fork, put, takeEvery} from "redux-saga/effects";
import {
  LOAD_FEEDS_ERROR,
  LOAD_FEEDS_REQUEST,
  LOAD_FEEDS_SUCCESS,
  LOAD_MAIN_ERROR,
  LOAD_MAIN_REQUEST,
  LOAD_MAIN_SUCCESS,
  LOAD_SHOP_ERROR,
  LOAD_SHOP_REQUEST,
  LOAD_SHOP_SUCCESS,
} from "../reducer/photo/actions";
//메인페이지 게시글 로드
async function loadMainAPI() {
  const response = await axios.get();
  return response.data;
}
function* loadMain() {
  try {
    const data = yield call(loadMainAPI);
    yield put({type: LOAD_MAIN_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_MAIN_ERROR, error: e});
  }
}
function* watchLoadMain() {
  yield takeEvery(LOAD_MAIN_REQUEST, loadMain);
}

//피드페이지 게시글 로드
async function loadFeedsAPI(data) {
  const response = await axios.get(`/${data.cata}?lastId=${data.lastId}`);
  return response.data;
}
function* loadFeeds(action) {
  try {
    const data = yield call(loadFeedsAPI, action.data);
    yield put({type: LOAD_FEEDS_SUCCESS});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_FEEDS_ERROR, error: e});
  }
}
function* watchLoadFeeds() {
  yield takeEvery(LOAD_FEEDS_REQUEST, loadFeeds);
}

//픽샵페이지 게시글 로드
async function loadShopAPI(data) {
  const response = await axios.get(`/${data.cata}?lastId=${data.lastId}`);
  return response.data;
}
function* loadShop(action) {
  try {
    const data = yield call(loadShopAPI, action.data);
    yield put({type: LOAD_SHOP_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_SHOP_ERROR, error: e});
  }
}
function* watchLoadShop() {
  yield takeEvery(LOAD_SHOP_REQUEST, loadShop);
}

export default function* photoSaga() {
  yield all([fork(watchLoadFeeds), fork(watchLoadMain), fork(watchLoadShop)]);
}
