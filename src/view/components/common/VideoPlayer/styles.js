// Core
import styled from 'styled-components';

export const VideoPlayerWrapper = styled.section`
position: absolute;
z-index: 999;
top: 0; left: 0;
width: 100%;
height: 100%;
background: rgba(50, 50, 50, 0.8);
iframe {
    position: fixed;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    width: 50vw;
    height: 50vh;
}
@media (max-width: 768px) {
    iframe {
        width: 90vw;
    }
}
`;