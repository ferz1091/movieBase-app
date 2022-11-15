// Core
import styled from 'styled-components';

export const ReviewsWrapper = styled.section`
.review-list {
    display: grid;
    grid-template-columns: 200px 1fr;
    padding: 10px;
    margin: 0;
}
.reviewPage-changer {
    min-height: 21px;
    position: relative;
    padding-bottom: 5px;
}
.prev-reviewPage, .next-reviewPage {
    cursor: pointer;
    font-size: 18px;
    font-weight: 600;
    text-decoration: underline;
    color: black;
}
.prev-reviewPage:hover, .next-reviewPage:hover {
    color: white;
}
.prev-reviewPage {
    padding-left: 15px;
}
.next-reviewPage {
    position: absolute;
    right: 15px;
}
.author {
    word-wrap: break-word;
}
.user {
    .author {
        color: ${props => props.styleMode ? 'white' : 'black'};
    }
    .username, .create-date {
        color: ${props => props.styleMode ? 'rgb(180, 180, 180)' : 'rgb(80, 80, 80)'};
    }
    .create-date {
        color: ${props => props.styleMode ? 'rgb(120, 120, 120)' : 'rgb(20, 20, 20)'};
    }
}
dl {
    dd {
        background: ${props => props.styleMode ? 'linear-gradient(to bottom, rgba(150, 150, 150, 0.2) 0%, rgba(150, 150, 150, 0.1) 100%)' : 'linear-gradient(to bottom, rgba(50, 50, 50, 0.2) 0%, rgba(50, 50, 50, 0.1) 100%)'};
        color: ${props => props.styleMode ? 'white' : 'black'};
    }
}
@media (max-width: 768px) {
    .review-list {
        grid-template-columns: 100px 1fr;
    }
}
`;