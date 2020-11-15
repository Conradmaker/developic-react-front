export const LOAD_LIKE_LIST_REQUEST = "mypage/LOAD_LIKE_LIST_REQUEST";
export const LOAD_LIKE_LIST_SUCCESS = "mypage/LOAD_LIKE_LIST_SUCCESS";
export const LOAD_LIKE_LIST_ERROR = "mypage/LOAD_LIKE_LIST_ERROR";
export const DELETE_LIKE_LIST_REQUEST = "mypage/DELETE_LIKE_LIST_REQUEST";
export const DELETE_LIKE_LIST_SUCCESS = "mypage/DELETE_LIKE_LIST_SUCCESS";
export const DELETE_LIKE_LIST_ERROR = "mypage/DELETE_LIKE_LIST_ERROR";

const initialState = {
  loadLikeListLoading: false,
  loadLikeListSuccess: false,
  loadLikeListError: false,
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
    default:
      return state;
  }
}
