export const ADD_COMMENT_REQUEST = "photo/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "photo/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "photo/ADD_COMMENT_ERROR";
export const DELETE_COMMENT_REQUEST = "comment/DELETE_COMMENT_REQUEST";
export const DELETE_COMMENT_SUCCESS = "comment/DELETE_COMMENT_SUCCESS";
export const DELETE_COMMENT_ERROR = "comment/DELETE_COMMENT_ERROR";
export const CHANGE_COMMENT_REQUEST = "comment/CHANGE_COMMENT_REQUEST";
export const CHANGE_COMMENT_SUCCESS = "comment/CHANGE_COMMENT_SUCCESS";
export const CHANGE_COMMENT_ERROR = "comment/CHANGE_COMMENT_ERROR";
export const DECLARE_COMMENT_REQUEST = "comment/DECLARE_COMMENT_REQUEST";
export const DECLARE_COMMENT_SUCCESS = "comment/DECLARE_COMMENT_SUCCESS";
export const DECLARE_COMMENT_ERROR = "comment/DECLARE_COMMENT_ERROR";
export const RESET_STATE = "comment/RESET_STATE";

const initialState = {
  CommentLoading: false,
  CommentError: false,

  addCommentSuccess: false,
  deleteCommentSuccess: false,
  changeCommentSuccess: false,
  declareCommentSuccess: false,
};
export default function comment(state = initialState, action) {
  switch (action.type) {
    case DECLARE_COMMENT_REQUEST:
    case CHANGE_COMMENT_REQUEST:
    case DELETE_COMMENT_REQUEST:
    case ADD_COMMENT_REQUEST:
      return {
        ...state,
        CommentLoading: true,
        CommentError: false,
      };
    case ADD_COMMENT_SUCCESS:
      return {
        ...state,
        CommentLoading: false,
        addCommentSuccess: true,
        CommentError: false,
      };
    case DELETE_COMMENT_SUCCESS:
      return {
        ...state,
        CommentLoading: false,
        deleteCommentSuccess: true,
        CommentError: false,
      };
    case CHANGE_COMMENT_SUCCESS:
      return {
        ...state,
        CommentLoading: false,
        changeCommentSuccess: true,
        CommentError: false,
      };
    case DECLARE_COMMENT_SUCCESS:
      return {
        ...state,
        CommentLoading: false,
        declareCommentSuccess: true,
        CommentError: false,
      };
    case DECLARE_COMMENT_ERROR:
    case CHANGE_COMMENT_ERROR:
    case DELETE_COMMENT_ERROR:
    case ADD_COMMENT_ERROR:
      return {
        ...state,
        CommentLoading: false,
        CommentError: action.error,
      };
    case RESET_STATE:
      return {
        ...state,
        addCommentSuccess: false,
        deleteCommentSuccess: false,
        changeCommentSuccess: false,
        declareCommentSuccess: false,
      };
    default:
      return state;
  }
}
