// Core
import styled from 'styled-components';

export const CompositionsByParamsWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
h2 {
    margin: 5px 0 0 0;
    padding: 20px 5px 20px 10px;
    background: rgba(50,50,50,0.2);
}
.compositions-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    min-height: calc(85vh - 100px);
}
a {
    text-decoration: none;
}
a:visited, a:link {
     color: black;
}
`;
