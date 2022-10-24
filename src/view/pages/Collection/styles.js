// Core
import styled from 'styled-components';

export const CollectionPageWrapper = styled.main`
position: relative;
padding-top: 15vh;
box-sizing: border-box;
min-height: 100vh;
h2 {
    margin: 5px 0 0 0;
    padding: 20px 0 20px 10px;
    background: rgba(50,50,50,0.2);
}
.parts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
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
