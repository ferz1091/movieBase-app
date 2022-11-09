// Core
import React, { useEffect } from 'react';

// Components
import { PersonInfoHeader, Biography, PersonMovies, Error } from '../../components/';

// Tools
import { usePerson } from '../../../tools';

// Styles
import { PersonWrapper } from './styles';

export const PersonPage = () => {
    const { moviePage, 
            setMoviePage,
            mode,
            toggleMode,
            currentPerson,
            isFetching,
            lang,
            genres,
            id,
            getCurrentPerson } = usePerson();
    useEffect(() => {
        if (!currentPerson || currentPerson.id !== id) {
            getCurrentPerson(id, lang, !genres.length);
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
                <PersonInfoHeader currentPerson={currentPerson} />
                {currentPerson.biography ?
                    <Biography biography={currentPerson.biography} />
                    :
                    null
                }
                {currentPerson.credits.movie.error && currentPerson.credits.tv.error ?
                    null
                    :
                    <PersonMovies 
                        currentPerson={currentPerson}
                        mode={mode}
                        moviePage={moviePage}
                        setMoviePage={setMoviePage}
                        toggleMode={toggleMode}
                    />
                }
            </PersonWrapper>
        )
    } else if (currentPerson && currentPerson.error) {
        return (
            <PersonWrapper error={currentPerson.error}>
                <Error error={currentPerson.error} />
            </PersonWrapper>
        )
    }
}
