// Core
import styled from 'styled-components';

export const SearchStringWrapper = styled.div`
.spinner {
    position: absolute;
    top: 0; left: calc(100% - 30px);
    transform: none;
    img {
        width: 20px;
    }
}
`;

export const RatingWrapper = styled.span`
position: absolute;
right: 5px;
text-shadow: 1px 1px 1px black;
color: ${props =>
        props.vote < 3 ? '#cc0000' :
            props.vote < 5 ? '#e69138' :
                props.vote < 7 ? '#f7f10c' :
                    props.vote < 8 ? '#8fce00' : '#00a105'
    };
`;
