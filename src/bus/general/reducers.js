export const toggleIsFetchingMain = (state, action) => {
    return {
        ...state,
        isFetching: {...state.isFetching, main: action.payload}
    }
}
export const toggleIsFetchingReviews = (state, action) => {
    return {
        ...state,
        isFetching: { ...state.isFetching, reviews: action.payload }
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
export const getCurrentMovieReviewsByPage = (state, action) => {
}
export const setCurrentMovieReviews = (state, action) => {
    if (state.currentMovie.reviews) {
        return {
            ...state,
            currentMovie: { ...state.currentMovie, reviews: { totalPages: action.payload.totalPages, data: [...state.currentMovie.reviews.data, {page: action.payload.page, reviews: action.payload.reviews}]} }
        }
    } else {
        return {
            ...state,
            currentMovie: { ...state.currentMovie, reviews: { totalPages: action.payload.totalPages, data: [{ page: action.payload.page, reviews: action.payload.reviews }]}}
        }
    }
}
export const setSimilarMovies = (state, action) => {
    return {
        ...state,
        currentMovie: {...state.currentMovie, similar: action.payload}
    }
}
export const setMovieSocialIds = (state, action) => {
    return {
        ...state,
        currentMovie: {...state.currentMovie, social: action.payload}
    }
}
export const setCollection = (state, action) => {
    return {
        ...state,
        currentMovie: {...state.currentMovie, collection: action.payload}
    }
}
export const getCurrentPerson = (state, action) => {

}
export const setCurrentPerson = (state, action) => {
    return {
        ...state,
        currentPerson: action.payload
    }
}
export const setPersonSocialIds = (state, action) => {
    return {
        ...state,
        currentPerson: {...state.currentPerson, social: action.payload}
    }
}
export const setPersonMovieCredits = (state, action) => {
    return {
        ...state,
        currentPerson: {...state.currentPerson, credits: {...state.currentPerson.credits, movie: action.payload}}
    }
}
export const setPersonTVCredits = (state, action) => {
    return {
        ...state,
        currentPerson: {...state.currentPerson, credits: {...state.currentPerson.credits, tv: action.payload}}
    }
}
export const getCurrentTVShow = (state, action) => {
}
export const setCurrentTVShow = (state, action) => {
    return {
        ...state,
        currentTVShow: action.payload
    }
}
export const setCurrentTVShowSocialIds = (state, action) => {
    return {
        ...state,
        currentTVShow: {...state.currentTVShow, social: action.payload}
    }
}
export const getSeason = (state, action) => {
}
export const setSeason = (state, action) => {
    return {
        ...state,
        currentTVShow: {...state.currentTVShow, seasons: state.currentTVShow.seasons.map(season => {
            if (season.season_number === action.payload.season_number) {
                return {...season, ...action.payload, isLoaded: true}
            } else {
                return season
            }
        })}
    }
}
export const toggleIsFetchingSeasons = (state, action) => {
    return {
        ...state,
        isFetching: {...state.isFetching, seasons: action.payload}
    }
}
