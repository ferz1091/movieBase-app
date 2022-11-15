// Core
import styled from 'styled-components';

export const TVShowWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
color: white;
.reviews, .seasons, .similar {
    background: rgba(50,50,50,0.2);
    box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
}
h2 {
    color: ${props => props.styleMode ? 'rgb(235,235,235)' : 'black'};
    margin: 0;
    padding: 20px 0 20px 15px;
    background: ${props => props.styleMode ? 'rgb(10, 10, 10)' : 'rgb(222, 252, 246)'};
    box-shadow: ${props => props.styleMode ? 'rgba(120, 120, 120, 0.17) 0px -23px 25px 0px inset, rgba(120, 120, 120, 0.15) 0px -36px 30px 0px inset, rgba(120, 120, 120, 0.1) 0px -79px 40px 0px inset, rgba(120, 120, 120, 0.06) 0px 2px 1px, rgba(120, 120, 120, 0.09) 0px 4px 2px, rgba(150, 150, 150, 0.09) 0px 8px 4px, rgba(120, 120, 120, 0.09) 0px 16px 8px, rgba(120, 120, 120, 0.09) 0px 32px 16px' : 'rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px'};
    text-shadow: ${props => props.styleMode ? '' : '0 1px 0 rgba(255, 255, 255, 0.4)'} ;
    img {
        vertical-align: bottom;
        padding-right: 10px;
    }
}
section:last-child {
    border-radius: 0 0 15px 15px;
    margin-bottom: 10px;
}
`;
