export const toggleIsFetching = (state, action) => {
    return {
        ...state,
        isFetching: action.payload
    }
}