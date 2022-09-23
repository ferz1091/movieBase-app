// Core
import styled from 'styled-components';

// Assets
import actors from '../../../../assets/icons/actors.png';
import info from '../../../../assets/icons/info.png';
import company from '../../../../assets/icons/company.png';
import collection from '../../../../assets/icons/collection.png';
import homepage from '../../../../assets/icons/homepage.png';
import imdb from '../../../../assets/icons/imdb.png';

export const InfoBarWrapper = styled.div`
display: flex;
justify-content: space-around;
padding: 5px 0 ;
position: fixed;
bottom: 0; left: 50%;
transform: translate(-50%, 0);
width: 90vw;
height: 40px;
background: rgba(50, 50, 50, 0.6);
.icon {
    display: inline-block;
    min-width: 40px;
    min-height: 40px;
    background-repeat: no-repeat;
    background-position: center;
}
.actors {
    background: url(${actors});
}
.info {
    background: url(${info});
}
.company {
    background: url(${company});
}
.collection {
    background: url(${collection});
}
.homepage {
    background: url(${homepage});
}
.imdb {
    background: url(${imdb});
}
@media (max-width: 768px) {
    width: 100vw;
    background: rgba(50, 50, 50, 1);
}
`;