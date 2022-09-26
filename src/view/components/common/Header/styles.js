// Core
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
position: fixed;
z-index: 2;
width: 90vw;
height: 15vh;
background: rgba(200, 200, 200, 1);
.Switch-mode {
    position: absolute;
    bottom: 5px; left:0;
    a {
        text-decoration: none;
        padding: 0 5px;
    }
    a:visited, a:link {
        color: black;
    }
}
@media (max-width: 768px) {
    width: 100vw;
}
`;