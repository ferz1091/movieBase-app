// Core
import styled from 'styled-components';

export const CollectionPageWrapper = styled.main`
display: flex;
flex-direction: column;
justify-content: ${props => props.error ? 'center' : 'flex-start'};
background: rgba(50,50,50,0.2);
box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px;
border-radius: 15px;
margin-bottom: 10px;
.movie:hover {
    box-shadow: rgba(0, 0, 0, 0.16) 0px 3px 6px, rgba(0, 0, 0, 0.23) 0px 3px 6px;
    background-color: rgba(120, 120, 120, 0.1);
}
.movie:active {
    box-shadow: rgba(50, 50, 93, 0.25) 0px 30px 60px -12px inset, rgba(0, 0, 0, 0.3) 0px 18px 36px -18px inset;
}
h2 {
    color: black;
    margin: 0;
    border-radius: 15px 15px 0 0;
    padding: 20px 0 20px 15px;
    background: rgb(222, 252, 246);
    box-shadow: rgba(70, 70, 70, 0.17) 0px -23px 25px 0px inset, rgba(70, 70, 70, 0.15) 0px -36px 30px 0px inset, rgba(70, 70, 70, 0.1) 0px -79px 40px 0px inset, rgba(70, 70, 70, 0.06) 0px 2px 1px, rgba(70, 70, 70, 0.09) 0px 4px 2px, rgba(70, 70, 70, 0.09) 0px 8px 4px, rgba(70, 70, 70, 0.09) 0px 16px 8px, rgba(70, 70, 70, 0.09) 0px 32px 16px;
    text-shadow: 0 1px 0 rgba(255, 255, 255, 0.4);
}
.parts {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-evenly;
    align-items: center;
}
a {
    text-decoration: none;
}
a:visited, a:link {
     color: black;
}
@media (max-width: 768px) {
    justify-content: center;
}
`;
