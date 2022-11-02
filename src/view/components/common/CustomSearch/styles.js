// Core
import styled from 'styled-components';

// Assets
import expand from '../../../../assets/icons/expand.png';
import expand_gray from '../../../../assets/icons/expand_gray.png';

export const CustomSearchWrapper = styled.div`
width: 90vw;
padding: 10px 0;
background-color: rgb(200, 200, 200);

.custom-search {
display: flex;
justify-content: space-around;
}
.genre-input, .year-input {
    position: relative;
    display: flex;
    align-items: center;
    justify-content: center;
    min-width: 210px;
    min-height: 58px;
    padding: calc(5px + 15 * (100vw / 1400));
    padding-left: calc(10px + 15 * (100vw / 1400));
    margin: calc(1px + 9 * (100vw / 1400));
    background-color: white;
    font-size: calc(10px + 6 * (100vw / 1400));
    border: 2px solid black;
    box-sizing: border-box;
    text-align:  center;
}
.genre-input {
    color: ${props => props.genresSelectIsOpen ? 'rgb(200, 200, 200);' : 'black;'};
    border-top: ${props => props.genresSelectIsOpen ? '2px solid white;' : '2px solid black;'};
}
.year-input {
    color: ${props => props.yearSelectIsOpen ? 'rgb(200, 200, 200);' : 'black;'};
    border-top: ${props => props.yearSelectIsOpen ? '2px solid white;' : '2px solid black;'};
}
.select {
    position: absolute;
    bottom: 100%; left: 50%;
    transform: translate(-50%, 0);
    width: 100%;
    background-color: white;
    border: 2px solid black;
    border-bottom: ${props => props.genresSelectIsOpen ? '2px solid rgb(200, 200, 200);' : '2px solid black;'};
    overflow-y: scroll;
    overflow-x: hidden;
    height: 150px;
    display: flex;
    flex-direction: column;
    .option {
        color: black;
        font-size: calc(10px + 2 * (100vw / 1400));
        padding: calc(3px + 17 * (100vw / 1400));
        padding-left: calc(7px + 18 * (100vw / 1400));
        transition: all linear 0.1s;
    }
    .option:last-child {
        border-bottom: none;
    }
    .option:hover {
        background-color: rgb(200, 200, 200);
    }
    .option:active {
        transform: translateY(5%);
    }
}
.select::-webkit-scrollbar {
    width: 5px;
}
.select::-webkit-scrollbar-thumb {
    background: rgb(200, 200, 200);
    border-radius: 5px;
}
.search-submit {
    display: flex;
    align-items: center;
    padding: calc(3px + 17 * (100vw / 1400)) calc(10px + 40 * (100vw / 1400));
    margin: calc(1px + 9 * (100vw / 1400));
    color: white;
    background-color: black;
    font-size: calc(12px + 4 * (100vw / 1400));
    font-weight: 800;
    outline: 2px solid white;
    border-radius: 5px;
    transition: all linear 0.2s;
}
.search-submit:hover {
    color: black;
    background-color: white;
    outline-color: black;
}
.search-submit:active {
    transform: translateY(2%);
}
.expand-genre {
    background: ${props => props.genresSelectIsOpen ? `url(${expand_gray});` : `url(${expand});`};
}
.expand-year {
     background: ${props => props.yearSelectIsOpen ? `url(${expand_gray});` : `url(${expand});`};
}
.expand-genre, .expand-year {
    display: inline-block;
    width: 10px;
    height: 10px;
    padding: 5px;
    vertical-align: text-top;
    background-repeat: no-repeat;
    background-position: center;
}
span {
    max-height: 60px;
}
@media (max-width: 768px) {
    width: 100vw;
    .genre-input, .year-input {
        padding: calc(5px + 15 * (100vw / 1400));
    }
    .genre-input {
        min-width: auto;
        width: 86px;
        height: 39px;
    }
    .year-input {
        min-width: auto;
        width: 92px;
    }
    .expand-genre, .expand-year {
        display: none;
    }
}
`;
