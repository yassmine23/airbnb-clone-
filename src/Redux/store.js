import {legacy_createStore as createStore } from "redux";
import combineReducers from './Reducer/Combain';
const store = createStore(combineReducers)
export default store 