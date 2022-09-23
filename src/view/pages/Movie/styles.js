// Core
import styled from 'styled-components';

export const MoviePageWrapper = styled.main`
position: relative;
margin-top: 16vh;
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
    background: rgba(50, 50, 50, 0.75);
    padding: 20px 0 20px 15px;
    font-size: 30px;
    font-style: italic;
    .title {
        font-family: Spectral ,Arial, Helvetica, sans-serif;
        letter-spacing: 0.1em;
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
    margin-bottom: 50px;
    text-shadow: 1px 1px 2px black;
    background: rgba(50, 50, 50, 0.75);
}
.original-title {
    padding: 10px 25px;
    font-size: 20px;
}
.cast {
    background: rgba(50, 50, 50, 0.2);
    .cast-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
    }
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
`;