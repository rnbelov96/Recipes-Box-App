import { combineReducers } from "redux";
import cardDescrReducer from "./cardDescrReducer";
import recipesReducer from "./recipesReducer";

export default combineReducers({
  cardDescrReducer,
  recipesReducer
});