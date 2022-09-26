export const toggleIsFetching = (state, action) => {
    return {
        ...state,
        isFetching: action.payload
    }
}

export const switchMode = (state, action) => {
    return {
        ...state,
        mode: state.mode !== action.payload ? action.payload : state.mode
    }
}

export const getGenres = (state, action) => {
}

export const setGenres = (state, action) => {
    return {
        ...state,
        genres: [...action.payload]
    }
}

export const getCurrentMovie = (state, action) => {
}

export const setCurrentMovie = (state, action) => {
    return {
        ...state,
        currentMovie: action.payload
    }
}
export const setCurrentMovieCredits = (state, action) => {
    return {
        ...state,
        currentMovie: {...state.currentMovie, ...action.payload}
    }
}
export const setCurrentMovieVideos = (state, action) => {
    return {
        ...state,
        currentMovie: {...state.currentMovie, videos: [...action.payload]}
    }
}
