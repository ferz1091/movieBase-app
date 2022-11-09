import styled from 'styled-components';

export const MainWrapper = styled.main`
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
a {
    text-decoration: none;
}
a:visited, a:link {
     color: black;
}
@media (max-width: 768px) {
    justify-content: center;
}
`;