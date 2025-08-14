import React from 'react';
import {
  IntroVideoSection,
  IntroVideoBox,
  VideoTitle,
  IntroVideoTitle,
  IntroVideoSubtitle,
  VideoBox,
} from '../../style/LandingStyle';

const VideoSection = () => {
  return (
    <IntroVideoSection>
      <IntroVideoBox>
        <div style={{ color: 'white', marginBottom: '3rem' }}>
          <VideoTitle>
            <IntroVideoTitle>Introducing Video</IntroVideoTitle>
            <IntroVideoSubtitle>
              AI and Korea: Innovate. Integrate. Inspire.
            </IntroVideoSubtitle>
            </VideoTitle>
        </div>
        <VideoBox>
          <div style={{
            width: '0',
            height: '0',
            borderLeft: '30px solid white',
            borderTop: '20px solid transparent',
            borderBottom: '20px solid transparent',
           
          }} />
        </VideoBox>
      </IntroVideoBox>
    </IntroVideoSection>
  );
};

export default VideoSection;