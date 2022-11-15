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
    position: absolute;
    right: calc(100% + 5px);
    display: inline-block;
    width: 16px; height: 16px;
    background-position: center;
    background-repeat: no-repeat;
    background: ${props => props.styleMode ? `url(${dark})` : `url(${light})`};
}
@media (max-width: 300px) {
    right: 5px;
    .slider-icon {
        bottom: calc(100% + 5px);
        right: none;
        left: 50%;
        transform: translate(-50%, 0);
    }
}
`;
