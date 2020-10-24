import {
  LOAD_FEEDS_ERROR,
  LOAD_FEEDS_REQUEST,
  LOAD_FEEDS_SUCCESS,
  LOAD_MAIN_ERROR,
  LOAD_MAIN_REQUEST,
  LOAD_MAIN_SUCCESS,
  LOAD_SHOP_ERROR,
  LOAD_SHOP_REQUEST,
  LOAD_SHOP_SUCCESS,
} from "./actions";

const initialState = {
  loadPhotoListLoading: false,
  loadPhotoListSuccess: false,
  loadPhotoListError: false,

  MainList: [],
  FeedList: [],
  ShopList: [],
};
export function generatePhoto() {
  return [
    {
      id: 1,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/1.jpg",
      price: "100,002,320원",
    },
    {
      id: 2,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg",
      price: "100,002,320원",
    },
    {
      id: 3,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/3.jpg",
      price: "100,002,320원",
    },
    {
      id: 4,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg",
      price: "100,002,320원",
    },
    {
      id: 5,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg",
      price: "100,002,320원",
    },
    {
      id: 6,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/6.jpg",
      price: "100,002,320원",
    },
    {
      id: 7,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg",
      price: "100,002,320원",
    },
    {
      id: 8,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg",
      price: "100,002,320원",
    },
    {
      id: 9,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/9.jpg",
      price: "100,002,320원",
    },
    {
      id: 10,
      name: "캡틴마블",
      author: "유원근",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/10.jpg",
      price: "100,002,320원",
    },
  ];
}
export default function photo(state = initialState, action) {
  switch (action.type) {
    case LOAD_SHOP_REQUEST:
    case LOAD_MAIN_REQUEST:
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
        FeedList: state.FeedList.concat(generatePhoto()),
      };
    case LOAD_MAIN_SUCCESS:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: true,
        loadPhotoListError: false,
        MainList: action.payload,
      };
    case LOAD_SHOP_SUCCESS:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: true,
        loadPhotoListError: false,
        ShopList: action.payload,
      };
    case LOAD_SHOP_ERROR:
    case LOAD_MAIN_ERROR:
    case LOAD_FEEDS_ERROR:
      return {
        ...state,
        loadPhotoListLoading: false,
        loadPhotoListSuccess: false,
        loadPhotoListError: true,
      };

    default:
      return state;
  }
}
