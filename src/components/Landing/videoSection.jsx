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
            position: 'relative',
            width: '91%',
            margin: '0 auto',
            paddingBottom: '52.25%',
            height: 0,
            overflow: 'hidden',
      
          }}>
            <iframe
              src="https://www.youtube.com/embed/cYKvJ3RGWjg?enablejsapi=1&origin=http://localhost:3000"
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
              referrerPolicy="strict-origin-when-cross-origin"
              style={{
                position: 'absolute',
                top: 0,
                left: 0,
                width: '100%',
                height: '100%',
              
              }}
            ></iframe>
          </div>
        </VideoBox>
      </IntroVideoBox>
    </IntroVideoSection>
  );
};

export default VideoSection;