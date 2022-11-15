// Core
import styled from 'styled-components';

// Assets
import arrow_down from '../../../../assets/icons/arrow-down.png';
import arrow_down_light from '../../../../assets/icons/arrow-down-light.png';

export const SeasonsWrapper = styled.section`
.seasons-list {
    padding: 5px 0;
}
.season {
    position: relative;
    padding: 5px 0 5px 0;
    margin: 0 5px 0 15px;
    border-bottom: 1px solid black;
    color: black;
    transition: all 0.1s linear;
    h2 {
        position: relative;
        margin: 0 5px;
        background: rgba(50,50,50,0.2);
        select {
            border-radius: 10px;
            position: absolute;
            top: 50%; right: 5px;
            transform: translate(0, -50%);
            background: rgb(200,200,200);
            ::-webkit-scrollbar {
                width: 5px;
            }
            ::-webkit-scrollbar-thumb {
            background-color: rgba(50,50,50, 0.5);
            border-radius: 5px;
            }
            option {
                font-size: 14px;
                text-align: center;
            }
        }
    }
    .season-name {
        padding-left: 10px;
    }
}
.active {
    border: none;
    .season-name {
        font-weight: 600;
    }
}
.season-header {
    color: white;
    ul {
        list-style-type: square;
        list-style-position: inside;
        padding-left: 0px;
        margin: 0;
    }
    a, a:visited, a:link {
        color: white;
    }
    a:hover {
        color: rgb(150,150,150); 
    }
    .poster {
        padding: 5px 10px;
    }
}
.season-header-top {
     display: grid;
    grid-template-columns: 1fr 220px;
}
.overview {
    padding: 5px 0 5px 10px;
    margin: 0 5px 5px 5px;
    text-shadow: 1px 1px 2px black;
    font-style: italic;
    background: rgba(50, 50, 50, 0.2);
}
.cast-list {
    margin: 0 5px;
    background: none;
}
.episodes {
    color: white;
}
.episode-info {
    margin-left: 5px;
    .episode-header {
        background: rgba(50,50,50,0.2);
        position: relative;
        padding: 5px 0 5px 5px;
        margin: 5px 5px 5px 0;
    }
    .episode-name {
        padding-left: 10px;
        text-shadow: 1px 1px 2px black;
        font-style: italic;
        font-weight: 600;
    }
    .overview {
        margin: 0 5px 5px 0;
    }
}
.arrow-down, .arrow-up {
    position: absolute;
    top: 10px; right: 10px;
    transform: translate(0, -25%);
    width: 30px;
    height: 30px;
    background-repeat: no-repeat;
    background-position: center;
    transition: all 0.1s linear;
}
.arrow-down {
    background-image: ${props => props.styleMode ? `url(${arrow_down_light})` : `url(${arrow_down})`};
}
.arrow-up {
    background-image: ${props => props.styleMode ? `url(${arrow_down_light})` : `url(${arrow_down})`};
    transform: rotate(180deg) translate(0, 25%);
}
.clips {
    margin: 0 5px;
    h2 {
        margin: 0;
    }
}
@media (max-width: 768px) {
    .season {
        margin: 0;
    }
    .season-header-top {
        grid-template-columns: 1fr 160px;
        ul {
            list-style-position: outside;
        }
        .poster {
            max-width: 150px;
            padding: 5px;
        }
    }
}
@media (max-width: 300px) {
    .producer {
        grid-template-columns: 90px 1fr;
    }
    .season-header-top {
        grid-template-columns: 1fr 120px;
        .poster {
            max-width: 100px;
        }
    }
}
`;

export const RatingWrapper = styled.span`
position: absolute;
top: 50%; right: 5px;
transform: translate(0, -50%);
text-shadow: 1px 1px 2px black;
font-size: 18px;
color: ${props => props.vote < 3 ? '#cc0000' :
        props.vote < 5 ? '#e69138' :
            props.vote < 7 ? '#f7f10c' :
                props.vote < 8 ? '#8fce00' : '#00a105'};
`;

export const SeasonHeadWrapper = styled.div`
cursor: ${props => props.isHoverActive ? 'pointer;' : 'auto;'};
padding: 5px 0;
background: ${props => props.styleMode ? 'rgba(80,80,80,0.3)' : 'rgba(50,50,50,0.2)'};
margin: 0 5px;
transition: 0.1s all linear;
color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
:hover {
    background: ${props => props.isHoverActive ? 'rgba(50,50,50,0.3);' : 'rgba(50,50,50,0.2);'};
    .season-name {
        font-weight: ${props => props.isHoverActive ? '600;' : 'normal;'};
    }
}
`;