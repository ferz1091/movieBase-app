// Core
import React, { useState, useEffect } from 'react';

// Tools
import { generateYears } from '../../../../tools';

// Styles
import { CustomSearchWrapper } from './styles';

export const CustomSearch = (props) => {
    const [genresSelectIsOpen, toggleGenresSelect] = useState(false);
    const [genreInput, setGenreInput] = useState('All genres');
    const [yearSelectIsOpen, toggleYearSelect] = useState(false);
    const [yearInput, setYearInput] = useState('During all time');
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
        >
            <div className='custom-search'>
                <div
                    className='genre-input'
                    onClick={() => toggleGenresSelect(true)}
                >
                    {genresSelectIsOpen ? 
                        <div className='select'>
                            <span 
                                className='option'
                                onClick={() => setGenreInput('All genres')}
                            >
                                All genres
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
                            {genreInput}
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
                        <div className='select'>
                            <span 
                                className='option'
                                onClick={() => setYearInput('During all time')}
                            >
                                During all time
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
                        {yearInput}
                        <span className='expand-year'>
                        </span>
                    </span>
                </div>
                <span className='search-submit'>
                    SEARCH
                </span>
            </div>
        </CustomSearchWrapper>
    )
}
