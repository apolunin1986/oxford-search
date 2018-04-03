import { combineReducers } from 'redux';
import { searchFilter } from './searchFIlter';
import { searchResults } from './searchResults';

export const rootReducer = combineReducers({
    searchFilter,
    searchResults,
});