// Core
import styled from 'styled-components';

// Assets
import author_null from '../../../../assets/actor_null.png';
import show from '../../../../assets/icons/show.png';
import hide from '../../../../assets/icons/hide.png';
import show_hover from '../../../../assets/icons/show_hover.png';
import hide_hover from '../../../../assets/icons/hide_hover.png';

export const ReviewAuthor = styled.dt`
display: flex;
margin-bottom: 10px;
color: black;
.avatar {
    display: inline-block;
    min-width: 50px;
    max-width: 50px;
    height: 50px;
    background-image: ${props => props.avatar ? `url(${props.avatar});` : `url(${author_null});`};
    background-position: center;
    background-repeat: no-repeat;
    background-size: cover;
    border-radius: 20px;
}
.user {
    display: flex;
    flex-direction: column;
    padding-left: 10px;
    font-weight: 600;
    .username, .create-date {
        font-size: 12px;
        font-weight: normal;
        color: rgb(80, 80, 80);
        font-style: oblique;
    }
    .create-date {
        color: rgb(20, 20, 20);
        font-style: normal;
    }
}
@media (max-width: 768px) {
    flex-direction: column;
    .avatar {
        margin-left: 10px;
    }
}
`;

export const ReviewContent = styled.dd`
position: relative;
margin: 0;
margin-bottom: 10px;
color: black;
font-style: italic;
vertical-align: middle;
background-color: rgb(200,200,200);
padding: 5px;
display: flex;
align-items: center;
.hide-button {
    cursor: pointer;
    transition: all linear 0.2s;
    display: inline-block;
    width: 20px;
    height: 20px;
    position: absolute;
    bottom: 0;
    right: 5px;
    background-image: ${props => props.showFullReview ? `url(${show});` : `url(${hide});`};
    
}
.hide-button:hover {
    background-image: ${props => props.showFullReview ? `url(${hide_hover});` : `url(${show_hover});`};
}
`;
