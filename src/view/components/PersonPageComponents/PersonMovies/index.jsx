// Core
import React from 'react';
import { useTranslation } from 'react-i18next';

// Components
import { SectionHeader, Movies } from '../../common';

// Assets
import clips from '../../../../assets/icons/clips.png';

// Styles
import { PersonMoviesWrapper } from './styles';

export const PersonMovies = (props) => {
    const { t } = useTranslation();
    return (
        <PersonMoviesWrapper>
            <SectionHeader 
                img={clips}
                alt='Clips'
                value={props.mode ? `${t('person.compositions.movies')} ${props.currentPerson.name}` : `${t('person.compositions.tv_shows')} ${props.currentPerson.name}`}
            />
            <div className='mode-changer'>
                {props.currentPerson.credits.tv.length && props.currentPerson.credits.movie.length ?
                    <>
                        <span
                            className={props.mode ? 'mode-active' : 'mode'}
                            onClick={() => {
                                if (!props.mode) {
                                    props.setMoviePage(1);
                                    props.toggleMode(1);
                                }
                            }}
                        >
                            {t('switch_mode.movies')}
                        </span>
                        <span
                            className={!props.mode ? 'mode-active' : 'mode'}
                            onClick={() => {
                                if (props.mode) {
                                    props.setMoviePage(1);
                                    props.toggleMode(0);
                                }
                            }}
                        >
                            {t('switch_mode.tv_shows')}
                        </span>
                    </>
                    :
                    null
                }
                {props.mode && props.currentPerson.credits.movie.length > 20 || !props.mode && props.currentPerson.credits.tv.length > 20 ?
                    <>
                        {props.moviePage > 1 ?
                            <span
                                className='prev-page'
                                onClick={() => props.setMoviePage(props.moviePage - 1)}
                            >
                                {t('person.compositions.prev')}
                            </span>
                            :
                            null
                        }
                        {props.mode && props.currentPerson.credits.movie.length > props.moviePage * 20 || !props.mode && props.currentPerson.credits.tv.length > props.moviePage * 20 ?
                            <span
                                className='next-page'
                                onClick={() => props.setMoviePage(props.moviePage + 1)}
                            >
                                {t('person.compositions.next')}
                            </span>
                            :
                            null
                        }
                    </>
                    :
                    null
                }
            </div>
            {props.mode ?
                (!props.currentPerson.credits.movie.error ?
                    <div className='movie-list'>
                        {props.currentPerson.credits.movie.slice((props.moviePage - 1) * 20, props.moviePage * 20).map(movie =>
                            <Movies
                                key={movie.id}
                                {...movie}
                            />
                        )}
                    </div>
                    :
                    (!props.currentPerson.credits.tv.error ?
                        <div className='tv-list'>
                            {props.currentPerson.credits.tv.slice((props.moviePage - 1) * 20, props.moviePage * 20).map(movie =>
                                <Movies
                                    key={movie.id}
                                    tv={true}
                                    {...movie}
                                />
                            )}
                        </div>
                        :
                        null
                    )
                )
                :
                <div className='tv-list'>
                    {props.currentPerson.credits.tv.slice((props.moviePage - 1) * 20, props.moviePage * 20).map(movie =>
                        <Movies
                            key={movie.id}
                            tv={true}
                            {...movie}
                        />
                    )}
                </div>
            }
        </PersonMoviesWrapper>
    )
}
