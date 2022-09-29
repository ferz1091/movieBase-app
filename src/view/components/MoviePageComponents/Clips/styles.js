// Core
import styled from 'styled-components';

// Assets
import play from '../../../../assets/icons/play.png';
import play_hover from '../../../../assets/icons/play_hover.png';
import right from '../../../../assets/icons/right.png';
import right_hover from '../../../../assets/icons/right_hover.png';
import left from '../../../../assets/icons/left.png';
import left_hover from '../../../../assets/icons/left_hover.png';

export const ClipsWrapper = styled.section`
position: relative;
display: flex;
flex-direction: column;
.clips-container {
    display: flex;
    overflow-x: auto;
    justify-content: ${props => props.videosAmount === 1 ? 'center;' : 'start;'};
}
.clips-container::-webkit-scrollbar {
    height: 0;
}
.arrow {
    display: ${props => props.isArrowsVisible ? 'inline' : 'none'};
    cursor: pointer;
    width: 30px;
    height: 30px;
    position: absolute;
    top: 50%;
    z-index: 4;
    transform: translate(0, 50%);
    transition: 0.2s linear all;
}
.right {
    background-image: url(${right});
    right: 10px;
}
.right:hover {
    background-image: url(${right_hover});
}
.left {
    background-image: url(${left});
    left: 10px;
}
.left:hover {
    background-image: url(${left_hover});
}
`;

export const YTPreviewWrapper = styled.span`
cursor: pointer;
position: relative;
min-width: 300px;
min-height: 200px;
background-image: url(${props => props.logo});
background-position: center;
background-size: cover;
background-repeat: no-repeat;
.play {
    display: inline-block;
    width: 50px;
    height: 50px;
    position: absolute;
    z-index: 1;
    top: 50%; left: 50%;
    transform: translate(-50%, -50%);
    background-image: url(${play});
    background-position: center;
    background-repeat: no-repeat;
    transition: 0.2s linear all;
}
.video-name {
    position: absolute;
    z-index: 2;
    top: 15px; left: 10px;
    font-size: 14px;
    text-shadow: 1px 1px 2px black;
    color: rgb(220,220,220);
    border-radius: 10px;
    padding: 8px;
    transition: 0.2s linear all;
}
:hover {
    .play {
        background-image: url(${play_hover});
    }
    .video-name {
        background-color: rgba(50,50,50, 0.5);
         color: rgb(250,250,250);
    }
}
`;
