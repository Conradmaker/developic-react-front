import {DELETE_COMMENT_SUCCESS} from "./comment";
import {REMOVE_CART_SUCCESS} from "./user";

export const LOAD_LIKE_LIST_REQUEST = "mypage/LOAD_LIKE_LIST_REQUEST";
export const LOAD_LIKE_LIST_SUCCESS = "mypage/LOAD_LIKE_LIST_SUCCESS";
export const LOAD_LIKE_LIST_ERROR = "mypage/LOAD_LIKE_LIST_ERROR";
export const DELETE_LIKE_LIST_REQUEST = "mypage/DELETE_LIKE_LIST_REQUEST";
export const DELETE_LIKE_LIST_SUCCESS = "mypage/DELETE_LIKE_LIST_SUCCESS";
export const DELETE_LIKE_LIST_ERROR = "mypage/DELETE_LIKE_LIST_ERROR";
export const LOAD_COMMENT_LIST_REQUEST = "mypage/LOAD_COMMENT_LIST_REQUEST";
export const LOAD_COMMENT_LIST_SUCCESS = "mypage/LOAD_COMMENT_LIST_SUCCESS";
export const LOAD_COMMENT_LIST_ERROR = "mypage/LOAD_COMMENT_LIST_ERROR";
export const LOAD_QNA_LIST_REQUEST = "mypage/LOAD_QNA_LIST_REQUEST";
export const LOAD_QNA_LIST_SUCCESS = "mypage/LOAD_QNA_LIST_SUCCESS";
export const LOAD_QNA_LIST_ERROR = "mypage/LOAD_QNA_LIST_ERROR";
export const LOAD_CART_REQUEST = "mypage/LOAD_CART_REQUEST";
export const LOAD_CART_SUCCESS = "mypage/LOAD_CART_SUCCESS";
export const LOAD_CART_ERROR = "mypage/LOAD_CART_ERROR";
export const REMOVE_CARTS_REQUEST = "mypage/REMOVE_CARTS_REQUEST";
export const REMOVE_CARTS_SUCCESS = "mypage/REMOVE_CARTS_SUCCESS";
export const REMOVE_CARTS_ERROR = "mypage/REMOVE_CARTS_ERROR";
export const LOAD_APPLY_REQUEST = "mypage/LOAD_APPLY_REQUEST";
export const LOAD_APPLY_SUCCESS = "mypage/LOAD_APPLY_SUCCESS";
export const LOAD_APPLY_ERROR = "mypage/LOAD_APPLY_ERROR";

const initialState = {
  loadLikeListLoading: false,
  loadLikeListSuccess: false,
  loadLikeListError: false,
  loadDeleteListLoading: false,
  loadDeleteListSuccess: false,
  loadDeleteListError: false,
  loadCommentListLoading: false,
  loadCommentListSuccess: false,
  loadCommentListError: false,
  loadQnaListLoading: false,
  loadQnaListSuccess: false,
  loadQnaListError: false,
  loadCartLoading: false,
  loadCartSuccess: false,
  loadCartError: false,
  loadApplyLoading: false,
  loadApplySuccess: false,
  loadApplyError: false,
};

export default function mypage(state = initialState, action) {
  switch (action.type) {
    case LOAD_LIKE_LIST_REQUEST:
      return {
        ...state,
        loadLikeListLoading: false,
        loadLikeListSuccess: false,
        loadLikeListError: false,
      };
    case LOAD_LIKE_LIST_SUCCESS:
      return {
        ...state,
        loadLikeListLoading: false,
        loadLikeListSuccess: action.payload,
        loadLikeListError: false,
      };
    case LOAD_LIKE_LIST_ERROR:
      return {
        ...state,
        loadLikeListLoading: false,
        loadLikeListSuccess: false,
        loadLikeListError: action.error,
      };
    case DELETE_LIKE_LIST_REQUEST:
      return {
        ...state,
        deleteLikeListLoading: false,
        deleteLikeListSuccess: false,
        deleteLikeListError: false,
      };
    case DELETE_LIKE_LIST_SUCCESS:
      return {
        ...state,
        deleteLikeListLoading: false,
        deleteLikeListSuccess: true,
        deleteLikeListError: false,
        loadLikeListSuccess: state.loadLikeListSuccess.filter(
          (v) => v.id !== action.payload.id
        ),
      };
    case DELETE_LIKE_LIST_ERROR:
      return {
        ...state,
        deleteLikeListLoading: false,
        deleteLikeListSuccess: false,
        deleteLikeListError: action.error,
      };
    case LOAD_COMMENT_LIST_REQUEST:
      return {
        ...state,
        loadCommentListLoading: false,
        loadCommentListSuccess: false,
        loadCommentListError: false,
      };
    case LOAD_COMMENT_LIST_SUCCESS:
      return {
        ...state,
        loadCommentListLoading: false,
        loadCommentListSuccess: action.payload,
        loadCommentListError: false,
      };
    case LOAD_COMMENT_LIST_ERROR:
      return {
        ...state,
        loadCommentListLoading: false,
        loadCommentListSuccess: false,
        loadCommentListError: action.error,
      };
    case DELETE_COMMENT_SUCCESS:
      if (state.loadCommentListSuccess) {
        return {
          ...state,
          loadCommentListSuccess: state.loadCommentListSuccess.filter(
            (v) => v.id !== action.payload.id
          ),
        };
      }
      return null;
    case LOAD_QNA_LIST_REQUEST:
      return {
        ...state,
        loadQnaListLoading: false,
        loadQnaListSuccess: false,
        loadQnaListError: false,
      };
    case LOAD_QNA_LIST_SUCCESS:
      return {
        ...state,
        loadQnaListLoading: false,
        loadQnaListSuccess: action.payload,
        loadQnaListError: false,
      };
    case LOAD_QNA_LIST_ERROR:
      return {
        ...state,
        loadQnaListLoading: false,
        loadQnaListSuccess: false,
        loadQnaListError: action.error,
      };
    case LOAD_CART_REQUEST:
      return {
        ...state,
        loadCartLoading: false,
        loadCartSuccess: false,
        loadCartError: false,
      };
    case LOAD_CART_SUCCESS:
      return {
        ...state,
        loadCartLoading: false,
        loadCartSuccess: action.payload,
        loadCartError: false,
      };
    case LOAD_CART_ERROR:
      return {
        ...state,
        loadCartLoading: false,
        loadCartSuccess: false,
        loadCartError: action.error,
      };
    case REMOVE_CARTS_REQUEST:
      return {
        ...state,
        loadCartLoading: false,
        loadCartError: action.error,
      };
    case REMOVE_CARTS_SUCCESS:
      let result = [...state.loadCartSuccess];
      action.payload.forEach((i) => {
        // result = result.splice(result.indexOf(v), 1);
        result = result.filter((v) => v.id !== i);
      });

      console.log(result);
      return {
        ...state,
        loadCartLoading: false,
        loadCartError: false,
        loadCartSuccess: result,
      };
    case REMOVE_CARTS_ERROR:
      return {
        ...state,
        loadCartLoading: false,
        loadCartSuccess: false,
        loadCartError: action.error,
      };
    case LOAD_APPLY_REQUEST:
      return {
        ...state,
        loadApplyLoading: false,
        loadApplySuccess: false,
        loadApplyError: false,
      };
    case LOAD_APPLY_SUCCESS:
      return {
        ...state,
        loadApplyLoading: false,
        loadApplySuccess: action.payload,
        loadApplyError: false,
      };
    case LOAD_APPLY_ERROR:
      return {
        ...state,
        loadApplyLoading: false,
        loadApplySuccess: false,
        loadApplyError: action.error,
      };
    default:
      return state;
  }
}
