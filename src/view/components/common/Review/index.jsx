// Core
import React from 'react';
import { useState } from 'react';

// Styles
import { ReviewAuthor, ReviewContent } from './styles';

export const Review = (review) => {
    const [showFullReview, toggleShowFullReview] = useState(false);
    return (
        <>
            <ReviewAuthor 
                avatar={review.author_details.avatar_path ? 
                    review.author_details.avatar_path.startsWith('/http') ?
                        review.author_details.avatar_path.slice(1)
                        :
                        `https://image.tmdb.org/t/p/w200${review.author_details.avatar_path}` 
                    : null
                }
            >
                <span className='avatar'>
                </span>
                <span className='user'>
                    <span>
                        {review.author}
                    </span>
                    <span className='username'>
                        {review.author_details.username}
                    </span>
                    <span className='create-date'>
                        {new Date(review.created_at).toLocaleString().slice(0, 17)}
                    </span>
                </span>
            </ReviewAuthor>
            <ReviewContent 
                showFullReview={showFullReview}
                review_length={review.content.length}
                onClick={() => toggleShowFullReview(!showFullReview)}
            >
                {review.content.length > 300 ? showFullReview ? review.content : `${review.content.slice(0, 300)}...` : review.content}
                {review.content.length > 300 ?
                    <span className='hide-button'>
                    </span>
                    :
                    null
                }
                
            </ReviewContent>
        </>
    )
}