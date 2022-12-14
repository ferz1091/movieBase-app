// Core
import styled from 'styled-components';

export const CompositionsByParamsWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
background: rgba(50,50,50,0.2);
box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
border-radius: 15px;
margin-bottom: ${props => props.error ? '0px' : props.length ? '0px' : '10px'};
.movie {
    text-decoration: none;
    figcaption {
        color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
    }
}
.movie:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: rgba(120, 120, 120, 0.1);
}
.movie:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
h2 {
    color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
    margin: 0;
    border-radius: 15px 15px 0 0;
    padding: 20px 0 20px 15px;
    background: ${props => props.styleMode ? 'rgb(10, 10, 10)' : 'rgb(222, 252, 246)'};
    box-shadow: ${props => props.styleMode ? '' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
    text-shadow: ${props => props.styleMode ? '' : '0 1px 0 rgba(255, 255, 255, 0.4)'} ;
}
.compositions-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
    overflow: hidden;
    min-height: calc(85vh - 100px);
}
@keyframes enter {
    0% {
        opacity: 0;
        top: 0%
    }
    100% {
        opacity: 1;
        top: 50%;
    }
}
@keyframes exit {
    0% {
        opacity: 1;
        top: 50%;
    }
    100% {
        opacity: 0;
        top: 0%;
    }
}
.spinner {
    opacity: 0;
}
.spinner-wrapper-exit-active {
    animation: exit 0.5s linear;
}
.spinner-wrapper-exit {
    top: 0%;
}
`;
