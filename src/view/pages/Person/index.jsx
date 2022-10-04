// Core
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../bus/general';

// Components
import { InfoProperty, Social, Movies } from '../../components/';

// Assets
import person_null from '../../../assets/actor_null.png';
import bio from '../../../assets/icons/bio.png';
import person from '../../../assets/icons/person.png';
import clips from '../../../assets/icons/clips.png';

// Styles
import { PersonWrapper } from './styles';

export const PersonPage = () => {
    const [moviePage, setMoviePage] = useState(1);
    const [mode, toggleMode] = useState(1);
    const { currentPerson, isFetching, lang } = useSelector(state => state.general);
    const { id } = useParams();
    const { getCurrentPerson } = useGeneral();
    useEffect(() => {
        if (!currentPerson || currentPerson.id !== id) {
            getCurrentPerson(id, lang);
        }
    }, [id, lang])
    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else if (currentPerson && !currentPerson.error) {
        return (
            <PersonWrapper>
                <h2>
                    <img
                        src={person}
                        alt=''
                    />
                    {currentPerson.name}
                </h2>
                <section className='person-header'>
                    <div className='person-avatar'>
                        <img
                            src={currentPerson.profile_path ? `https://image.tmdb.org/t/p/w200${currentPerson.profile_path}` : person_null}
                            alt=''
                        />
                    </div>
                    <div className='person-main-info'>
                        <InfoProperty
                            class='birthday'
                            name='Birthday: '
                            value={new Date(currentPerson.birthday).toLocaleDateString()}
                            isVisible={currentPerson.birthday}
                        />
                        <InfoProperty
                            class='deathday'
                            name='Deathday: '
                            value={new Date(currentPerson.deathday).toLocaleDateString()}
                            isVisible={currentPerson.deathday}
                        />
                        <InfoProperty
                            class='birth-place'
                            name='Birth place: '
                            value={currentPerson.place_of_birth}
                            isVisible={currentPerson.place_of_birth}
                        />
                        <Social {...currentPerson.social} />
                    </div>
                </section>
                {currentPerson.biography ?
                    <section className='biography'>
                        <h2>
                            <img
                                src={bio}
                                alt=''
                            />
                            Biography
                        </h2>
                        <div className='biography-text'>
                            {currentPerson.biography}
                        </div>
                    </section>
                    :
                    null
                }
                <section className='person-movies'>
                    <h2>
                        <img
                            src={clips}
                            alt=''
                        />
                        {mode ? `Movies with ${currentPerson.name}` : `TV series with ${currentPerson.name}`}
                    </h2>
                    <div className='mode-changer'>
                        {currentPerson.credits.tv.length ? 
                            <>
                                <span
                                    className={mode ? 'mode-active' : 'mode'}
                                    onClick={() => {
                                        if (!mode) {
                                            setMoviePage(1);
                                            toggleMode(1);
                                        }
                                    }}
                                >
                                    Movies
                                </span>
                                <span
                                    className={!mode ? 'mode-active' : 'mode'}
                                    onClick={() => {
                                        if (mode) {
                                            setMoviePage(1);
                                            toggleMode(0);
                                        }
                                    }}
                                >
                                    TV shows
                                </span>
                            </>
                            :
                            null
                        }
                        {mode && currentPerson.credits.movie.length > 20 || !mode && currentPerson.credits.tv.length > 20 ?
                            <>
                                {moviePage > 1 ?
                                    <span 
                                        className='prev-page'
                                        onClick={() => setMoviePage(moviePage - 1)}
                                    >
                                        Previous
                                    </span>
                                    :
                                    null
                                }
                                {mode && currentPerson.credits.movie.length > moviePage * 20 || !mode && currentPerson.credits.tv.length > moviePage * 20 ?
                                    <span 
                                        className='next-page'
                                        onClick={() => setMoviePage(moviePage + 1)}
                                    >
                                        Next
                                    </span>
                                    :
                                    null
                                }
                            </>
                            :
                            null
                        }            
                    </div>
                    {mode ?
                        <div className='movie-list'>
                            {currentPerson.credits.movie.slice((moviePage - 1) * 20, moviePage * 20).map(movie =>
                                <Movies
                                    key={movie.id}
                                    {...movie}
                                />
                            )}
                        </div>
                        :
                        <div className='tv-list'>
                            {currentPerson.credits.tv.slice((moviePage - 1) * 20, moviePage * 20).map(movie =>
                                <Movies
                                    key={movie.id}
                                    tv={true}
                                    {...movie}
                                />
                            )}
                        </div>
                    }
                </section>
            </PersonWrapper>
        )
    } else if (currentPerson && currentPerson.error) {
        return (
            <PersonWrapper>
                <div className='error'>
                    {currentPerson.error}
                </div>
            </PersonWrapper>
        )
    }
}
