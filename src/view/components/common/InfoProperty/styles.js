// Core
import styled from 'styled-components';

export const PropertyWrapper = styled.div`
display: grid;
grid-template-columns: 110px 1fr;
background: rgba(50, 50, 50, 0.6);
.prop, .value {
    text-shadow: 1px 1px 2px black;
    margin: 5px 0;
}
.prop {
    font-size: calc(12px + 4 * (100vw / 1400));
    padding-left: 10px;
    padding-right: 0;
    border-radius: 15px 0 0 15px;
}
.value {
    font-size: calc(12px + 6 * (100vw / 1400));
    font-style: oblique;
    padding-left: 0;
}
`;