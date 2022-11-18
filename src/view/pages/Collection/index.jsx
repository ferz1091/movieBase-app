// Core
import React, { useEffect } from 'react';

// Components
import { Movies, Error, Spinner } from '../../components';

// Tools
import { useCollection } from '../../../tools';

// Styles
import { CollectionPageWrapper } from './styles';

export const CollectionPage = () => {
    const { currentCollection, 
            lang,
            isFetching, genres,
            id,
            styleMode,
            getCurrentCollection } = useCollection();
    useEffect(() => {
        if (!currentCollection || currentCollection.id !== id) {
            getCurrentCollection(id, lang, !genres.length);
        }
    }, [id, lang])
    
    if (isFetching.main) {
        return (
            <CollectionPageWrapper className='collection-main'>
                <Spinner />
            </CollectionPageWrapper>
        )
    } else if (currentCollection && !currentCollection.error) {
        return (
            <CollectionPageWrapper 
                className='collection-main'
                styleMode={styleMode ? 1 : 0}
            >
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
    } else if (currentCollection && currentCollection.error) {
        return (
            <CollectionPageWrapper error={currentCollection.error}>
                <Error error={currentCollection.error} />
            </CollectionPageWrapper>
        )
    }
}
