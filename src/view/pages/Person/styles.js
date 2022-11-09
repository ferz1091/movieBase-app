// Core
import styled from 'styled-components';

export const PersonWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
color: white;
background-color: rgba(50,50,50,0.2);
overflow: hidden;
h2 {
    color: black;
    margin: 0;
    padding: 20px 0 20px 15px;
    font-weight: 600;
    img {
        vertical-align: bottom;
        padding-right: 10px;
    }
}
.person-main-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
.person-header {
    display: grid;
    grid-template-columns: 220px 1fr;
    background: rgba(50, 50, 50, 0.5);
    img {
        padding: 10px;
        border-radius: 30px;
    }
}
.biography-text {
    background: rgba(50, 50, 50, 0.5);
    padding: 20px 30px 20px 30px;
    text-shadow: 1px 1px 2px black;
    font-style: italic;
    text-align: justify;
}
.movie-list, .tv-list {
    padding-top: 15px;
    background: rgba(50,50,50,0.2);
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
        color: black;
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
    .person-header {
        grid-template-columns: 160px 1fr;
        img {
            padding: 5px;
            max-width: 150px;
        }
    }
    .social {
        span {
            padding-right: 0px;
        }
    }
}
@media (max-width: 300px) {
    .person-header {
        grid-template-columns: 106px 1fr;
        img {
            padding: 5px 3px;
            max-width: 100px;
        }
    }
}
`;