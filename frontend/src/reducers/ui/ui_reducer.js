import { combineReducers } from "redux";
import modalReducer from "./modal_reducer";
import currentWatchReducer from './current_watch_reducer';
import dataLoad from './data_load_reducer';

const uiReducer = combineReducers({
  modal: modalReducer,
  currentWatch: currentWatchReducer,
  dataLoad: dataLoad
});

export default uiReducer;
