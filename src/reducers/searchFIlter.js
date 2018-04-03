import { SEARCH_LOADED_FROM_STORAGE_TYPE, SEARCH_STARTED } from '../actions/search';

const defaultState = {
    text: '',
};

export function searchFilter(state = defaultState, action) {
    switch (action.type) {
        case SEARCH_LOADED_FROM_STORAGE_TYPE:
        case SEARCH_STARTED:
            return {
                text: action.searchText,
            }
        default:
            return state;
    }
}