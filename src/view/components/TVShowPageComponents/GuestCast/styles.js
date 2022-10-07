// Core
import styled from 'styled-components';

export const GuestCastWrapper = styled.section`
margin-top: 10px;
ul {
    color: white;
    margin: 0 5px;
    padding: 5px 0 0 15px;
    list-style: none;
    list-style-position: inside;
    li {
        position: relative;
        cursor: pointer;
        text-shadow: 1px 1px 2px black;
        font-style: oblique;
        padding: 5px 0;
        border-bottom: 2px solid rgba(50,50,50,0.5);
    }
    a, a:visited, a:link {
        color: white;
    }
    a:hover {
        .guest-title{
            color: rgb(150,150,150); 
        }     
    }
    a:first-child {
        li {
            border-top: 2px solid rgba(50,50,50,0.5);
        }
    }
}
`;

export const GuestCardWrapper = styled.div`
display: grid;
grid-template-columns: 210px 210px;
position: absolute;
padding: 5px;
bottom: 100%; left: 0;
background-color: rgba(200,200,200);
border: 1px solid black;
border-radius: 0 20px 20px 0;
img {
    max-width: 200px;
    max-height: 300px;
}
.guest-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
`;
