// Core
import React, { useEffect } from 'react';

// Tools
import { useMovie } from '../../../tools';

// Components
import { TVShowInfoHeader, Seasons, Reviews } from '../../components';

// Styles
import { TVShowWrapper } from './styles';

export const TVShowPage = () => {
    const { currentTVShow, 
            id, 
            lang,
            getCurrentTVShow, 
            isFetching, 
            reviewPage, 
            setReviewPage, 
            getCurrentTVShowReviewsByPage } = useMovie();
    useEffect(() => {
        if (!currentTVShow || currentTVShow.id !== id) {
            getCurrentTVShow(id, lang);
        }
    }, [id, lang])
    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else if (currentTVShow) {
        return (
            <TVShowWrapper>
                <TVShowInfoHeader currentTVShow={currentTVShow} />
                <Reviews
                    currentMovie={currentTVShow}
                    getCurrentMovieReviewsByPage={getCurrentTVShowReviewsByPage}
                    reviewPage={reviewPage}
                    setReviewPage={setReviewPage}
                    id={id}
                    lang={lang}
                />
                <Seasons />
            </TVShowWrapper>
        )
    }
}
