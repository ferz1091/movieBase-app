// Core
import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

// Bus
import { useGeneral } from '../../../bus/general';

// Components
import { Movies } from '../../components';

// Styles
import { CollectionPageWrapper } from './styles';

export const CollectionPage = () => {
    const { currentCollection, lang, isFetching, genres } = useSelector(state => state.general);
    const { id } = useParams();
    const { getCurrentCollection } = useGeneral();

    useEffect(() => {
        if (!currentCollection || currentCollection.id !== id) {
            getCurrentCollection(id, lang, !genres.length);
        }
    }, [id, lang])
    
    if (isFetching.main) {
        return (
            <div>
                SPINNER
            </div>
        )
    } else if (currentCollection && !currentCollection.error) {
        return (
            <CollectionPageWrapper>
            <h2>
                {currentCollection.name}
            </h2>
            <div className='parts'>
                {currentCollection.parts.map(part => 
                    <Movies 
                        key={part.id}
                        {...part}
                    />    
                )}
            </div>
            </CollectionPageWrapper>
        )
    }
}
