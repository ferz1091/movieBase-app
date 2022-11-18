// Core
import styled from 'styled-components';

export const ErrorWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
@media (max-width: 300px) {
    img {
        width: 80vw;
    }
}
`;
