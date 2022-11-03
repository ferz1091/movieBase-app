// Core
import styled from 'styled-components';

// Assets
import search from '../../../../assets/icons/search.png';
import arrow_down from '../../../../assets/icons/arrow-down.png';

export const HeaderWrapper = styled.header`
position: fixed;
z-index: 2;
width: 90vw;
height: 15vh;
display: flex;
flex-direction: column;
justify-content: end;
background: rgba(200, 200, 200, 1);
.Switch-category {
    margin-bottom: 5px;
    a {
        text-decoration: none;
        padding: 0 5px;
    }
    a:visited, a:link {
        color: black;
    }
}
.Switch-mode {
    margin-bottom: 5px;
    .mode {
        position: relative;
        cursor: pointer;
        padding-left: 5px;
        padding-right: 15px;
    }
    .active {
        font-weight: bolder;
    }
    input {
        cursor: pointer;
        margin-left: 5px;
        height: 12px;
        accent-color: black;
    }
}
.search {
    position: absolute;
    bottom: 5px; right: 5px;
    input {
        min-width: 25vw;
        padding: 1px 5px;
        border: none;
        outline: none;
    }
}
.search-focused {
    position: absolute;
    bottom: 5px; left: 5px;
    input {
        min-width: calc(90vw - 19px);
        border: none;
        outline: none;
    }
}
.search-results {
    position: absolute;
    background-color: white;
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
        color: rgb(90, 90, 90);
        border-bottom: 1px solid rgb(200, 200, 200);
        box-sizing: border-box;
    }
    .result:hover {
        color: black;
        background-color: rgb(220, 220, 220);
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
    padding: 10px 5px 2px 5px;
    padding-right: 40px;
    border-bottom: 1px solid rgb(200, 200, 200);
    box-sizing: border-box;
}
.arrow-down, .arrow-up {
    margin-left: 5px;
    display: inline-block;
    width: 10px;
    height: 10px;
    vertical-align: middle;
    background: url(${arrow_down});
    background-size: cover;
    transition: all linear 0.1s;
}
.arrow-up {
    transform: rotate(180deg);
}
.panel {
    position: absolute;
    z-index: 1;
    top: 100%;
    width: 90vw;
    font-weight: 400;
    box-sizing: border-box;
}
.genres {
    display: grid;
    grid-template-columns: repeat(5, 1fr);
    background-color: rgb(90, 90, 90);
    color: white;
    padding: 15px calc(5px + 30 * (100vw / 1400));
    .genre {
        padding: 5px 0 5px 10px;
        font-size: calc(12px + 4 * (100vw / 1400));
        transition: all linear 0.1s;
    }
    .genre:hover {
        background-color: rgb(120, 120, 120);
    }
    .genre:active {
        transform: translateY(5%);
        box-shadow: 1px 1px 2px black;
    }
}
@media (max-width: 768px) {
    width: 100vw;
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
        bottom: 0; right: 15px;
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
