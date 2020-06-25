import { combineReducers } from '@reduxjs/toolkit';
import homeReducer from 'home/home.reducers';

const reducer = combineReducers({
  home: homeReducer
});

export default reducer;
