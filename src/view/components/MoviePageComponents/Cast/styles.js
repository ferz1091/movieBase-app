// Core
import styled from 'styled-components';

export const CastWrapper = styled.section`
.cast-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
}
div {
        color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
}
`;