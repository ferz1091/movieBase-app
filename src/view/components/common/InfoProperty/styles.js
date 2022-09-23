// Core
import styled from 'styled-components';

export const PropertyWrapper = styled.div`
display: grid;
grid-template-columns: 110px 1fr;
.prop, .value {
    text-shadow: 1px 1px 2px black;
    padding: 5px;
    margin: 5px 0;
}
.prop {
    padding-left: 10px;
    padding-right: 0;
    border-radius: 15px 0 0 15px;
    background: rgba(50, 50, 50, 0.6);
}
.value {
    padding-left: 0;
    background: linear-gradient(to right, rgba(50, 50, 50, 0.6) 0%, rgba(50, 50, 50, 0) 100%);
}
`;