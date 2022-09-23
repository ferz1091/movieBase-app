// Core
import styled from 'styled-components';

export const PageSwitcherWrapper = styled.div`
position: sticky;
display: flex;
justify-content: center;
width: 90vw;
bottom: 0;
background-color: gray;
padding: 5px 0;
a {
    text-decoration: none;
    padding: 0 5px;
}
a:visited, a:link {
    color: black;
}
@media (max-width: 768px) {
    width: 100vw;
}
`;