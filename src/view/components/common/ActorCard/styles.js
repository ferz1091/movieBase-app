// Core
import styled from 'styled-components';

export const ActorCardWrapper = styled.div`
display: flex;
flex-direction: column;
align-items: center;
color: black;
padding: calc(1px + 19 * (100vw / 1400));
.actor-photo {
    cursor: pointer;
    width: 150px;
    height: 150px;
    border-radius: 50%;
    background-image: url(${props => props.profileURL});
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
}
`;