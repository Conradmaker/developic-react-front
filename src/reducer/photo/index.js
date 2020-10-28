import {
  ADD_PHOTO_ERROR,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PICSTORY_ERROR,
  ADD_PICSTORY_REQUEST,
  ADD_PICSTORY_SUCCESS,
  DELETE_LIST,
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
} from "./actions";

const initialState = {
  loadPhotoListLoading: false,
  loadPhotoListSuccess: false,
  loadPhotoListError: false,
  uploadImgLoading: false,
  uploadImgSuccess: false,
  uploadImgError: false,
  addPhotoLoading: false,
  addPhotoSuccess: false,
  addPhotoError: false,
  addPicstoryLoading: false,
  addPicstorySuccess: false,
  addPicstoryError: false,
  loadPicstoryLoading: false,
  loadPicstorySuccess: false,
  loadPicstoryError: false,

  MainList: {},
  FeedList: [],
  ShopList: [],
  PicstoryList: [],
};

export default function photo(state = initialState, action) {
  switch (action.type) {
    case LOAD_SHOPS_REQUEST:
    case LOAD_MAINS_REQUEST:
    case LOAD_FEEDS_REQUEST:
      return {
        ...state,
        loadPhotoListLoading: true,
        loadPhotoListSuccess: false,
        loadPhotoListError: false,
      };
    case LOAD_FEEDS_SUCCESS:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: true,
        loadPhotoListError: false,
        FeedList: state.FeedList.concat(action.payload),
      };
    case LOAD_MAINS_SUCCESS:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: true,
        loadPhotoListError: false,
        MainList: action.payload,
      };
    case LOAD_SHOPS_SUCCESS:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: true,
        loadPhotoListError: false,
        ShopList: action.payload,
      };
    case LOAD_SHOPS_ERROR:
    case LOAD_MAINS_ERROR:
    case LOAD_FEEDS_ERROR:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: false,
        loadPhotoListError: true,
      };
    case UPLOAD_IMG_REQUEST:
      return {
        ...state,
        uploadImgLoading: false,
        uploadImgSuccess: false,
        uploadImgError: false,
      };
    case UPLOAD_IMG_SUCCESS:
      return {
        ...state,
        uploadImgLoading: false,
        uploadImgSuccess: action.payload,
        uploadImgError: false,
      };
    case UPLOAD_IMG_ERROR:
      return {
        ...state,
        uploadImgLoading: false,
        uploadImgSuccess: false,
        uploadImgError: action.error,
      };
    case ADD_PHOTO_REQUEST:
      return {
        ...state,
        addPhotoLoading: false,
        addPhotoSuccess: false,
        addPhotoError: false,
      };
    case ADD_PHOTO_SUCCESS:
      return {
        ...state,
        addPhotoLoading: false,
        addPhotoSuccess: action.payload,
        addPhotoError: false,
      };
    case ADD_PHOTO_ERROR:
      return {
        ...state,
        loadPhotoLoading: false,
        loadPhotoSuccess: false,
        loadPhotoError: action.error,
      };
    case ADD_PICSTORY_REQUEST:
      return {
        ...state,
        addPicstoryLoading: false,
        addPicstorySuccess: false,
        addPicstoryError: false,
      };
    case ADD_PICSTORY_SUCCESS:
      return {
        ...state,
        addPicstoryLoading: false,
        addPicstorySuccess: true,
        addPicstoryError: false,
        PicstoryList: state.PicstoryList.concat(action.payload),
      };
    case ADD_PICSTORY_ERROR:
      return {
        ...state,
        loadPicstoryLoading: false,
        loadPicstorySuccess: false,
        loadPicstoryError: action.error,
      };
    case LOAD_PICSTORY_REQUEST:
      return {
        ...state,
        loadPicstoryLoading: false,
        loadPicstorySuccess: false,
        loadPicstoryError: false,
      };
    case LOAD_PICSTORY_SUCCESS:
      return {
        ...state,
        loadPicstoryLoading: false,
        loadPicstorySuccess: true,
        loadPicstoryError: false,
        PicstoryList: action.payload,
      };
    case LOAD_PICSTORY_ERROR:
      return {
        ...state,
        addPicstoryLoading: false,
        addPicstorySuccess: false,
        addPicstoryError: action.error,
      };
    case DELETE_LIST:
      return {
        ...state,
        MainList: {},
        FeedList: [],
        ShopList: [],
      };
    default:
      return state;
  }
}
