import {combineReducers} from "redux";
import user from "./user";
import photo from "./photo";
import about from "./about";

const rootReducer = combineReducers({
  user,
  photo,
  about,
});

export default rootReducer;
