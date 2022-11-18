// Core
import React, { useEffect } from 'react';

// Bus
import { useGeneral } from '../../../bus/general';

// Components
import { TVShowInfoHeader, Seasons, Reviews, Similar, Error, Spinner } from '../../components';

// Tools
import { useMovie } from '../../../tools';

// Styles
import { TVShowWrapper } from './styles';

export const TVShowPage = () => {
    const { getCurrentTVShow, 
            getCurrentTVShowReviewsByPage, 
            resetCompositionsByParams, 
            getTVShowsByParams } = useGeneral();
    const { currentTVShow, 
            id, 
            lang,
            isFetching, 
            reviewPage,
            genres,
            setReviewPage,
            styleMode} = useMovie();
    useEffect(() => {
        if (!currentTVShow || currentTVShow.id !== id) {
            getCurrentTVShow(id, lang, !genres.length);
        }
    }, [id, lang])
    if (isFetching.main) {
        return (
            <TVShowWrapper>
                <Spinner />
            </TVShowWrapper>
        )
    } else if (currentTVShow && !currentTVShow.error) {
        return (
            <TVShowWrapper styleMode={styleMode ? 1 : 0}>
                <TVShowInfoHeader 
                    currentTVShow={currentTVShow}
                    lang={lang}
                    resetCompositionsByParams={resetCompositionsByParams}
                    getTVShowsByParams={getTVShowsByParams}
                />
                {!currentTVShow.reviews.error && currentTVShow.reviews.totalPages ?
                    <Reviews
                        currentMovie={currentTVShow}
                        getCurrentMovieReviewsByPage={getCurrentTVShowReviewsByPage}
                        reviewPage={reviewPage}
                        setReviewPage={setReviewPage}
                        id={id}
                        lang={lang}
                        styleMode={styleMode ? 1 : 0}
                    />
                    :
                    null
                }
                <Seasons />
                {!currentTVShow.similar.error && currentTVShow.similar.length ?
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
            <TVShowWrapper error={currentTVShow.error}>
                <Error error={currentTVShow.error} />
            </TVShowWrapper>
        )
    }
}
