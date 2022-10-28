// Core
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../bus/general';

export const useCollection = () => {
    const { currentCollection, lang, isFetching, genres } = useSelector(state => state.general);
    const { id } = useParams();
    const { getCurrentCollection } = useGeneral();
    return {
        currentCollection,
        lang,
        isFetching,
        genres,
        id,
        getCurrentCollection
    }
}
