// Core
import styled from 'styled-components';

// Assets
import imdb from '../../../../assets/icons/imdb.png';
import imdb_nonactive from '../../../../assets/icons/imdb_nonactive.png';
import twitter from '../../../../assets/icons/twitter.png';
import twitter_nonactive from '../../../../assets/icons/twitter_nonactive.png';
import instagram from '../../../../assets/icons/instagram.png';
import instagram_nonactive from '../../../../assets/icons/instagram_nonactive.png';
import facebook from '../../../../assets/icons/facebook.png';
import facebook_nonactive from '../../../../assets/icons/facebook_nonactive.png';

export const SocialWrapper = styled.div`
background-color: rgba(50,50,50,0.5);
span {
    display: inline-block;
    width: 50px;
    height: 50px;
    background-position: center;
    background-repeat: no-repeat;
    padding-right: 15px;
}
.imdb {
    cursor: ${props => props.ids.imdb_id ? 'pointer;' : 'not-allowed;'};
    background-image: ${props => props.ids.imdb_id ? `url(${imdb});` : `url(${imdb_nonactive});`}
}
.twitter {
    cursor: ${props => props.ids.twitter_id ? 'pointer;' : 'not-allowed;'};
    background-image: ${props => props.ids.twitter_id ? `url(${twitter});` : `url(${twitter_nonactive});`}
}
.instagram {
    cursor: ${props => props.ids.instagram_id ? 'pointer;' : 'not-allowed;'};
    background-image: ${props => props.ids.instagram_id ? `url(${instagram});` : `url(${instagram_nonactive});`}
}
.facebook {
    cursor: ${props => props.ids.facebook_id ? 'pointer;' : 'not-allowed;'};
    background-image: ${props => props.ids.facebook_id ? `url(${facebook});` : `url(${facebook_nonactive});`}
}
`;
