// Core
import React from 'react';

// Components
import { SectionHeader, Movies } from '../../common';

// Assets
import clips from '../../../../assets/icons/clips.png';

// Styles
import { PersonMoviesWrapper } from './styles';

export const PersonMovies = (props) => {
    return (
        <PersonMoviesWrapper>
            <SectionHeader 
                img={clips}
                alt='Clips'
                value={props.mode ? `Movies with ${props.currentPerson.name}` : `TV series with ${props.currentPerson.name}`}
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
                            Movies
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
                            TV shows
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
                                Previous
                            </span>
                            :
                            null
                        }
                        {props.mode && props.currentPerson.credits.movie.length > props.moviePage * 20 || !props.mode && props.currentPerson.credits.tv.length > props.moviePage * 20 ?
                            <span
                                className='next-page'
                                onClick={() => props.setMoviePage(props.moviePage + 1)}
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
