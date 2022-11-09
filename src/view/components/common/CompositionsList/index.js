// Core
import React from 'react';

// Components
import { PageSwitcher, Movies, Error } from '../';

export const CompositionsList = (props) => {
    return (
        <>
            {props.modeData ?
                (props.modeData.data ?
                    props.compositionsData.find(movie => movie.name === props.category).data.find(movie => movie.page === props.page).data.map(movie =>
                        <Movies
                            key={movie.id}
                            tv={props.mode}
                            {...movie}
                        />
                    )
                    :
                    <Error error={props.modeData.error} />
                )
                :
                null
            }
            {props.compositionsData.find(item => item.name === props.category).totalPages ?
                <PageSwitcher
                    page={Number(props.page)}
                    category={props.category}
                    totalPages={props.compositionsData.find(item => item.name === props.category).totalPages}
                />
                :
                null
            }
        </>
    )
}
