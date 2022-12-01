// Core
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

export const useCustomSearch = () => {
    const { t } = useTranslation();
    const [genresSelectIsOpen, toggleGenresSelect] = useState(false);
    const [genreInput, setGenreInput] = useState('All genres');
    const [yearSelectIsOpen, toggleYearSelect] = useState(false);
    const [yearInput, setYearInput] = useState('During all time');
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
