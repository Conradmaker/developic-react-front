import {
  ADD_COMMENT_SUCCESS,
  CHANGE_COMMENT_SUCCESS,
  DELETE_COMMENT_SUCCESS,
} from "../comment";
import {
  ADD_CART_ERROR,
  ADD_CART_REQUEST,
  ADD_CART_SUCCESS,
  ADD_PHOTO_ERROR,
  ADD_PHOTO_REQUEST,
  ADD_PHOTO_SUCCESS,
  ADD_PICSTORY_ERROR,
  ADD_PICSTORY_REQUEST,
  ADD_PICSTORY_SUCCESS,
  DECLARE_PHOTO_ERROR,
  DECLARE_PHOTO_REQUEST,
  DECLARE_PHOTO_SUCCESS,
  DELETE_LIST,
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
  REMOVE_CART_ERROR,
  REMOVE_CART_REQUEST,
  REMOVE_CART_SUCCESS,
  UNLIKE_PHOTO_ERROR,
  UNLIKE_PHOTO_REQUEST,
  UNLIKE_PHOTO_SUCCESS,
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
  loadDetailLoading: false,
  loadDetailSuccess: false,
  loadDetailError: false,
  declarePhotoRequest: false,
  declarePhotoSuccess: false,
  declarePhotoError: false,
  likePhotoRequest: false,
  likePhotoSuccess: false,
  likePhotoError: false,

  Detail: {},
  MainList: {},
  FeedList: [],
  ShopList: [],
  PicstoryList: [],
  SearchList: [],
};

export default function photo(state = initialState, action) {
  switch (action.type) {
    case LOAD_SEARCH_REQUEST:
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
        FeedList: action.payload.concat(state.FeedList),
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
        ShopList: action.payload.concat(state.ShopList),
      };
    case LOAD_SEARCH_SUCCESS:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: true,
        loadPhotoListError: false,
        SearchList: action.payload.concat(state.SearchList),
      };
    case LOAD_SEARCH_ERROR:
    case LOAD_SHOPS_ERROR:
    case LOAD_MAINS_ERROR:
    case LOAD_FEEDS_ERROR:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: false,
        loadPhotoListError: action.error,
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
    case LOAD_DETAIL_REQUEST:
      return {
        ...state,
        loadDetailLoading: true,
        loadDetailSuccess: false,
        loadDetailError: false,
      };
    case LOAD_DETAIL_SUCCESS:
      return {
        ...state,
        loadDetailLoading: false,
        loadDetailSuccess: true,
        loadDetailError: false,
        Detail: action.payload,
      };
    case LOAD_DETAIL_ERROR:
      return {
        ...state,
        loadDetailLoading: false,
        loadDetailSuccess: false,
        loadDetailError: action.error,
      };
    case DECLARE_PHOTO_REQUEST:
      return {
        ...state,
        declarePhotoRequest: false,
        declarePhotoSuccess: false,
        declarePhotoError: false,
      };
    case DECLARE_PHOTO_SUCCESS:
      return {
        ...state,
        declarePhotoRequest: false,
        declarePhotoSuccess: action.payload,
        declarePhotoError: false,
      };
    case DECLARE_PHOTO_ERROR:
      return {
        ...state,
        declarePhotoRequest: false,
        declarePhotoSuccess: false,
        declarePhotoError: action.error,
      };
    case LIKE_PHOTO_REQUEST:
    case UNLIKE_PHOTO_REQUEST:
      return {
        ...state,
        likePhotoRequest: true,
        likePhotoSuccess: false,
        likePhotoError: false,
      };
    case LIKE_PHOTO_SUCCESS:
      return {
        ...state,
        likePhotoRequest: false,
        likePhotoSuccess: true,
        likePhotoError: false,
        Detail: {
          ...state.Detail,
          Likers: state.Detail.Likers.concat(action.payload),
        },
      };
    case UNLIKE_PHOTO_SUCCESS:
      return {
        ...state,
        likePhotoRequest: false,
        likePhotoSuccess: true,
        likePhotoError: false,
        Detail: {
          ...state.Detail,
          Likers: state.Detail.Likers.filter((v) => v.id !== action.payload.id),
        },
      };
    case LIKE_PHOTO_ERROR:
    case UNLIKE_PHOTO_ERROR:
      return {
        ...state,
        likePhotoRequest: false,
        likePhotoSuccess: true,
        likePhotoError: action.error,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        Detail: {
          ...state.Detail,
          Comments: state.Detail.Comments.concat(action.payload),
        },
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        Detail: {
          ...state.Detail,
          Comments:
            state.Detail.Comments &&
            state.Detail.Comments.filter((v) => v.id !== action.payload.id),
        },
      };
    case CHANGE_COMMENT_SUCCESS:
      const comment = state.Detail.Comments.filter(
        (v) => v.id === action.payload.id
      );
      console.log(comment);
      const cIndex = state.Detail.Comments.indexOf(comment[0]);
      console.log(cIndex);
      return {
        ...state,
        Detail: {
          ...state.Detail,
          Comments: state.Detail.Comments.map((v, i) =>
            i === cIndex ? {...v, content: action.payload.content} : v
          ),
        },
      };
    case DELETE_LIST:
      return {
        ...state,
        MainList: {},
        FeedList: [],
        ShopList: [],
        Detail: {},
        SearchList: [],
      };
    default:
      return state;
  }
}
