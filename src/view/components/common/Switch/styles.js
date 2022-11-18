// Core
import styled from 'styled-components';

// Assets
import light from '../../../../assets/icons/light.png';
import dark from '../../../../assets/icons/dark.png';

export const SwitchWrapper = styled.label`
position: absolute;
top: 0; right: 10px;
display: inline-block;
width: 32px;
height: 16px;
.slider {
    position: absolute;
    cursor: pointer;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background-color: ${props => props.styleMode ? 'white' : 'rgb(50, 50, 50)'};
    transition: all 0.5s linear;
    border-radius: 10px;
}
.slider::before {
    position: absolute;
    content: "";
    height: 10px;
    width: 10px;
    left: ${props => props.styleMode ? '18px' : '4px'};
    bottom: 3px;
    background-color: ${props => props.styleMode ? 'rgb(50, 50, 50)' : 'white'};
    transition: all 0.2s linear;
    border-radius: 50%;
}
.slider-icon {
    cursor: pointer;
    position: absolute;
    z-index: 1;
    right: ${props => props.styleMode ? '20px' : '4px'};
    bottom: 3px;
    display: inline-block;
    width: 10px; height: 10px;
    background: ${props => props.styleMode ? `url(${dark})` : `url(${light})`};
    background-position: center;
    background-repeat: no-repeat;
}
@media (max-width: 300px) {
    right: 5px;
}
`;
