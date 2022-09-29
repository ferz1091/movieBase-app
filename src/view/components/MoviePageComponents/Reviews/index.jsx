// Core
import React from 'react';

// Components
import { Review } from '../../common';

// Assets
import reviews from '../../../../assets/icons/reviews.png';

// Styles
import { ReviewsWrapper } from './styles';

export const Reviews = (props) => {
    return (
        <ReviewsWrapper className='reviews'>
            <h2>
                <img
                    src={reviews}
                    alt=''
                />
                Reviews
            </h2>
            {props.currentMovie.reviews.data.length > 0 ?
                <>
                    {props.currentMovie.reviews.totalPages > 1 ?
                        <div
                            className='reviewPage-changer'
                        >
                            {props.reviewPage > 1 ?
                                <span
                                    className='prev-reviewPage'
                                    onClick={() => props.setReviewPage(props.reviewPage - 1)}
                                >
                                    {`< Previous`}
                                </span>
                                :
                                null
                            }
                            {props.currentMovie.reviews.totalPages !== props.reviewPage ?
                                <span
                                    className='next-reviewPage'
                                    onClick={() => props.getCurrentMovieReviewsByPage(props.id, props.lang, props.reviewPage + 1, (arg) => props.setReviewPage(arg), props.reviewPage + 1)}
                                >
                                    {`Next >`}
                                </span>
                                :
                                null
                            }
                        </div>
                        :
                        null
                    }
                    {props.currentMovie.reviews.data[props.reviewPage - 1].reviews.length > 0 ?
                        <dl className='review-list'>
                            {props.currentMovie.reviews.data[props.reviewPage - 1].reviews.map(review =>
                                <Review key={review.author} {...review} />
                            )}
                        </dl>
                        :
                        null
                    }
                </>
                :
                null
            }
        </ReviewsWrapper>
    )
}
