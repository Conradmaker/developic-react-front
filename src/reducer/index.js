import { combineReducers } from "redux";
import user from "./user";
import photo from "./photo";

const rootReducer = combineReducers({
  user,
  photo,
});

export default rootReducer;
