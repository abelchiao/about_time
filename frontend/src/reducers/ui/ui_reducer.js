import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import currentWatchReducer from './current_watch_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentWatch: currentWatchReducer
});

export default uiReducer;
