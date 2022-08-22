import { combineReducers } from "redux";
import usersAcc from './usersReducer';
import hosterAcc from './hosterReducer';
import requestsInfo from './requestReducer';
import singleInfo from './singleReducer';
import requestDetails from './reqInfoReducer';
import guestsReducer from "./guests";
import wishData from './wishListData';

import CategoryRed from "./categoryReducer";

import searchReducer from "./searchReducer";


export default combineReducers({
    allUsers:usersAcc,
    allHosters:hosterAcc,
    allRequests: requestsInfo,
    userData: singleInfo,
    requestDetail:requestDetails,
    guests:guestsReducer,
    favoritData : wishData,

    categoryName:CategoryRed,
    resultsearch:searchReducer

})