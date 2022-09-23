export const getMovies = (state, action) => {
}

export const setMovies = (state, action) => {
    return [
        ...state.filter(item => item.name !== action.payload.mode),
        {...state.find(item => item.name === action.payload.mode),
            data: [...(state.find(item => item.name === action.payload.mode).data),
                {
                    page: action.payload.page,
                    data: action.payload.data,
                    error: action.payload.error
                }
            ]
        }
    ]
}

export const setTotalPages = (state, action) => {
    return [
        ...state.filter(item => item.name !== action.payload.mode),
        {...state.find(item => item.name === action.payload.mode),
            totalPages: action.payload.totalPages    
        }
    ]
}

