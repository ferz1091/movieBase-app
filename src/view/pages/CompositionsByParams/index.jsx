// Core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../bus/general';

// Components
import { Movies, PageSwitcher, Error } from '../../components';

// Styles
import { CompositionsByParamsWrapper } from './styles';

export const CompositionsByParamsPage = () => {
    const { compositionsByParams, lang, isFetching, genres } = useSelector(state => state.general);
    const { page } = useParams();
    const navigate = useNavigate();
    const { getMoviesByParams, getTVShowsByParams } = useGeneral();
    useEffect(() => {
        if (!compositionsByParams.data.length && !isFetching.searchByParams) {
            navigate('/popular/1');
        }
        if (compositionsByParams.data.length && !compositionsByParams.data.some(pageData => pageData.page === Number(page))) {
            if (compositionsByParams.params.mode && compositionsByParams.params.mode === 'tv') {
                getTVShowsByParams(compositionsByParams.params.genre, compositionsByParams.params.year, Number(page), lang);
            } else if (compositionsByParams.params.mode) {
                getMoviesByParams(compositionsByParams.params.genre, compositionsByParams.params.year, Number(page), lang);
            }
        }
    }, [page])
    if (isFetching.searchByParams) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else if (compositionsByParams.data.length && compositionsByParams.data.some(pageData => pageData.page === Number(page))) {
        return (
            <CompositionsByParamsWrapper
                className='compositions-by-params'
                length={compositionsByParams.totalPages > 1}
                error={compositionsByParams.data.length && compositionsByParams.data.find(composition => composition.page === Number(page)).error ? true : null}
            >
                {compositionsByParams.params.mode && !compositionsByParams.data.find(composition => composition.page === Number(page)).error ?
                    <>
                        <h2>
                            {`Best ${compositionsByParams.params.genre ? genres.find(genre => genre.id === compositionsByParams.params.genre).name : ''} ${compositionsByParams.params.mode === 'tv' ? 'TV Shows' : 'movies'} of ${compositionsByParams.params.year ? compositionsByParams.params.year : 'all time'}`}
                        </h2>
                        <div className='compositions-list'>
                            {compositionsByParams.data.find(pageData => pageData.page === Number(page)) ?
                                compositionsByParams.data.find(pageData => pageData.page === Number(page)).data.map(composition => 
                                    <Movies 
                                        key={composition.id}
                                        {...composition}
                                        tv={compositionsByParams.params.mode === 'tv' ? true : false}
                                    />
                                )
                                :
                                null
                            }
                        </div>
                    </>
                    :
                    (compositionsByParams.data.length && compositionsByParams.data.find(composition => composition.page === Number(page)).error ?
                        <Error error={compositionsByParams.data.find(composition => composition.page === Number(page)).error} />
                        :
                        null
                    )
                }
                {compositionsByParams.totalPages ? 
                    <PageSwitcher 
                        page={Number(page)}
                        category='compositions'
                        totalPages={compositionsByParams.totalPages}
                    />
                    :
                    null
                }
            </CompositionsByParamsWrapper>
        )
    }
}
