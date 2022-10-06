// Core
import styled from 'styled-components';

// Assets
import arrow_down from '../../../../assets/icons/arrow-down.png';

export const SeasonsWrapper = styled.section`
background: rgb(200,200,200);
.seasons-list {
    background: rgba(50,50,50,0.2);
    padding: 5px 0;
}
.seasons-list {
    .season:first-child {
        border-top: 2px solid black;
    }
}
.season {
    position: relative;
    padding: 5px 0 5px 0;
    margin: 0 5px 0 15px;
    border-bottom: 2px solid black;
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
            }
        }
    }
    .season-name {
        padding-left: 10px;
    }
    .head {
        cursor: pointer;
        padding: 5px 0;
    }
}
.season:hover {
    background: rgb(200,200,200);
    .season-name {
        font-weight: 600;
    }
}
.active {
    background: rgb(200,200,200);
    .season-name {
        font-weight: 600;
    }
    .head {
        background: rgba(50,50,50,0.2);
        margin: 0 5px;
    }
}
.season-header {
    display: grid;
    grid-template-columns: 1fr 220px;
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
.overview {
    padding: 5px 0 5px 10px;
    margin: 0 0 5px 5px;
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
    margin-left: 10px;
    .episode-name {
        padding-left: 15px;
        margin: 5px 0;
        text-shadow: 1px 1px 2px black;
        font-style: italic;
        font-weight: 600;
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
    background-image: url(${arrow_down});
}
.arrow-up {
    background-image: url(${arrow_down});
    transform: rotate(180deg) translate(0, 25%);
}
@media (max-width: 768px) {
    .season {
        margin: 0;
    }
    .season-header {
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
`;