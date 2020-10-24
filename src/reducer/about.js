export const APPLY_WRITTER_REQUEST = "about/APPLY_WRITTER_REQUEST";
export const APPLY_WRITTER_SUCCESS = "about/APPLY_WRITTER_SUCCESS";
export const APPLY_WRITTER_ERROR = "about/APPLY_WRITTER_ERROR";
export const ADD_QUESTION_REQUEST = "about/ADD_QUESTION_REQUEST";
export const ADD_QUESTION_SUCCESS = "about/ADD_QUESTION_SUCCESS";
export const ADD_QUESTION_ERROR = "about/ADD_QUESTION_ERROR";

const initialState = {
  applyWritterLoading: false,
  applyWritterSuccess: false,
  applyWritterError: false,
  addQuestionLoading: false,
  addQuestionSuccess: false,
  addQuestionError: false,
};

export default function about(state = initialState, action) {
  switch (action.type) {
    case APPLY_WRITTER_REQUEST:
      return {
        ...state,
        applyWritterLoading: true,
        applyWritterSuccess: false,
        applyWritterError: false,
      };
    case APPLY_WRITTER_SUCCESS:
      return {
        ...state,
        applyWritterLoading: false,
        applyWritterSuccess: action.payload,
        applyWritterError: false,
      };
    case APPLY_WRITTER_ERROR:
      return {
        ...state,
        applyWritterLoading: false,
        applyWritterSuccess: false,
        applyWritterError: action.error,
      };
    case ADD_QUESTION_REQUEST:
      return {
        ...state,
        addQuestionLoading: true,
        addQuestionSuccess: false,
        addQuestionError: false,
      };
    case ADD_QUESTION_SUCCESS:
      return {
        ...state,
        addQuestionLoading: false,
        addQuestionSuccess: action.payload,
        addQuestionError: false,
      };
    case ADD_QUESTION_ERROR:
      return {
        ...state,
        addQuestionLoading: false,
        addQuestionSuccess: false,
        addQuestionError: action.error,
      };
    default:
      return state;
  }
}
