// Core
import styled from 'styled-components';

export const SimilarWrapper = styled.section`
.similar-list {
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
`;
