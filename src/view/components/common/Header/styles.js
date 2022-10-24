// Core
import styled from 'styled-components';

export const HeaderWrapper = styled.header`
position: fixed;
z-index: 2;
width: 90vw;
height: 15vh;
background: rgba(200, 200, 200, 1);
.Switch-category {
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
.Switch-mode {
    position: absolute;
    bottom: 30px; left: 0;
    span {
        cursor: pointer;
        padding: 0 5px;
    }
    .active {
        font-weight: bolder;
    }
}
@media (max-width: 768px) {
    width: 100vw;
}
`;