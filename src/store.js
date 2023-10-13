import { createStore, combineReducers } from "redux";
import nameReducer from "./reducers/name";
import { reducer as uiReducer } from "redux-ui";

const rootReducer = combineReducers({
//   name: nameReducer,
  ui: uiReducer,
});

const store = createStore(rootReducer);

export default store;
