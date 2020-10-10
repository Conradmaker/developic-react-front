export const LOAD_FEEDS_REQUEST = "photo/LOAD_FEEDS_REQUEST";
export const LOAD_FEEDS_SUCCESS = "photo/LOAD_FEEDS_SUCCESS";
export const LOAD_FEEDS_ERROR = "photo/LOAD_FEEDS_ERROR";

const initialState = {
  loadFeedsLoading: false,
  loadFeedsSuccess: false,
  loadFeedsError: false,

  PicFeedList: [],
};
function generatePhoto() {
  return [
    {
      id: 1,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/1.jpg",
    },
    {
      id: 2,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/2.jpg",
    },
    {
      id: 3,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/3.jpg",
    },
    {
      id: 4,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/4.jpg",
    },
    {
      id: 5,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/5.jpg",
    },
    {
      id: 6,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/6.jpg",
    },
    {
      id: 7,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/7.jpg",
    },
    {
      id: 8,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/8.jpg",
    },
    {
      id: 9,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/9.jpg",
    },
    {
      id: 10,
      name: "캡틴마블",
      src: "https://s3-us-west-2.amazonaws.com/s.cdpn.io/3794/10.jpg",
    },
  ];
}
export default function photo(state = initialState, action) {
  switch (action.type) {
    case LOAD_FEEDS_REQUEST:
      return {
        ...state,
        loadFeedsLoading: true,
        loadFeedsSuccess: false,
        loadFeedsError: false,
      };
    case LOAD_FEEDS_SUCCESS:
      console.log("sdasdasd");
      return {
        ...state,
        loadFeedsLoading: false,
        loadFeedsSuccess: true,
        loadFeedsError: false,
        PicFeedList: state.PicFeedList.concat(generatePhoto()),
      };
    case LOAD_FEEDS_ERROR:
      return {
        ...state,
        loadFeedsLoading: false,
        loadFeedsSuccess: false,
        loadFeedsError: true,
      };

    default:
      return state;
  }
}
