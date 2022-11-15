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
export const resetCompositionsByParams = (state, action) => {
    return {
        ...state,
        compositionsByParams: {data: [], totalPages: null}
    }
}
export const setCategory = (state, action) => {
    return {
        ...state,
        categoryValue: action.payload
    }
}
export const toggleStyle = (state, action) => {
    return {
        ...state,
        styleMode: action.payload
    }
}
