import styled from 'styled-components';

export const MainWrapper = styled.main`
position: relative;
margin-top: 15vh;
box-sizing: border-box;
display: flex;
flex-wrap: wrap;
justify-content: space-evenly;
align-items: center;
min-height: 85vh;
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