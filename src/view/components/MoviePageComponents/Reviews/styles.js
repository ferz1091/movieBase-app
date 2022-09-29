// Core
import styled from 'styled-components';

export const ReviewsWrapper = styled.section`
.review-list {
    display: grid;
    grid-template-columns: 200px 1fr;
    background-color: rgba(50,50,50,0.2);
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
@media (max-width: 768px) {
    .review-list {
        grid-template-columns: 100px 1fr;
    }
}
`;