export const SEARCH_STARTED_TYPE = 'SEARCH_STARTED';
export const SEARCH_DONE_TYPE = 'SEARCH_DONE';
export const SEARCH_FAILED_TYPE = 'SEARCH_FAILED';
export const SEARCH_LOADED_FROM_STORAGE_TYPE = 'SEARCH_LOADED_FROM_STORAGE';

const searchStarted = searchText => ({
    type: SEARCH_STARTED_TYPE,
    searchText: searchText,
});

const searchDone = results => ({
    type: SEARCH_DONE_TYPE,
    results,
});

const searchFailed = error => ({
    type: SEARCH_FAILED_TYPE,
    error,
});

const searchLoadedFromStorage = (searchText, results) => ({
    type: SEARCH_LOADED_FROM_STORAGE_TYPE,
    searchText,
    results,
});

export const loadDataFromStorage = () => dispatch => {
    const searchText = localStorage.getItem('searchText');
    const stringSearchResults = localStorage.getItem('searchResults');
    if (!searchText || !stringSearchResults) {
        return undefined;
    }
    return dispatch(
        searchLoadedFromStorage(searchText, JSON.parse(stringSearchResults))
    );
}

export const search = searchText => dispatch => {
    dispatch(searchStarted(searchText))
    return fetchData(searchText)
        .then(response => response.json())
        .then(parseResponse)
        .then(result => {
            saveDataToStorage(searchText, result);
            return dispatch(searchDone(result));
        })
        .catch(error => dispatch(searchFailed(error)));
};

function fetchData(searchText) {
    const apiUrl = `/api/v1/wordlist/en/lexicalCategory=${searchText}`;
    const appId = '05713465';
    const appKey = 'aa59cd7010fb1e8fa8c95d89b1d905e6';
    return fetch(apiUrl, {
        headers: {
            'app_id': '05713465',
            'app_key': 'aa59cd7010fb1e8fa8c95d89b1d905e6',
        },
        mode: 'cors',
    })
        .then(response => {
            if (isError(response)) {
                throw response.statusText;
            }
            else {
                return response;
            }
        });
}

function isError(response) {
    return response.status === 400 || response.status === 500 || response.status === 404;
}

function parseResponse(response) {
    return response.results.map(parseSingleResult)
}

function parseSingleResult(result) {
    return result.word;
}

function saveDataToStorage(searchText, results) {
    localStorage.setItem('searchText', searchText);
    localStorage.setItem('searchResults', JSON.stringify(results));
}
