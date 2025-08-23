import React, { useEffect, useRef, useState } from 'react';
import { useNavigate } from "react-router-dom";
import useResponsive from './useResponsive';
import {
  InfoWrapper, InfoTop, InfoTitle, InfoSubtitle,
  InfoCardRow, InfoCard,
  InfoOrbBg, InfoContent,
  InfoAnchorArea, InfoAnchorCard, InfoAnchorText, InfoAnchorButton
} from '../../style/LandingStyle';
import orbImage from '../../assets/images/orb.png';

const Info = () => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive(); 

  const wrapperRef = useRef(null);
  const targetPositionRef = useRef(null);


  const [targetPosition, setTargetPosition] = useState({ top: 0, left: 0 });
  const [initialPosition, setInitialPosition] = useState({ top: 0, left: 0 });

  const [orbStyle, setOrbStyle] = useState({
    topPx: isMobile ? 300 : 150,
    leftPercent: isMobile ? 50 : 40,
    scale: 1,
    widthPercent: isMobile ? 200 : 140,
    opacity: 0.95,
  });

  const [showGlassBox, setShowGlassBox] = useState(false);
  const [animationComplete, setAnimationComplete] = useState(false);


  const calculateTargetPosition = () => {
    const wrapper = wrapperRef.current;
    const targetEl = targetPositionRef.current;
    if (!wrapper || !targetEl) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const targetRect = targetEl.getBoundingClientRect();

    
    const targetCenterY = targetRect.top - wrapperRect.top + targetRect.height / 3;
    const targetCenterX = isMobile ? 55 : 52; 


    const initTop = isMobile ? 300 : 150;
    const initLeft = isMobile ? 50 : 40;

    setTargetPosition({ top: targetCenterY * 0.89, left: targetCenterX });
    setInitialPosition({ top: initTop, left: initLeft });
  };

  const handleUpdate = () => {
    const wrapper = wrapperRef.current;
    if (!wrapper) return;

    const wrapperRect = wrapper.getBoundingClientRect();
    const sectionTop = wrapperRect.top + window.scrollY;
    const sectionHeight = wrapper.offsetHeight;
    const scrollY = window.scrollY;

    const animationStartOffset = sectionHeight * (isMobile ? 0.2 : 0.3);
    const animationRange = sectionHeight * (isMobile ? 0.6 : 0.5);

    const rawP = Math.max(0, (scrollY - (sectionTop + animationStartOffset)) / animationRange);
    const p = Math.min(1, Math.max(0, rawP));

    const stopPoint = isMobile ? 0.75 : 0.69;
    
    if (p >= stopPoint && !animationComplete) {
      setAnimationComplete(true);
    }
    
    if (animationComplete && p >= stopPoint) {
     
      const wrapperWidth = wrapper.offsetWidth;
      const endWidthPx = isMobile ? 200 : 500;
      const startWidthPx = wrapperWidth * (isMobile ? 2 : 1.4);
      const endScale = endWidthPx / startWidthPx;

      setOrbStyle({
        topPx: targetPosition.top - (startWidthPx * endScale) / 2,
        leftPercent: targetPosition.left,
        scale: endScale,
        widthPercent: isMobile ? 200 : 140,
        opacity: 0.7,
      });
      return;
    }
    
    if (animationComplete && p < stopPoint) {
      setAnimationComplete(false);
    }

 
    const wrapperWidth = wrapper.offsetWidth;
    const startWidthPx = wrapperWidth * (isMobile ? 2 : 1.4);
    const endWidthPx = isMobile ? 120 : 180;
    const endScale = endWidthPx / startWidthPx;

    const ease = p * p * (3 - 2 * p);
    

    const scaleNow = 1 + (endScale - 1) * ease;
    const topNow = initialPosition.top + (targetPosition.top - (startWidthPx * endScale) / 2 - initialPosition.top) * ease;
    const leftNow = initialPosition.left + (targetPosition.left - initialPosition.left) * ease;
    const opacityNow = 0.95 - 0.25 * ease;

    if (p >= (isMobile ? 0.5 : 0.6) && !showGlassBox) {
      setShowGlassBox(true);
    }
    
    if (p < (isMobile ? 0.5 : 0.6) && showGlassBox) {
      setShowGlassBox(false);
    }

    setOrbStyle({
      topPx: topNow,
      leftPercent: leftNow,
      scale: scaleNow,
      widthPercent: isMobile ? 200 : 140,
      opacity: Math.max(0.7, opacityNow),
    });
  };

  useEffect(() => {
    const handleResize = () => {
      calculateTargetPosition();
      if (!animationComplete) {
        handleUpdate();
      }
    };


    setTimeout(calculateTargetPosition, 100);
    
    window.addEventListener('resize', handleResize);
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, [isMobile]);


  useEffect(() => {
    const onScroll = () => handleUpdate();
    
    window.addEventListener('scroll', onScroll, { passive: true });
    
    handleUpdate();
    
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [showGlassBox, animationComplete, targetPosition, initialPosition, isMobile]);

  useEffect(() => {
    setOrbStyle(prev => ({
      ...prev,
      topPx: isMobile ? 300 : 150,
      leftPercent: isMobile ? 50 : 40,
      widthPercent: isMobile ? 200 : 140,
    }));
   
    setTimeout(calculateTargetPosition, 100);
  }, [isMobile]);

  return (
    <InfoWrapper ref={wrapperRef}>
      <InfoTop>
        <InfoTitle>11TH 
          {isMobile && <br/>} Global 
          {isMobile && <br/>} Korean 
          {isMobile && <br/>} Studies 
          {isMobile && <br/>} Forum</InfoTitle>
        <InfoSubtitle>Korea in AI Revolution</InfoSubtitle>
      </InfoTop>

      <InfoCardRow>
        <InfoCard>
          <div>Date</div>
          <div>2025.09.12(금) 13:30 - 21:00<br/>2025.09.13(토) 11:00 - 16:30</div>
        </InfoCard>
        <InfoCard>
          <div>Location</div>
          <div>
            부스 - 서강대학교 정하상관 2층<br/>
            세션 - 서강대학교 정하상관 1층 J118호
          </div>
        </InfoCard>
        <InfoCard onClick={() => navigate("/participation")}>
          <div>Pre-Apply</div>
          <div>사전신청 바로가기 &rarr;</div>
        </InfoCard>
      </InfoCardRow>

      <InfoOrbBg
        src={orbImage}
        alt="orb"
        $topPx={orbStyle.topPx}
        $leftPercent={orbStyle.leftPercent}
        $scale={orbStyle.scale}
        $widthPercent={orbStyle.widthPercent}
        $opacity={orbStyle.opacity}
      />

      <InfoContent>
        <div style={{ fontWeight: '600', marginBottom: '2.5rem', fontSize: '1.75rem' }}>디렉터 인사말</div>
        <div>
          제11회 국제한국학포럼에 참여해 주신 모든 분들께 진심으로 환영의 인사를 전합니다. <br/>
          <br/>
          국제한국학포럼은 국내 최초의 학생 주도 융합형 한국학 포럼으로, 지난 10년간 다양한 주제를 통해 한국의 사회, 문화, 정치, 외교를 다층적으로 탐구해왔습니다. 올해 새로운 10년의 첫걸음을 내딛는 제11회 포럼에서는 'AI 혁명과 한국'이라는 대주제 아래, 인공지능이라는 거대한 전환의 흐름 속에서 한국이 직면한 도전과 기회를 함께 논의하고자 합니다. <br/>
          <br/>
          인공지능은 이미 우리의 삶 곳곳에 깊숙이 침투해 사회 전반에 새로운 기준과 방향을 요구하고 있습니다. 디지털 문명사적 전환기라 불릴 만큼 급격한 변화 속에서, 한국은 어떤 정체성을 지켜가며 어떠한 미래를 설계해야 할지에 대한 질문은 그 어느 때보다 절실합니다. 이번 포럼에서 준비한 3개의 부스와 5개의 세션은 그러한 고민을 청년의 시선에서 자유롭고 비판적으로 성찰하고, 다양한 분야의 전문가들과 함께 해법을 모색하는 장이 될 것입니다. <br/>
          <br/>
          제11회 국제한국학포럼 사무국은 'AI 혁명과 한국'이라는 방대한 주제를 진정성 있게 담아내기 위해 지난 수개월간 치열하게 고민하며 준비해 왔습니다. 이번 포럼이 한국학의 지평을 확장하는 동시에, 청년 세대의 지적 담론이 사회적 변화로 이어질 수 있는 계기가 되기를 바랍니다. 바쁜 일정 속에서도 참여해주신 모든 분들께 다시 한 번 감사의 인사를 전합니다. <br/>
          <br/>
          감사합니다.
        </div>
      </InfoContent>

      <div 
        ref={targetPositionRef}
        style={{
          position: 'absolute',
          bottom: isMobile ? '95rem' : '90rem',
          left: isMobile ? '60%': '55%',
          transform: 'translateX(-50%)',
          width: isMobile ? '120px' : '180px',
          height: isMobile ? '120px' : '180px',
          pointerEvents: 'none',
          opacity: 0,
        }}
      />

      <InfoAnchorArea style={{ 
        opacity: showGlassBox ? 1 : 0, 
        transform: `translateY(${showGlassBox ? 0 : '200em'})`,
        transition: 'opacity 0.8s ease-out, transform 0.8s ease-out'
      }}>
        <InfoAnchorCard>
          <InfoAnchorText>
            <div style={{ fontWeight: 590, marginBottom: '1.5rem', fontFamily: "SF Pro", fontSize: "1.75rem", color: "var(--Text-Primary)"}}>Ready to Join the GKSF?</div>
            <div style={{ opacity: 0.8 }}>AI 시대, 한국학의 방향은 어디로 향할까요?<br/>
            글로벌한 관점에서 질문하고, 함께 논의해요.</div>
          </InfoAnchorText>
          
          <InfoAnchorButton onClick={() => navigate("/about")}>About GKSF</InfoAnchorButton>
        </InfoAnchorCard>
      </InfoAnchorArea>
    </InfoWrapper>
  );
};

export default Info;