// Core
import { useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../bus/general';

export const usePerson = () => {
    const [moviePage, setMoviePage] = useState(1);
    const [mode, toggleMode] = useState(1);
    const { currentPerson, isFetching, lang, genres, styleMode } = useSelector(state => state.general);
    const { id } = useParams();
    const { getCurrentPerson } = useGeneral();
    return {
        moviePage, 
        setMoviePage,
        mode,
        toggleMode,
        currentPerson,
        isFetching,
        lang,
        genres,
        id,
        getCurrentPerson,
        styleMode
    }
}
