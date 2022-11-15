// Core
import styled from 'styled-components';

export const PageSwitcherWrapper = styled.div`
position: sticky;
display: flex;
justify-content: center;
width: 90vw;
bottom: 0;
background-color: ${props => props.styleMode ? 'rgb(10, 10, 10)' : 'rgb(222, 252, 246)'};
box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
padding: 5px 0;
min-height: 20px;
font-size: calc(12px + 4 * (100vw / 1400));
color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
a {
    text-decoration: none;
    padding: 0 calc(5px + 5 * (100vw/ 1400));
}
a:visited, a:link {
    color: ${props => props.styleMode ? 'rgb(235, 235, 235)' : 'black'};
}
.active:visited, .active:link {
    background-color: ${props => props.styleMode ? 'black' : 'white'};
    border-radius: 7px;
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