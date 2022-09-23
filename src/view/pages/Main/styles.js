import styled from 'styled-components';

export const MainWrapper = styled.main`
position: relative;
padding-top: 15vh;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
min-height: 100%;
figure {
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
}
    a {
        text-decoration: none;
    }
    a:visited, a:link {
        color: black;
    }
@media (max-width: 768px) {
    justify-content: center;
    figure {
        width: calc(45vw - 16px);
        figcaption {
            width: calc(45vw - 16px);
        }
        img {
            width: calc(45vw - 16px);
        }
    }
}
`;