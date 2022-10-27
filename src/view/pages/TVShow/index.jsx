// Core
import React, { useEffect } from 'react';

// Tools
import { useMovie } from '../../../tools';

// Components
import { TVShowInfoHeader, Seasons, Reviews, Similar } from '../../components';

// Styles
import { TVShowWrapper } from './styles';

export const TVShowPage = () => {
    const { currentTVShow, 
            id, 
            lang,
            getCurrentTVShow, 
            isFetching, 
            reviewPage,
            genres,
            setReviewPage, 
            getCurrentTVShowReviewsByPage} = useMovie();
    useEffect(() => {
        if (!currentTVShow || currentTVShow.id !== id) {
            getCurrentTVShow(id, lang, !genres.length);
        }
    }, [id, lang])
    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else if (currentTVShow && !currentTVShow.error) {
        return (
            <TVShowWrapper>
                <TVShowInfoHeader currentTVShow={currentTVShow} />
                {!currentTVShow.reviews.error ?
                    <Reviews
                    currentMovie={currentTVShow}
                    getCurrentMovieReviewsByPage={getCurrentTVShowReviewsByPage}
                    reviewPage={reviewPage}
                    setReviewPage={setReviewPage}
                    id={id}
                    lang={lang}
                    />
                    :
                    null
                }
                <Seasons />
                {!currentTVShow.similar.error ?
                    <Similar 
                        currentMovie={currentTVShow} 
                        tv={true} 
                    />
                    :
                    null
                }
            </TVShowWrapper>
        )
    } else if (currentTVShow && currentTVShow.error) {
        return (
            <TVShowWrapper>
                <div className='error'>
                    {currentTVShow.error}
                </div>
            </TVShowWrapper>
        )
    }
}
