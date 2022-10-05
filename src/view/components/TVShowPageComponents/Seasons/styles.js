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
        /* color: white; */
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
    .poster {
        padding: 5px 10px;
    }
}
.overview {
    padding: 5px 0 5px 10px;
    text-shadow: 1px 1px 2px black;
    font-style: italic;
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
    .poster {
        max-width: 150px;
        padding: 5px;
    }
}
}
`;