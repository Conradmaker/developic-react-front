import axios from "axios";
import {all, call, fork, put, takeEvery, takeLatest} from "redux-saga/effects";
import {
  ADD_PHOTO_ERROR,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PICSTORY_ERROR,
  ADD_PICSTORY_REQUEST,
  ADD_PICSTORY_SUCCESS,
  DECLARE_PHOTO_ERROR,
  DECLARE_PHOTO_REQUEST,
  DECLARE_PHOTO_SUCCESS,
  LIKE_PHOTO_ERROR,
  LIKE_PHOTO_REQUEST,
  LIKE_PHOTO_SUCCESS,
  LOAD_DETAIL_ERROR,
  LOAD_DETAIL_REQUEST,
  LOAD_DETAIL_SUCCESS,
  LOAD_FEEDS_ERROR,
  LOAD_FEEDS_REQUEST,
  LOAD_FEEDS_SUCCESS,
  LOAD_MAINS_ERROR,
  LOAD_MAINS_REQUEST,
  LOAD_MAINS_SUCCESS,
  LOAD_PICSTORY_ERROR,
  LOAD_PICSTORY_REQUEST,
  LOAD_PICSTORY_SUCCESS,
  LOAD_SEARCH_ERROR,
  LOAD_SEARCH_REQUEST,
  LOAD_SEARCH_SUCCESS,
  LOAD_SHOPS_ERROR,
  LOAD_SHOPS_REQUEST,
  LOAD_SHOPS_SUCCESS,
  UNLIKE_PHOTO_ERROR,
  UNLIKE_PHOTO_REQUEST,
  UNLIKE_PHOTO_SUCCESS,
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
    yield put({type: LOAD_MAINS_ERROR, error: e.response.data});
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
    yield put({type: LOAD_FEEDS_ERROR, error: e.response.data});
  }
}
function* watchLoadFeeds() {
  yield takeLatest(LOAD_FEEDS_REQUEST, loadFeeds);
}

//픽샵페이지 게시글 로드
async function loadShopAPI(data) {
  const response = await axios.get(
    `load/shop/${data.cata}?lastId=${data.lastId || 0}`
  );
  return response.data;
}
function* loadShop(action) {
  try {
    const data = yield call(loadShopAPI, action.data);
    yield put({type: LOAD_SHOPS_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_SHOPS_ERROR, error: e.response.data});
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
    yield put({type: ADD_PHOTO_ERROR, error: e.response.data});
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
    yield put({type: UPLOAD_IMG_ERROR, error: e.response.data});
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
    yield put({type: LOAD_PICSTORY_ERROR, error: e.response.data});
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
    yield put({type: ADD_PICSTORY_ERROR, error: e.response.data});
  }
}
function* watchAddPicstory() {
  yield takeEvery(ADD_PICSTORY_REQUEST, addPicstory);
}
//디테일불러오기
async function loadDetailAPI(data) {
  const response = await axios.get(`/load/detail/${data.id}`);
  return response.data;
}
function* loadDetail(action) {
  try {
    const data = yield call(loadDetailAPI, action.data);
    yield put({type: LOAD_DETAIL_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_DETAIL_ERROR, error: e.response.data});
  }
}
function* watchLoadDetail() {
  yield takeEvery(LOAD_DETAIL_REQUEST, loadDetail);
}
//작품신고
async function declarePhotoAPI(data) {
  const response = await axios.post(`/photo/declare`, data);
  return response.data;
}
function* declarePhoto(action) {
  try {
    const data = yield call(declarePhotoAPI, action.data);
    yield put({type: DECLARE_PHOTO_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: DECLARE_PHOTO_ERROR, error: e.response.data});
  }
}
function* watchDeclarePhoto() {
  yield takeEvery(DECLARE_PHOTO_REQUEST, declarePhoto);
}
//작품좋아요
async function likePhotoAPI(data) {
  const response = await axios.post(`/photo/like`, data);
  return response.data;
}
function* likePhoto(action) {
  try {
    const data = yield call(likePhotoAPI, action.data);
    yield put({type: LIKE_PHOTO_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LIKE_PHOTO_ERROR, error: e.response.data});
  }
}
function* watchLikePhoto() {
  yield takeEvery(LIKE_PHOTO_REQUEST, likePhoto);
}
//작품좋아요취소
async function unlikePhotoAPI(data) {
  const response = await axios.post(`/photo/unlike`, data);
  return response.data;
}
function* unlikePhoto(action) {
  try {
    const data = yield call(unlikePhotoAPI, action.data);
    yield put({type: UNLIKE_PHOTO_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: UNLIKE_PHOTO_ERROR, error: e.response.data});
  }
}
function* watchunLikePhoto() {
  yield takeEvery(UNLIKE_PHOTO_REQUEST, unlikePhoto);
}
//검색기능
async function loadSearchAPI(data) {
  const response = await axios.get(
    `/load/search/${encodeURIComponent(data.text)}?sale=${data.sale}`
  );
  return response.data;
}
function* loadSearch(action) {
  try {
    const data = yield call(loadSearchAPI, action.data);
    yield put({type: LOAD_SEARCH_SUCCESS, payload: data});
  } catch (e) {
    console.error(e);
    yield put({type: LOAD_SEARCH_ERROR, error: e.response.data});
  }
}
function* watchLoadSearch() {
  yield takeEvery(LOAD_SEARCH_REQUEST, loadSearch);
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
    fork(watchLoadDetail),
    fork(watchDeclarePhoto),
    fork(watchLikePhoto),
    fork(watchunLikePhoto),
    fork(watchLoadSearch),
  ]);
}
