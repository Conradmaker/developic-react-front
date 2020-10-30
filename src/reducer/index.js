import {combineReducers} from "redux";
import user from "./user";
import photo from "./photo";
import about from "./about";
import comment from "./comment";

const rootReducer = combineReducers({
  user,
  photo,
  about,
  comment,
});

export default rootReducer;
