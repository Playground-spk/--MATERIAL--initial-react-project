import { createStore, combineReducers } from "redux";
import { storeLoadState, storeSaveState } from "../services/store.service";
import { userReducer } from "./reducer/user.reducer";

const rootReducer = combineReducers({
  user: userReducer,
});

const persisState = storeLoadState();

const store = createStore(rootReducer, persisState);

store.subscribe(() => {
  storeSaveState(store.getState());
});

export default store;
