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
min-height: 20px;
font-size: calc(12px + 4 * (100vw / 1400));
a {
    text-decoration: none;
    padding: 0 calc(5px + 5 * (100vw/ 1400));
}
a:visited, a:link {
    color: black;
}
.active:visited, .active:link {
    color: white;
}
@media (max-width: 768px) {
    width: 100vw;
}
@media (max-width: 300px) {
    a {
        padding: calc(1px + 4 * (100vw / 1400));  
    }
}
`;