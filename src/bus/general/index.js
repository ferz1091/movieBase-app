// Core
import { useDispatch } from 'react-redux/es/exports';

// Actions
import { generalActions } from './slice';

export const useGeneral = () => {
    const dispatch = useDispatch();
    function toggleIsFetching(isFetching) {
        dispatch(generalActions.toggleIsFetching(isFetching))
    }
    return {
        toggleIsFetching
    }
}