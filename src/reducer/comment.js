export const ADD_COMMENT_REQUEST = "photo/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "photo/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "photo/ADD_COMMENT_ERROR";
export const DELETE_COMMENT_REQUEST = "comment/DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_ERROR = "comment/DELETE_COMMENT_ERROR";
export const CHANGE_COMMENT_REQUEST = "comment/CHANGE_COMMENT_REQUEST";
export const CHANGE_COMMENT_SUCCESS = "comment/CHANGE_COMMENT_SUCCESS";
export const CHANGE_COMMENT_ERROR = "comment/CHANGE_COMMENT_ERROR";

const initialState = {
  addCommentLoading: false,
  addCommentSuccess: false,
  addCommentError: false,
  deleteCommentSuccess: false,
  changeCommentSuccess: false,
};
export default function comment(state = initialState, action) {
  switch (action.type) {
    case CHANGE_COMMENT_REQUEST:
    case DELETE_COMMENT_REQUEST:
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        addCommentLoading: true,
        addCommentSuccess: false,
        addCommentError: false,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        addCommentLoading: false,
        addCommentSuccess: true,
        addCommentError: false,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        deleteCommentSuccess: true,
      };
    case CHANGE_COMMENT_SUCCESS:
      return {
        ...state,
        changeCommentSuccess: true,
      };
    case CHANGE_COMMENT_ERROR:
    case DELETE_COMMENT_ERROR:
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        addCommentLoading: false,
        addCommentSuccess: false,
        addCommentError: action.error,
      };
    default:
      return state;
  }
}
