export const setMovies = (state, action) => {
    return [
        ...state.filter(item => item.name !== action.payload.category),
        {...state.find(item => item.name === action.payload.category),
            data: [...(state.find(item => item.name === action.payload.category).data)].some(item => item.page === action.payload.page) ?
                [...(state.find(item => item.name === action.payload.category).data)]
                :
                [...(state.find(item => item.name === action.payload.category).data),
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
        ...state.filter(item => item.name !== action.payload.category),
        {...state.find(item => item.name === action.payload.category),
            totalPages: action.payload.totalPages    
        }
    ]
}
export const resetMovies = (state, action) => {
    return [
            { name: 'popular', data: [], totalPages: null },
            { name: 'top_rated', data: [], totalPages: null },
            { name: 'upcoming', data: [], totalPages: null },
            { name: 'now_playing', data: [], totalPages: null }
        ]
    
}
