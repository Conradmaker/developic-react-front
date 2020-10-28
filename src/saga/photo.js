import axios from "axios";
import {all, call, fork, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
  ADD_PHOTO_ERROR,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PICSTORY_ERROR,
  ADD_PICSTORY_REQUEST,
  ADD_PICSTORY_SUCCESS,
  LOAD_FEEDS_ERROR,
  LOAD_FEEDS_REQUEST,
  LOAD_FEEDS_SUCCESS,
  LOAD_MAINS_ERROR,
  LOAD_MAINS_REQUEST,
  LOAD_MAINS_SUCCESS,
  LOAD_PICSTORY_ERROR,
  LOAD_PICSTORY_REQUEST,
  LOAD_PICSTORY_SUCCESS,
  LOAD_SHOPS_ERROR,
  LOAD_SHOPS_REQUEST,
  LOAD_SHOPS_SUCCESS,
  UPLOAD_IMG_ERROR,
  UPLOAD_IMG_REQUEST,
  UPLOAD_IMG_SUCCESS,
} from "../reducer/photo/actions";
//메인페이지 게시글 로드
async function loadMainAPI() {
  const response = await axios.get("/load/main");
  return response.data;
}
function* loadMain() {
  try {
    const data = yield call(loadMainAPI);
    yield put({type: LOAD_MAINS_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_MAINS_ERROR, error: e});
  }
}
function* watchLoadMain() {
  yield takeEvery(LOAD_MAINS_REQUEST, loadMain);
}

//피드페이지 게시글 로드
async function loadFeedsAPI(data) {
  const response = await axios.get(
    `/load/feed/${data.cata}?lastId=${data.lastId || 0}`
  );
  return response.data;
}
function* loadFeeds(action) {
  try {
    const data = yield call(loadFeedsAPI, action.data);
    yield put({type: LOAD_FEEDS_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_FEEDS_ERROR, error: e});
  }
}
function* watchLoadFeeds() {
  yield takeLatest(LOAD_FEEDS_REQUEST, loadFeeds);
}

//픽샵페이지 게시글 로드
async function loadShopAPI(data) {
  const response = await axios.get(`/${data.cata}?lastId=${data.lastId}`);
  return response.data;
}
function* loadShop(action) {
  try {
    const data = yield call(loadShopAPI, action.data);
    yield put({type: LOAD_SHOPS_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_SHOPS_ERROR, error: e});
  }
}
function* watchLoadShop() {
  yield takeEvery(LOAD_SHOPS_REQUEST, loadShop);
}
//작품추가
async function addPhotoAPI(data) {
  const response = await axios.post("/photo/upload/post", data);
  return response.data;
}
function* addPhoto(action) {
  try {
    const data = yield call(addPhotoAPI, action.data);
    yield put({type: ADD_PHOTO_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: ADD_PHOTO_ERROR, error: e});
  }
}
function* watchAddPhoto() {
  yield takeEvery(ADD_PHOTO_REQUEST, addPhoto);
}
//이미지업로드
async function uploadImgAPI(data) {
  const response = await axios.post("/photo/upload/photo", data);
  return response.data;
}
function* uploadImg(action) {
  try {
    const data = yield call(uploadImgAPI, action.data);
    yield put({type: UPLOAD_IMG_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: UPLOAD_IMG_ERROR, error: e});
  }
}
function* watchUploadImg() {
  yield takeEvery(UPLOAD_IMG_REQUEST, uploadImg);
}
//픽스토리로드
async function loadPicstoryAPI() {
  const response = await axios.get("/photo/load/picstory");
  return response.data;
}
function* loadPicstory() {
  try {
    const data = yield call(loadPicstoryAPI);
    yield put({type: LOAD_PICSTORY_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_PICSTORY_ERROR, error: e});
  }
}
function* watchLoadPicstory() {
  yield takeEvery(LOAD_PICSTORY_REQUEST, loadPicstory);
}
//픽스토리추가
async function addPicstoryAPI(data) {
  const response = await axios.post("/photo/upload/picstory", data);
  return response.data;
}
function* addPicstory(action) {
  try {
    const data = yield call(addPicstoryAPI, action.data);
    yield put({type: ADD_PICSTORY_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: ADD_PICSTORY_ERROR, error: e});
  }
}
function* watchAddPicstory() {
  yield takeEvery(ADD_PICSTORY_REQUEST, addPicstory);
}
export default function* photoSaga() {
  yield all([
    fork(watchLoadFeeds),
    fork(watchLoadMain),
    fork(watchLoadShop),
    fork(watchUploadImg),
    fork(watchAddPicstory),
    fork(watchLoadPicstory),
    fork(watchAddPhoto),
  ]);
}
