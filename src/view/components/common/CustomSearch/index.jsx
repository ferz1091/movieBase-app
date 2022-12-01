// Core
import React, { useEffect } from 'react';

// Tools
import { generateYears, useCustomSearch } from '../../../../tools';

// Styles
import { CustomSearchWrapper } from './styles';

export const CustomSearch = (props) => {
    const { genresSelectIsOpen,
            toggleGenresSelect,
            genreInput,
            setGenreInput,
            yearSelectIsOpen,
            toggleYearSelect,
            yearInput,
            setYearInput,
            t } = useCustomSearch();
    useEffect(() => {
        if (yearSelectIsOpen) {
            toggleGenresSelect(false);
        }
    }, [yearSelectIsOpen])
    useEffect(() => {
        toggleGenresSelect(false);
    }, [genreInput])
    useEffect(() => {
        if (genresSelectIsOpen) {
            toggleYearSelect(false);
        }
    }, [genresSelectIsOpen])
    useEffect(() => {
        toggleYearSelect(false);
    }, [yearInput])
    return (
        <CustomSearchWrapper 
            genresSelectIsOpen={genresSelectIsOpen}
            yearSelectIsOpen={yearSelectIsOpen}
            styleMode={props.styleMode}
        >
            <div className='custom-search'>
                <div
                    className='genre-input'
                    onClick={() => toggleGenresSelect(true)}
                >
                    {genresSelectIsOpen ? 
                        <div className='select genre-select'>
                            <span 
                                className='option'
                                onClick={() => setGenreInput('All genres')}
                            >
                                {t('customSearch.genres')}
                            </span>
                            {props.genres.map(genre => 
                                <span 
                                    className='option'
                                    key={genre.id}
                                    onClick={() => setGenreInput(genre.name)}
                                >
                                    {genre.name}
                                </span>    
                            )}
                        </div>
                        :
                        null
                    }
                    <div>
                        <span>
                            {genreInput === 'All genres' ? t('customSearch.genres') : genreInput}
                        </span>
                        <span className='expand-genre'>
                        </span>
                    </div>
                </div>
                <div
                    className='year-input'
                    onClick={() => toggleYearSelect(true)}
                >
                    {yearSelectIsOpen ?
                        <div className='select year-select'>
                            <span 
                                className='option'
                                onClick={() => setYearInput('During all time')}
                            >
                                {t('customSearch.time')}
                            </span>
                            {generateYears().map(year => 
                                <span 
                                    className='option'
                                    key={year}
                                    onClick={() => setYearInput(year)}
                                >
                                    {year}
                                </span>    
                            )}
                        </div>
                        :
                        null
                    }
                    <span>
                        {yearInput === 'During all time' ? t('customSearch.time') : yearInput}
                        <span className='expand-year'>
                        </span>
                    </span>
                </div>
                <span 
                    className='search-submit'
                    onClick={() => {
                        props.resetCompositionsByParams();
                        props.getCompositionsByParams(genreInput === 'All genres' ? null : props.genres.find(genre => genre.name === genreInput).id, yearInput === 'During all time' ? null : yearInput, 1, props.lang);
                        props.navigate('/compositions/1');
                    }}
                >
                    {t('customSearch.search')}
                </span>
            </div>
        </CustomSearchWrapper>
    )
}
