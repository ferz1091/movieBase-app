export const getMovies = (state, action) => {
}

export const setMovies = (state, action) => {
    return [
        ...state.filter(item => item.name !== action.payload.mode),
        {...state.filter(item => item.name === action.payload.mode)[0],
            data: [...(state.filter(item => item.name === action.payload.mode)[0].data),
                {
                    page: action.payload.page,
                    data: action.payload.data,
                    error: action.payload.error
                }
            ]
        }
    ]
}

