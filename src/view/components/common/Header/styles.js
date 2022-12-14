// Core
import styled from 'styled-components';

// Assets
import search from '../../../../assets/icons/search.png';
import arrow_down from '../../../../assets/icons/arrow-down.png';
import arrow_down_light from '../../../../assets/icons/arrow-down-light.png';

export const HeaderWrapper = styled.header`
position: fixed;
z-index: 2;
width: 90vw;
height: 15vh;
display: flex;
flex-direction: column;
justify-content: end;
background: ${props => props.styleMode ? 'rgb(10, 10, 10)' : 'rgb(222, 252, 246)'};
border-radius: 0 0 15px 15px;
box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
.logo {
    display: flex;
    justify-content: center;
    align-items: center;
    img {
        cursor: pointer;
        padding: 0 10px;
    }
}
.Switch-category {
    margin-bottom: 10px;
    a {
        text-decoration: none;
        margin-left: 5px;
        padding: 0 calc(5px + 10 * (100vw / 1400));
        color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
    }
    .active {
        color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
        background-color: ${props => props.styleMode ? 'rgb(120, 120, 120)' : 'rgb(222, 252, 246)'};
        border-radius: 7px;
    }
}
.Switch-mode {
    position: relative;
    margin-bottom: 5px;
    .mode {
        position: relative;
        cursor: pointer;
        padding: 0 15px 5px 10px;
    }
    .active {
        font-weight: bolder;
    }
    input {
        cursor: pointer;
        margin-left: 10px;
        height: 12px;
        accent-color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
    }
}
.search {
    position: absolute;
    bottom: 10px; right: 10px;
    input {
        min-width: 25vw;
        padding: 1px 5px;
        border: 1px solid white;
        box-shadow: rgba(250, 250, 250, 0.67) 0px 2px 4px;
        outline: none;
        border-radius: 10px;
        background: ${props => props.styleMode ? 'rgb(20, 20, 20)' : 'white'};
        color: ${props => props.styleMode ? 'white' : 'black'};
    }
    input::placeholder {
        color: ${props => props.styleMode ? 'rgb(150, 150, 150)' : 'rgb(90, 90, 90)'};
    }
}
.search-focused {
    position: absolute;
    bottom: 10px; right: 10px;
    input {
        min-width: calc(90vw - 19px);
        border: 1px solid white;
        box-shadow: rgba(250, 250, 250, 0.67) 0px 2px 4px;
        outline: none;
        border-radius: 10px;
        background: ${props => props.styleMode ? 'rgb(20, 20, 20)' : 'white'};
        color: ${props => props.styleMode ? 'white' : 'black'};
    }
    input::placeholder {
        color: ${props => props.styleMode ? 'rgb(150, 150, 150)' : 'rgb(90, 90, 90)'};
    }
}
@keyframes input_in {
    0% {
        min-width: 25vw;
    }
    100% {
        min-width: calc(90vw - 19px);
    }
}
@keyframes input_out {
    0% {
        min-width: calc(90vw - 19px);
    }
    100% {
        min-width: 25vw;
    }
}
.search-enter-active {
    input {
        animation: input_in 300ms ease-out; 
    }
}
.search-exit-active {
    input {
        animation: input_out 300ms ease-out;
    }
}
.search-results {
    position: absolute;
    background-color: ${props => props.styleMode ? 'black' : 'white'};
    a {
        text-decoration: none;
    }
    a:visited, a:link {
        color: black;
    }
    .result {
        cursor: pointer;
        min-width: 600px;
        font-size: calc(10px + 5 * (100vw / 1400));
        padding: 10px 5px 10px 5px;
        padding-right: 40px;
        color: ${props => props.styleMode ? 'rgb(150, 150, 150)' : 'rgb(90, 90, 90)'};
        border-bottom: ${props => props.styleMode ? '1px solid rgb(90, 90, 90)' : '1px solid rgb(200, 200, 200)'};
        box-sizing: border-box;
    }
    .result:hover {
        color: ${props => props.styleMode ? 'white' : 'black'};
        background-color: ${props => props.styleMode ? 'rgb(50, 50, 50)' : 'rgb(220, 220, 220)'};
    }
}
.search-button {
    display: none;
    background: url(${search});
    background-position: center;
    background-repeat: no-repeat;
    min-height: 20px;
    min-width: 20px;
    padding: 5px;
}
.search-button:active {
    transform: translateY(5%);
}
.result:first-child, .result-no-matches:first-child, .result-error {
    border-top: 1px solid rgb(200, 200, 200);
}
.result-no-matches, .result-error {
    min-width: 600px;
    font-size: 14px;
    padding: 10px 5px 10px 5px;
    padding-right: 40px;
    border-bottom: 1px solid rgb(200, 200, 200);
    box-sizing: border-box;
}
.arrow-down, .arrow-up, .arrow-lang-up, .arrow-lang-down {
    margin-left: 5px;
    display: inline-block;
    width: 10px;
    height: 10px;
    background: ${props => props.styleMode ? `url(${arrow_down_light})` : `url(${arrow_down})`};
    background-size: cover;
    transition: all linear 0.1s;
}
.arrow-up {
    transform: rotate(180deg);
}
.panel {
    position: absolute;
    top: 100%;
    opacity: ${props => props.genresMode ? '1' : '0'};
    z-index: 1;
    width: 90vw;
    font-weight: 400;
    box-sizing: border-box;
    overflow: hidden;
}
@keyframes panel_in {
    0% {
        opacity: 0;
    }
    100% {
        opacity: 1;
    }
}
@keyframes panel_out {
    0% {
        opacity: 1;
    }
    100% {
        opacity: 0;
    }
}
.panel-enter-active {
    animation: panel_in 100ms linear;
}
.panel-enter-done {
    opacity: 1;
    top: 100%;
}
.panel-exit-active {
    animation: panel_out 100ms linear;
}
.panel-exit-done {
    top: 0%;
    opacity: 0;
}
.genres {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: ${props => props.styleMode ? 'rgb(50, 50, 50)' : 'rgb(222,252,246)'};
    color: white;
    padding: 15px calc(5px + 30 * (100vw / 1400));
    box-shadow: rgba(0, 0, 0, 0.4) 0px 2px 4px, rgba(0, 0, 0, 0.3) 0px 7px 13px -3px, rgba(0, 0, 0, 0.2) 0px -3px 0px inset;
    .genre {
        padding: 5px 0 5px 10px;
        font-size: calc(10px + 6 * (100vw / 1400));
        transition: all linear 0.1s;
        color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
    }
    .genre:hover {
        background-color: rgba(120, 120, 120, 0.3);
    }
    .genre:active {
        transform: translateY(5%);
        box-shadow: 1px 1px 2px black;
    }
}
@keyframes optionIn {
    0% {
        opacity: 0;
        bottom: 20px;
    }
    100% {
        opacity: 1;
        bottom: 0px;
    }
}
.select-enter-active {
    .option {
        animation: optionIn 300ms linear;
    }
}
@media (max-width: 768px) {
    width: 100vw;
    .panel {
        top: calc(100% - 5px);
    }
    .search {
        display: none;
    }
    .search-focused {
        input {
            min-width: calc(100vw - 17px);
        }
    }
    .search-button {
        display: block;
        position: absolute;
        bottom: 0; right: 5px;
    }
    .search-results {
        .result {
            min-width: 100px;
        }
    }
    .genres {
        width: 100vw;
        grid-template-columns: repeat(3, 1fr);
    }
    .Switch-mode {
        margin-bottom: 10px;
        .mode {
            padding-bottom: 15px;
        }
    }
    .logo {
        img {
            max-height: 40px;
        }
    }
}
@media (max-width: 385px) {
    .lang-select {
        width: 85px;
        font-size: 13px;
        top: -40px;
        right: 5px;
        .option {
            padding: 2px;
        }
    }
    .Switch-category {
        font-size: 12px;
        a {
            padding: 0 3px;
        }
    }
    .genres {
        padding: 15px 0px;
    }
    .logo {
        img {
            max-height: 30px;
        }
    }
}
`;
export const RatingWrapper = styled.span`
position: absolute;
right: 5px;
text-shadow: 1px 1px 1px black;
color: ${props => 
            props.vote < 3 ? '#cc0000' :
                props.vote < 5 ? '#e69138' :
                    props.vote < 7 ? '#f7f10c' :
                        props.vote < 8 ? '#8fce00' : '#00a105'
};
`;
export const LangSelect = styled.div`
display: flex;
flex-direction: column;
position: absolute;
z-index: 2;
top: -4px; right: 50px;
width: 100px;
box-sizing: border-box;
overflow: hidden;
background-color: ${props => props.styleMode ? 'black' : 'white'};
font-size: 14px;
color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'rgb(50, 50, 50)'};
border-radius: 15px;
border: ${props => props.styleMode ? '1px solid rgb(40, 40, 40)' : 'none'};
box-shadow: ${props => props.langSelectIsOpen ? 'rgba(0, 0, 0, 0.3) 0px 19px 38px, rgba(0, 0, 0, 0.22) 0px 15px 12px' : ''};
.option {
    position: relative;
    cursor: pointer;
    padding: ${props => props.langSelectIsOpen ? '10px' : '2px 10px'};
    transition: all linear 0.1s;
}
.option:hover {
    background-color: ${props => props.styleMode ? 'rgb(40, 40, 40)' : 'rgb(200, 200, 200)'};
}
.option:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
    transform: translate(1%, 5%);
}
.arrow-lang-up, .arrow-lang-down {
    position: absolute;
    top: 50%; right: 5px;
    transform: translate(0, -50%);
    margin: 0;
}
.arrow-lang-up {
    transform: rotate(180deg) translate(0, 50%);
}
.current {
    animation: none !important;
    border-radius: 15px;
    color: ${props => props.styleMode ? 'rgb(180, 180, 180)' : 'black'};
    box-shadow: rgba(0, 0, 0, 0.19) 0px 10px 20px, rgba(0, 0, 0, 0.23) 0px 6px 6px;
}
.current:hover {
    cursor: ${props => props.langSelectIsOpen ? 'not-allowed' : 'pointer'};
    background-color: ${props => props.styleMode ? 'black' : 'white'};
}
.current:active {
    box-shadow: none;
    transform: none;
}
`;
