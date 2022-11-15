// Core
import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
position: fixed;
top: 0;
left: 0;
width: 100vw;
height: 100vh;
background: ${props => props.styleMode ? 'rgb(20, 20, 20)' : 'linear-gradient(to top, #fafacb, #d4d3dd)'};
`;
