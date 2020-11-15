import {combineReducers} from "redux";
import user from "./user";
import photo from "./photo";
import about from "./about";
import comment from "./comment";
import mypage from "./mypage";

const rootReducer = combineReducers({
  user,
  photo,
  about,
  comment,
  mypage,
});

export default rootReducer;
