export const ADD_COMMENT_REQUEST = "photo/ADD_COMMENT_REQUEST";
export const ADD_COMMENT_SUCCESS = "photo/ADD_COMMENT_SUCCESS";
export const ADD_COMMENT_ERROR = "photo/ADD_COMMENT_ERROR";

const initialState = {
  addCommentLoading: false,
  addCommentSuccess: false,
  addCommentError: false,
};
export default function comment(state = initialState, action) {
  switch (action.type) {
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
