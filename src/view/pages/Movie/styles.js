// Core
import styled from 'styled-components';

export const MoviePageWrapper = styled.main`
position: relative;
margin-top: 15vh;
box-sizing: border-box;
min-height: 84vh;
display: flex;
flex-direction: column;
color: white;
.movie-info {
    background: rgba(50, 50, 50, 0.5);
}
.cast, .clips, .reviews, .similar {
    background-color: rgb(200, 200, 200);
    h2 {
        color: black;
        margin: 0;
        padding: 20px 0 20px 15px;
        img {
            vertical-align: bottom;
            padding-right: 10px;
        }
    }
}
`;
