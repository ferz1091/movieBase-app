export const setTVShows = (state, action) => {
    return [
        ...state.filter(item => item.name !== action.payload.category),
        {
            ...state.find(item => item.name === action.payload.category),
            data: [...(state.find(item => item.name === action.payload.category).data),
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
        {
            ...state.find(item => item.name === action.payload.category),
            totalPages: action.payload.totalPages
        }
    ]
}
