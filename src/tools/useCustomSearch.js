// Core
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useCustomSearch = () => {
    const { t } = useTranslation();
    const [genresSelectIsOpen, toggleGenresSelect] = useState(false);
    const [genreInput, setGenreInput] = useState(t('customSearch.genres'));
    const [yearSelectIsOpen, toggleYearSelect] = useState(false);
    const [yearInput, setYearInput] = useState(t('customSearch.time'));
    return {
        genresSelectIsOpen, 
        toggleGenresSelect,
        genreInput, 
        setGenreInput,
        yearSelectIsOpen, 
        toggleYearSelect,
        yearInput,
        setYearInput,
        t
    }
}
