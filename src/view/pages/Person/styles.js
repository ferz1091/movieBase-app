// Core
import styled from 'styled-components';

export const PersonWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
color: white;
box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
h2 {
        color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
        margin: 0;
        padding: 20px 0 20px 15px;
        background: ${props => props.styleMode ? 'rgb(10, 10, 10)' : 'rgb(222, 252, 246)'};
        box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
        text-shadow: ${props => props.styleMode ? '' : '0 1px 0 rgba(255, 255, 255, 0.4)'} ;
    img {
        vertical-align: bottom;
        padding-right: 10px;
    }
}
section {
    background: rgba(50,50,50,0.2);
    box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
}
section:first-child {
    border-radius: 15px 15px 0 0;
    margin-top: 10px;
}
section:last-child {
    border-radius: 0 0 15px 15px;
    margin-bottom: 10px;
}
.biography-text {
    padding: 20px 30px 20px 30px;
    text-shadow: 1px 1px 2px black;
    font-style: italic;
    text-align: justify;
}
.movie-list, .tv-list {
    padding-top: 15px;
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
    a:hover {
        box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
        background-color: rgba(120, 120, 120, 0.1);
    }
    a:active {
        box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    }
}
.social {
    padding-left: 10px;
}
.mode-changer {
    position: relative;
    display: flex;
    justify-content: center;
    padding: 5px 0;
    span {
        padding: 0 5px;
        color: ${props => props.styleMode ? 'white' : 'black'};
        font-size: calc(12px + 4 * (100vw / 1400));
    }
    .mode {
        cursor: pointer;
        font-weight: 600;
        text-decoration: underline;
    }
    .mode-active {
        cursor: not-allowed;
    }
}
.next-page, .prev-page {
    cursor: pointer;
    font-weight: 600;
    text-decoration: underline;
}
.next-page {
    position: absolute;
    top: 50%; right: 15px;
    transform: translate(0, -50%);
}
.prev-page {
    position: absolute;
    top: 50%; left: 15px;
    transform: translate(0, -50%);
}
.error {
    color: black;
}
@media (max-width: 768px) {
    .social {
        span {
            padding-right: 0px;
        }
    }
}
`;