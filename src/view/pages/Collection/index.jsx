// Core
import React, { useEffect } from 'react';

// Components
import { Movies } from '../../components';

// Tools
import { useCollection } from '../../../tools';

// Styles
import { CollectionPageWrapper } from './styles';

export const CollectionPage = () => {
    const { currentCollection, 
            lang,
            isFetching, genres,
            id,
            getCurrentCollection } = useCollection();
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
