// Core
import styled from 'styled-components';

// Assets
import play from '../../../assets/icons/play.png';
import play_hover from '../../../assets/icons/play_hover.png';
import right from '../../../assets/icons/right.png';
import right_hover from '../../../assets/icons/right_hover.png';
import left from '../../../assets/icons/left.png';
import left_hover from '../../../assets/icons/left_hover.png';

export const MoviePageWrapper = styled.main`
position: relative;
margin-top: 15vh;
box-sizing: border-box;
min-height: 84vh;
display: flex;
flex-direction: column;
color: white;
overflow: auto;
.info-header {
background-image: url(${props => props.backgroundURL});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
background-attachment: scroll;
}
h1 {
    position: relative;
    margin: 0;
    background: rgba(50, 50, 50, 0.5);
    padding: 20px 0 20px 15px;
    font-size: 30px;
    .title {
        font-family: Spectral ,Arial, Helvetica, sans-serif;
        letter-spacing: 0.1em;
        font-style: italic;
    }
}
.movie-info {
    display: flex;
    flex-direction: column;
    div {
        padding: 10px 15px;
    }
    font-weight: 500;
}
.genres {
    padding: 10px 0 0 5px;
    span {
        cursor: pointer;
        padding: 0 10px;
        margin: 0 5px;
        border: 1px solid white;
        border-radius: 15px;
        background-color: rgb(50, 50, 50);
        box-shadow: 0px 0px 2px black;
    }
    span:hover {
        background-color: rgb(100, 100, 100);
    }
}
.backdrop {
    position: absolute;
    width: 90vw;
}
.title {
    max-width: 80%;
    text-shadow: 1px 1px 2px black;
}
.rating {
    position: absolute;
    top: 50%; right: 15px;
    transform: translate(0, -50%);
    font-size: 24px;
    text-shadow: 1px 1px 2px black;
    color: ${props => props.vote < 3 ? '#cc0000' :
        props.vote < 5 ? '#e69138' :
            props.vote < 7 ? '#f7f10c' :
                props.vote < 8 ? '#8fce00' : '#00a105'
    };
}
.tagline {
    padding: 30px 15px;
    font-size: 20px;
    font-style: italic;
    font-weight: 600;
    text-shadow: 1px 1px 2px black;
}
.overview {
    text-shadow: 1px 1px 2px black;
    background: rgba(50, 50, 50, 0.5);
}
.original-title {
    padding: 10px 25px;
    font-size: 20px;
}
.cast {
    .cast-list {
        background: rgba(50, 50, 50, 0.2);
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
}
.cast, .videos, .reviews, .similar {
    background-color: rgb(200, 200, 200);
    h2 {
        color: black;
        margin: 0;
        padding: 20px 0 20px 15px;
        img {
            vertical-align: bottom;
            padding-right: 10px;
        }
    }
}
.videos {
    position: relative;
    display: flex;
    flex-direction: column;
    .videos-container {
        display: flex;
        overflow-x: auto;
        justify-content: ${props => props.videosAmount === 1 ? 'center;' : 'start;'};
    }
}
.videos-container::-webkit-scrollbar {
    height: 0;
}
.arrow {
    display: ${props => props.isArrowsVisible ? 'inline' : 'none'};
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    z-index: 4;
    transform: translate(0, 50%);
    transition: 0.2s linear all;
}
.right {
    background-image: url(${right});
    right: 10px;
}
.right:hover {
    background-image: url(${right_hover});
}
.left {
    background-image: url(${left});
    left: 10px;
}
.left:hover {
    background-image: url(${left_hover});
}
.review-list {
    display: grid;
    grid-template-columns: 200px 1fr;
    background-color: rgba(50,50,50,0.2);
    padding: 10px;
    margin: 0;
}
.reviewPage-changer {
    min-height: 21px;
    position: relative;
    padding-bottom: 5px;
}
.prev-reviewPage, .next-reviewPage {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
    color: black;
}
.prev-reviewPage:hover, .next-reviewPage:hover {
    color: white;
}
.prev-reviewPage {
    padding-left: 15px;
}
.next-reviewPage {
    position: absolute;
    right: 15px;
}
.similar {
    .similar-list {
        padding-top: 15px;
        background: rgba(50,50,50,0.2);
        box-sizing: border-box;
        display: flex;
        flex-wrap: wrap;
        justify-content: space-around;
        align-items: center;
        a {
            text-decoration: none;
        }
        a:visited, a:link {
            color: black;
        }
    }
}
@media (max-width: 768px) {
    .review-list {
        grid-template-columns: 100px 1fr;
    }
}
`;

export const YTPreviewWrapper = styled.span`
cursor: pointer;
position: relative;
min-width: 300px;
min-height: 200px;
background-image: url(${props => props.logo});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
.play {
    display: inline-block;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${play});
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.2s linear all;
}
.video-name {
    position: absolute;
    z-index: 2;
    top: 15px; left: 10px;
    font-size: 14px;
    text-shadow: 1px 1px 2px black;
    color: rgb(220,220,220);
    border-radius: 10px;
    padding: 8px;
    transition: 0.2s linear all;
}
:hover {
    .play {
        background-image: url(${play_hover});
    }
    .video-name {
        background-color: rgba(50,50,50, 0.5);
         color: rgb(250,250,250);
    }
}
`;
