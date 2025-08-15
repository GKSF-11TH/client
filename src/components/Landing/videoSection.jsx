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
        포럼 공식 영상 업로드 예정
        </VideoBox>
      </IntroVideoBox>
    </IntroVideoSection>
  );
};

export default VideoSection;