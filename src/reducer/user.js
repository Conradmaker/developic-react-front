export const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "user/SIGN_UP_ERROR";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "user/LOG_IN_ERROR";

const initialState = {
  signUpLoading: false,
  signUpSuccess: false,
  signUpError: false,
  logInLoading: false,
  logInSuccess: false,
  logInError: false,

  me: null,
};

export default function user(state = initialState, action) {
  switch (action.type) {
    case SIGN_UP_REQUEST:
      return {
        ...state,
        signUpLoading: true,
        signUpSuccess: false,
        signUpError: false,
      };
    case SIGN_UP_SUCCESS:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: action.payload,
        signUpError: false,
      };
    case SIGN_UP_ERROR:
      return {
        ...state,
        signUpLoading: false,
        signUpSuccess: false,
        signUpError: action.error,
      };
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInSuccess: false,
        logInError: false,
        //모의로그인
        me: {
          id: action.data.id,
          password: action.data.password,
          nickname: "conrad",
        },
      };
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInSuccess: true,
        logInError: false,
        me: action.payload,
      };
    case LOG_IN_ERROR:
      return {
        ...state,
        logInLoading: false,
        logInSuccess: false,
        logInError: action.error,
      };
    default:
      return state;
  }
}
