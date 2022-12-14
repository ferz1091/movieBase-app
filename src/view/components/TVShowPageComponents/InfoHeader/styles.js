// Core
import styled from 'styled-components';

export const InfoHeaderWrapper = styled.section`
margin-top: 10px;
border-radius: 15px 15px 0 0;
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
background: ${props => props.background ? `url(${props.backgroundURL});` : `rgba(50, 50, 50, 0.2);`};
background-position: center;
background-size: cover;
background-repeat: no-repeat;
h1 {
    position: relative;
    margin: 0;
    background: rgba(50, 50, 50, 0.5);
    padding: 20px 0 20px 15px;
    border-radius: 15px 15px 0 0;
    font-size: 30px;
    .title {
        font-family: Spectral ,Arial, Helvetica, sans-serif;
        letter-spacing: 0.1em;
        font-style: italic;
        max-width: 80%;
        text-shadow: 1px 1px 2px black;
    }
}
a, a:visited, a:link {
    color: white;
}
a:hover {
    color: rgb(150,150,150); 
}
.movie-info {
    display: flex;
    flex-direction: column;
    background: rgba(50,50,50,0.5);
    div {
        padding: 10px 15px;
    }
    font-weight: 500;
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
.genres {
    padding: 10px 0 10px 5px;
    span {
        display: inline-block;
        cursor: pointer;
        padding: 0 10px;
        margin: 0 5px 5px 5px;
        border: 1px solid white;
        border-radius: 15px;
        background-color: rgb(50, 50, 50);
        box-shadow: 0px 0px 2px black;
    }
    span:hover {
        background-color: rgb(100, 100, 100);
    }
}
.original-title {
    padding: 10px 25px;
    font-size: 20px;
    font-style: oblique;
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
.status {
    .value {
        font-weight: 600;
    }
}
.network {
    img {
        width: 30px;
        height: 20px;
    }
}
`;
