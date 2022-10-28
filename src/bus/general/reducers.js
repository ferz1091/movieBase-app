export const toggleIsFetchingMain = (state, action) => {
    return {
        ...state,
        isFetching: {...state.isFetching, main: action.payload}
    }
}
export const setGenres = (state, action) => {
    return {
        ...state,
        genres: action.payload.error ? {error: action.payload.error} : [...action.payload]
    }
}
export const switchMode = (state, action) => {
    return {
        ...state,
        mode: action.payload
    }
}
export const resetSearchResults = (state, action) => {
    return {
        ...state,
        searchResults: []
    }
}
