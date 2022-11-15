import styled from 'styled-components';

export const MainWrapper = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
.movie {
    text-decoration: none;
}
.movie:visited, a:link {
     color: black;
}
.movie:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: rgba(120, 120, 120, 0.1);
}
.movie:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
@media (max-width: 768px) {
    justify-content: center;
}
`;