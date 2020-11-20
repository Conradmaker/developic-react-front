export const SIGN_UP_REQUEST = "user/SIGN_UP_REQUEST";
export const SIGN_UP_SUCCESS = "user/SIGN_UP_SUCCESS";
export const SIGN_UP_ERROR = "user/SIGN_UP_ERROR";

export const LOG_IN_REQUEST = "user/LOG_IN_REQUEST";
export const LOG_IN_SUCCESS = "user/LOG_IN_SUCCESS";
export const LOG_IN_ERROR = "user/LOG_IN_ERROR";

export const LOG_OUT_REQUEST = "user/LOG_OUT_REQUEST";
export const LOG_OUT_SUCCESS = "user/LOG_OUT_SUCCESS";
export const LOG_OUT_ERROR = "user/LOG_OUT_ERROR";

export const LOAD_MY_INFO_REQUEST = "user/LOAD_MY_INFO_REQUEST";
export const LOAD_MY_INFO_SUCCESS = "user/LOAD_MY_INFO_SUCCESS";
export const LOAD_MY_INFO_ERROR = "user/LOAD_MY_INFO_ERROR";

export const LOAD_PROFILE_REQUEST = "user/LOAD_PROFILE_REQUEST";
export const LOAD_PROFILE_SUCCESS = "user/LOAD_PROFILE_SUCCESS";
export const LOAD_PROFILE_ERROR = "user/LOAD_PROFILE_ERROR";

export const CHANGE_USER_INFO_REQUEST = "user/CHANGE_USER_INFO_REQUEST";
export const CHANGE_USER_INFO_SUCCESS = "user/CHANGE_USER_INFO_SUCCESS";
export const CHANGE_USER_INFO_ERROR = "user/CHANGE_USER_INFO_ERROR";

export const ADD_CART_REQUEST = "photo/ADD_CART_REQUEST";
export const ADD_CART_SUCCESS = "photo/ADD_CART_SUCCESS";
export const ADD_CART_ERROR = "photo/ADD_CART_ERROR";

export const REMOVE_CART_REQUEST = "photo/REMOVE_CART_REQUEST";
export const REMOVE_CART_SUCCESS = "photo/REMOVE_CART_SUCCESS";
export const REMOVE_CART_ERROR = "photo/REMOVE_CART_ERROR";

const initialState = {
  signUpLoading: false,
  signUpSuccess: false,
  signUpError: false,
  logInLoading: false,
  logInSuccess: false,
  logInError: false,
  logOutLoading: false,
  logOutSuccess: false,
  logOutError: false,
  loadProfileLoading: false,
  loadProfileSuccess: false,
  loadProfileError: false,
  changeUserInfoLoading: false,
  changeUserInfoSuccess: false,
  changeUserInfoError: false,
  addCartRequest: false,
  addCartSuccess: false,
  addCartError: false,

  me: null,
  PostLength: false,
  Profile: {},
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
    case LOAD_MY_INFO_REQUEST:
    case LOG_IN_REQUEST:
      return {
        ...state,
        logInLoading: true,
        logInSuccess: false,
        logInError: false,
      };
    case LOAD_MY_INFO_SUCCESS:
    case LOG_IN_SUCCESS:
      return {
        ...state,
        logInLoading: false,
        logInSuccess: true,
        logInError: false,
        me: action.payload.user,
        PostLength: action.payload.postLength.length,
      };
    case LOAD_MY_INFO_ERROR:
    case LOG_IN_ERROR:
      return {
        ...state,
        logInLoading: false,
        logInSuccess: false,
        logInError: action.error,
      };
    case LOG_OUT_REQUEST:
      return {
        ...state,
        logOutLoading: true,
        logOutSuccess: false,
        logOutError: false,
      };
    case LOG_OUT_SUCCESS:
      return {
        ...state,
        logOutLoading: false,
        logOutSuccess: action.payload,
        logOutError: false,
        me: null,
      };
    case LOG_OUT_ERROR:
      return {
        ...state,
        logOutLoading: false,
        logOutSuccess: false,
        logOutError: action.error,
      };
    case LOAD_PROFILE_REQUEST:
      return {
        ...state,
        loadProfileLoading: true,
        loadProdileSuccess: false,
        loadProdileError: false,
        profile: {},
      };
    case LOAD_PROFILE_SUCCESS:
      return {
        ...state,
        loadProfileLoading: false,
        loadProdileSuccess: true,
        loadProdileError: false,
        profile: action.payload,
      };
    case LOAD_PROFILE_ERROR:
      return {
        ...state,
        loadProfileLoading: false,
        loadProdileSuccess: false,
        loadProdileError: action.error,
      };
    case CHANGE_USER_INFO_REQUEST:
      return {
        ...state,
        changeUserInfoLoading: true,
        changeUserInfoSuccess: false,
        changeUserInfoError: false,
      };
    case CHANGE_USER_INFO_SUCCESS:
      return {
        ...state,
        changeUserInfoLoading: false,
        changeUserInfoSuccess: true,
        changeUserInfoError: false,
        me: action.payload,
      };
    case CHANGE_USER_INFO_ERROR:
      return {
        ...state,
        changeUserInfoLoading: false,
        changeUserInfoSuccess: false,
        changeUserInfoError: action.error,
      };
    case REMOVE_CART_REQUEST:
    case ADD_CART_REQUEST:
      return {
        ...state,
        addCartLoading: true,
        addCartSuccess: false,
        addCartError: false,
      };
    case REMOVE_CART_ERROR:
    case ADD_CART_ERROR:
      return {
        ...state,
        addCartLoading: false,
        addCartSuccess: false,
        addCartError: action.error,
      };
    case ADD_CART_SUCCESS:
      return {
        ...state,
        addCartLoading: false,
        addCartSuccess: true,
        addCartError: false,
        me: {
          ...state.me,
          CartIn: state.me.CartIn.concat({id: action.payload.photoId}),
        },
      };
    case REMOVE_CART_SUCCESS:
      return {
        ...state,
        addCartLoading: false,
        addCartSuccess: true,
        addCartError: false,
        me: {
          ...state.me,
          CartIn: state.me.CartIn.filter(
            (v) => v.id !== action.payload.photoId
          ),
        },
      };
    default:
      return state;
  }
}
