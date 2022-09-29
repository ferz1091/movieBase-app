// Core
import styled from 'styled-components';

export const MovieWrapper = styled.figure`
position: relative;
height: 100%;
margin: 5px 8px;
figcaption {
    text-align: center;
    height: 50px;
    width: calc(18vw - 16px);
}
img {
    width: calc(18vw - 16px);
}
a {
    text-decoration: none;
}
a:visited, a:link {
    color: black;
}
.movie-info-header {
    position: absolute;
    top: 0;
    display: flex;
    align-items: center;
    min-height: 21px;
    width: 100%;
    padding: 5px 0;
    background-color: rgba(70, 70, 70, 0.7);
}
.genre {
    padding: 0 5px;
    display: flex;
    flex-direction: column;
    color: white;
    font-size: 14px;
}
.vote {
    position: absolute;
    top: 50%;
    right: 0;
    transform: translate(0, -50%);
    padding: 5px;
    color: ${props => props.vote < 3 ? '#cc0000' : 
                props.vote < 5 ? '#e69138' : 
                props.vote < 7 ? '#f7f10c' : 
                props.vote < 8 ? '#8fce00' : '#00a105'
            };
}
.movie-overview {
    cursor: pointer;
    position: absolute;
    bottom: 55px; right: 0;
    padding: 0 5px;
    color: white;
    text-shadow: 0px 0px 5px black;
    font-size: 30px;
}
.overview-text {
    position: absolute;
    bottom: 0; right: 0;
    padding: 0 5px;
    min-width: calc(18vw - 26px);
    background-color: rgba(70, 70, 70, 0.7);
    font-size: 14px;
    text-shadow: none;
}
@media (max-width: 768px) {
    width: calc(45vw - 16px);
    figcaption {
        width: calc(45vw - 16px);
    }
    img {
        width: calc(45vw - 16px);
    }
    .overview-text {
        min-width: calc(45vw - 16px);
    }
}
`;