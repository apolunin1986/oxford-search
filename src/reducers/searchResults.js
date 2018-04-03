import {
    SEARCH_LOADED_FROM_STORAGE_TYPE,
    SEARCH_STARTED_TYPE,
    SEARCH_FAILED_TYPE,
    SEARCH_DONE_TYPE
} from '../actions/search';

const defaultState = {
    error: undefined,
    isLoading: false,
    results: [],
}

export function searchResults(state = defaultState, action) {
    switch (action.type) {
        case SEARCH_STARTED_TYPE:
            return {
                ...state,
                isLoading: true,
            }
        case SEARCH_FAILED_TYPE:
            return {
                ...state,
                isLoading: false,
                error: action.error,
            }
        case SEARCH_LOADED_FROM_STORAGE_TYPE:
        case SEARCH_DONE_TYPE:
            return {
                ...state,
                isLoading: false,
                error: undefined,
                results: action.results,
            }
        default:
            return state;
    }
}