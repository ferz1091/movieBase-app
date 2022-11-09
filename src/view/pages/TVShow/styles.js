// Core
import styled from 'styled-components';

export const TVShowWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
color: white;
background: rgb(200,200,200);
h2 {
    color: black;
    margin: 0;
    padding: 20px 5px 20px 15px;
    font-weight: 600;
    img {
        vertical-align: bottom;
        padding-right: 10px;
    }
}
`;
