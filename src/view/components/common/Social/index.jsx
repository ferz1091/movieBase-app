// Core
import React from 'react';

// Styles
import { SocialWrapper } from './styles';

const SocialBackground = (props) => {
    return (
        <span className={props.class}>
        </span>
    )
}

export const Social = (props) => {
    return (
        <SocialWrapper ids={props}>
            {props.imdb_id ?
                <a
                    target='_blank'
                    href={props.imdb_id ? `https://www.imdb.com/title/${props.imdb_id}/` : '#'}
                    rel="noreferrer"
                >
                    <SocialBackground class='imdb' />
                </a>
                :
                <SocialBackground class='imdb' />
            }
            {props.twitter_id ? 
                <a
                    target='_blank'
                    href={props.twitter_id ? `https://www.twitter.com/${props.twitter_id}/` : ''} 
                    rel="noreferrer"
                >
                    <SocialBackground class='twitter' />
                </a>
                :
                <SocialBackground class='twitter' />
            }
            {props.instagram_id ?
                <a
                    target='_blank'
                    href={props.instagram_id ? `https://www.instagram.com/${props.instagram_id}/` : '#'}
                    rel="noreferrer"
                >
                    <SocialBackground class='instagram' />
                </a>
                :
                <SocialBackground class='instagram' />
            }
            {props.facebook_id ? 
                <a
                    target='_blank'
                    href={props.facebook_id ? `https://www.facebook.com/${props.facebook_id}/` : '#'}
                    rel="noreferrer"
                >
                    <SocialBackground class='facebook' />
                </a>
                :
                <SocialBackground class='facebook' />
            }
        </SocialWrapper>
    )
}
