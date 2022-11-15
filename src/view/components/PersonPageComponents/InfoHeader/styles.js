// Core
import styled from 'styled-components';

export const InfoHeaderWrapper = styled.section`
h2 {
    border-radius: 15px 15px 0 0;
}
.person-avatar {
    img {
        padding: 10px;
        border-radius: 30px;
}
}
.person-info {
    display: grid;
    grid-template-columns: 220px 1fr;
}
.person-main-info {
    display: flex;
    flex-direction: column;
    justify-content: center;
}
@media (max-width: 768px) {
    .person-avatar {
        img {
            padding: 5px;
            max-width: 150px;
        }
    }
    .person-info {
        grid-template-columns: 160px 1fr;
    }
}
@media (max-width: 300px) {
    .person-avatar {
        img {
            padding: 5px 3px;
            max-width: 100px;
        }
    }
    .person-info {
        grid-template-columns: 106px 1fr;
    }
}
`;
