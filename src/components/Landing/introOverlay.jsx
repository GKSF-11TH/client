import React, { useState, useEffect } from 'react';
import { IntroOverlay, LogoVertical, MainTitle, IntroText } from '../../style/LandingStyle';

const IntroOverlayComponent = () => {
  const [scrollStage, setScrollStage] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const scrollY = window.scrollY;

      if (scrollY < window.innerHeight * 0.5) {
        setScrollStage(0); 
      } else if (scrollY < window.innerHeight * 1.5) {
        setScrollStage(1); 
      } else {
        setScrollStage(2); 
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div style={{ position: 'fixed', top: 0, left: 0, width: '100%', height: '100vh', zIndex: 10, pointerEvents: 'none' }}>
      <IntroOverlay className={`stage-${scrollStage}`}>
        <LogoVertical>11th</LogoVertical>
        <MainTitle>
          Global<br />
          Korean<br />
          Studies<br />
          Forum
        </MainTitle>
      </IntroOverlay>

      <IntroText className={`stage-${scrollStage}`}>
        <p>
          AI와 한국 <br/>
          국제한국학포럼(Global Korean Studies Forum)은 2015년을 기점으로 매년 개최되고 있는 국내 최초·유일의 융합형 한국학 포럼으로서, 한국이라는 사회·문화·역사적 공동체에 담긴 세계적인 맥락을 청년의 시각에서 조명하고자 합니다.<br />
          국제한국학포럼은 서강대학교 학생을 주도로 한국학·국제사회·한국문화 등에 관심 있는 청년들이 함께 만들어가고 있습니다.
        </p>
      </IntroText>
    </div>
  );
};

export default IntroOverlayComponent;
