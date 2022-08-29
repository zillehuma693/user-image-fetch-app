import { combineReducers } from "redux";
import imageReducer from "./images/imageReducer";
import userReducer from "./users/userReducer";
const rootReducer = combineReducers({
  image: imageReducer,
  user: userReducer,
});

export default rootReducer;
