import React from 'react';
import { useNavigate } from "react-router-dom";
import useResponsive from './useResponsive';
import {
  MainThemeContainer,
  MainThemeContent,
  MainThemeTitle,
  MainThemeSubtitle,
  MainThemeButton,
  MainThemeSection,
  MainThemeSectionTitle,
  MainThemeSectionContent,
} from '../../style/LandingStyle';

const MainTheme = ({ visibleSections }) => {
  const navigate = useNavigate();
  const { isMobile } = useResponsive(); 
  
  return (
    <div style={{ backgroundColor: 'var(--background-primary)', minHeight: '100vh', width: '100%', position: 'relative', zIndex: 200 }}>
      <MainThemeContainer>
        <MainThemeContent>
          <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: '4rem' }}>
            <div>
              <MainThemeTitle>Main Theme</MainThemeTitle>
              <MainThemeSubtitle>AI and Korea: 
                {isMobile && <br/>}Reimagining the Future Together.</MainThemeSubtitle>
            </div>

          </div>
          <MainThemeButton onClick={() => navigate("/participation")}>Sign Up Now →</MainThemeButton>
          
          <MainThemeSection 
            className={`main-theme-section ${visibleSections[0] ? 'visible' : ''}`}
          >
            <MainThemeSectionTitle>Background</MainThemeSectionTitle>
            <MainThemeSectionContent>
              인공지능(AI)의 비약적인 발전은 전 세계적인 사회 구조와 인간의 삶을 근본적으로 변화시키고 있습니다.{!isMobile && <br/>}
              이러한 전환의 시기 속에서, 제11회 국제한국학포럼은 'AI 혁명과 한국'이라는 대주제 하에, AI가 촉발하는 변화의 물결 속 한국 사회의 현재를 점검하고 그 방향성을 탐색하고자 합니다.
            </MainThemeSectionContent>
          </MainThemeSection>

          <MainThemeSection 
            className={`main-theme-section ${visibleSections[1] ? 'visible' : ''}`}
          >
            <MainThemeSectionTitle>Agenda</MainThemeSectionTitle>
            <MainThemeSectionContent>
              우리는 AI 기술이 한국 사회의 기존 구조와 어떤 방식으로 충돌하고 재편되는지, 또 이러한 흐름
              속에서 개인과 공동체는 어떤 윤리적, 문화적 선택을 해야 하는지를 성찰 하고자 합니다. 특히 청년 세대의
              시선으로, 기술이 아닌 인간 중심의 미래를 그려나가기 위한 목소리를 모읍니다.
            </MainThemeSectionContent>
          </MainThemeSection>

          <MainThemeSection 
            className={`main-theme-section ${visibleSections[2] ? 'visible' : ''}`}
          >
            <MainThemeSectionTitle>Insights</MainThemeSectionTitle>
            <MainThemeSectionContent>
              AI 혁명이 일상이 된 지금, 우리는 기술의 수용자가 아닌 능동적 설계자이자 비판적 사유자로서, 한국 사회의
              미래를 함께 고민해야 할 시점에 서 있습니다. 이번 포럼을 통해 우리는 질문을 던지고, 대안을 모색하며,
              결국 더 인간적인 미래를 향한 한국의 길을 다시 그려보는 집단적 사유의 장을 만들고자 합니다.
            </MainThemeSectionContent>
          </MainThemeSection>
        </MainThemeContent>
      </MainThemeContainer>
    </div>
  );
};

export default MainTheme;