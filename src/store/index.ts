import { createStore, applyMiddleware, combineReducers } from "redux";
import thunk from "redux-thunk";
export interface RootState {}

const rootReducer = combineReducers({});

const middleWares = applyMiddleware(thunk);

const store = createStore(rootReducer, middleWares);


export default store;
