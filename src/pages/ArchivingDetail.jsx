import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import archivingData from '../components/Archiving/archivingData.json';
import Footer from '../components/common/Footer';

// Styled Components
const PageContainer = styled.div`
  background-color: #0e0e0e;
  min-height: 100vh;
  position: relative;
  width: 100vw;
  font-family: 'IBM Plex Mono', Helvetica;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;

  @media (max-width: 768px) {
    padding-top: 12rem;
    align-items: flex-start;
  }
`;

const MainTitle = styled.div`
  -webkit-text-stroke: 0.4px #ffffff;
  color: #ffffff;
  font-family: 'Syncopate', Helvetica;
  font-size: 7.2rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.72px;
  line-height: 100%;
  position: relative;
  white-space: nowrap;
  margin-bottom: 10rem;
  align-self: flex-start;
  margin-left: 39.5rem;

  @media (max-width: 768px) {
    font-size: 4.8rem;
    margin-left: 2rem;
    margin-bottom: 6rem;
    white-space: normal;
    line-height: 1.2;
  }
`;

const ContentContainer = styled.div`
  box-shadow: 0px 4px 4px #00000040;
  min-height: 100vh;
  position: relative;
  width: 106rem;
  max-width: 90vw;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    gap: 4rem;
    padding: 0 2rem;
  }
`;

// Hero Section
const HeroSection = styled.div`
  position: relative;
  width: 100%;
  height: 51.6rem;
  display: flex;
  align-items: flex-start;

  @media (max-width: 768px) {
    height: auto;
    flex-direction: column;
    gap: 3rem;
  }
`;

const HeroImage = styled.img`
  height: 51.6rem;
  width: 36.6rem;
  object-fit: cover;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: auto;
    width: 100%;
    max-width: 35rem;
    align-self: center;
    object-fit: contain;
  }
`;

const HeroContent = styled.div`
  height: 42.3rem;
  margin-left: 7.8rem;
  margin-top: 0;
  width: 61.6rem;
  display: flex;
  flex-direction: column;
  overflow: visible;

  @media (max-width: 768px) {
    height: auto;
    margin-left: 2rem;
    margin-right: 2rem;
    width: calc(100% - 4rem);
    text-align: center;
  }
`;

const HeroTitle = styled.div`
  color: #ffffff;
  font-family: 'Syncopate', Helvetica;
  font-size: 4.2rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.42px;
  line-height: 100%;
  margin-top: -1px;
  margin-bottom: 6.6rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 3.2rem;
    margin-bottom: 3rem;
    text-align: left;
  }
`;

const HeroSubtitle = styled.p`
  color: #fbfbfb;
  font-family: 'IBM Plex Mono', Helvetica;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.32px;
  line-height: 100%;
  margin: 0;
  margin-bottom: 12.2rem;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 6rem;
    text-align: left;
  }
`;

const HeroDescription = styled.p`
  color: #ffffff;
  font-family: 'SF Pro-Regular', Helvetica;
  font-size: 2.4rem;
  font-weight: 400;
  letter-spacing: -0.24px;
  line-height: 1.7;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    font-size: 1.4rem;
    line-height: 1.6;
    text-align: left;
  }
`;

// Booth Section
const BoothSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SegmentedControlContainer = styled.div`
  -webkit-backdrop-filter: blur(15px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(15px) brightness(100%);
  background-color: #ffffff26;
  border: none;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 6px 8px;
  width: 38.8rem;
  margin-left: 0;
  margin-top: 12rem;
  align-self: center;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      108deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.4) 4%,
      rgba(255, 255, 255, 0.03) 100%
    );
    border-radius: 100px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
    align-self: center;
    background: none;
    backdrop-filter: none;
    padding: 0;
    border-radius: 0;

    &::before {
      display: none;
    }
  }
`;

const SegmentedControlFrame = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    gap: 2rem;
    justify-content: center;
  }
`;

const SegmentButton = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 5.2rem;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 11.736rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
  border-radius: 3.6rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    -webkit-backdrop-filter: blur(15px) brightness(100%);
    backdrop-filter: blur(15px) brightness(100%);
    background-color: #ffffff26;
    border: 0.1rem solid rgba(255, 255, 255, 0.6);
  }

  div {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 9.53px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  span {
    -webkit-text-stroke: 0.16px #fbfbfb;
    color: #fbfbfb;
    font-family: 'IBM Plex Mono', Helvetica;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.32px;
    line-height: normal;
    margin-top: -0.95px;
    position: relative;
    width: fit-content;
  }

  @media (max-width: 768px) {
    height: 4.8rem;
    width: auto;
    min-width: 8rem;
    padding: 0 1.5rem;
  }
`;

const ContentCard = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f66;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: auto;
  overflow: hidden;
  padding: 7rem 4rem;
  width: 100%;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      169deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 41%,
      rgba(255, 255, 255, 0) 57%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 20px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const CardTitle = styled.p`
  color: #fbfbfb;
  font-family: 'IBM Plex Mono', Helvetica;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.32px;
  line-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center !important;
  display: block !important;
  width: 100% !important;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const CardDescription = styled.p`
  color: #efefef;
  font-family: 'IBM Plex Mono', Helvetica;
  font-size: 2rem;
  font-weight: 400;
  min-height: 20.4rem;
  letter-spacing: -0.2px;
  line-height: 1.7;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center !important;
  display: block !important;
  width: 100% !important;

  @media (max-width: 768px) {
    font-size: 1.8rem;
    min-height: auto;
    line-height: 1.6;
  }
`;

// Session Section
const SessionSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
`;

const SessionControlContainer = styled.div`
  -webkit-backdrop-filter: blur(15px) brightness(100%);
  align-items: center;
  backdrop-filter: blur(15px) brightness(100%);
  background-color: #ffffff26;
  border: none;
  border-radius: 100px;
  display: flex;
  flex-direction: column;
  gap: 10px;
  overflow: hidden;
  padding: 6px 8px;
  width: 66.8rem;
  margin-left: 0;
  margin-top: 8rem;
  align-self: center;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      108deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.4) 4%,
      rgba(255, 255, 255, 0.03) 100%
    );
    border-radius: 100px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 768px) {
    width: 100%;
    margin-left: 0;
    margin-top: 2rem;
    align-self: center;
    background: none;
    backdrop-filter: none;
    padding: 0;
    border-radius: 0;

    &::before {
      display: none;
    }
  }
`;

const SessionControlFrame = styled.div`
  align-items: center;
  align-self: stretch;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: 100%;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1rem;
  }
`;

const SessionButton = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  height: 5.2rem;
  justify-content: center;
  overflow: hidden;
  position: relative;
  width: 12.264rem;
  cursor: pointer;
  flex-shrink: 0;
  transition: all 0.3s ease;
  border-radius: 3.6rem;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    -webkit-backdrop-filter: blur(15px) brightness(100%);
    backdrop-filter: blur(15px) brightness(100%);
    background-color: #ffffff26;
    border: 0.1rem solid rgba(255, 255, 255, 0.6);
  }

  div {
    align-items: center;
    align-self: stretch;
    display: flex;
    flex: 0 0 auto;
    gap: 9.53px;
    justify-content: center;
    position: relative;
    width: 100%;
  }

  span {
    -webkit-text-stroke: 0.16px #fbfbfb;
    font-family: 'IBM Plex Mono', Helvetica;
    font-size: 1.6rem;
    font-weight: 500;
    letter-spacing: 0.32px;
    line-height: normal;
    margin-top: -0.95px;
    position: relative;
    width: fit-content;
  }

  @media (max-width: 768px) {
    height: 4.8rem;
    width: auto;
    min-width: 8rem;
    padding: 0 1.5rem;
    flex-shrink: 0;
  }
`;

const SessionCard = styled.div`
  align-items: center;
  justify-content: center;
  background-color: #0f0f0f66;
  border: none;
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  gap: 3rem;
  height: auto;
  overflow: hidden;
  padding: 7rem 4rem;
  width: 100%;

  &::before {
    -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      169deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 57%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 20px;
    content: "";
    inset: 0;
    mask-composite: exclude;
    padding: 1px;
    pointer-events: none;
    position: absolute;
    z-index: 1;
  }

  @media (max-width: 768px) {
    padding: 4rem 2rem;
    gap: 2rem;
  }
`;

const SessionTitle = styled.p`
  color: #fbfbfb;
  font-family: 'IBM Plex Mono', Helvetica;
  font-size: 3.2rem;
  font-style: normal;
  font-weight: 500;
  letter-spacing: -0.32px;
  line-height: 100%;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center !important;
  display: block !important;
  width: 100% !important;

  @media (max-width: 768px) {
    font-size: 2.8rem;
  }
`;

const SessionDescription = styled.p`
  color: #efefef;
  font-family: 'IBM Plex Mono', Helvetica;
  font-size: 2.4rem;
  font-weight: 400;
  min-height: 27.5rem;
  letter-spacing: -0.24px;
  line-height: 1.7;
  margin: 0;
  padding: 0;
  position: relative;
  text-align: center !important;
  display: block !important;
  width: 100% !important;

  .bold {
    letter-spacing: -0.06px;
  }

  .regular {
    font-size: 2rem;
    letter-spacing: -0.04px;
    line-height: 1.7;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
    min-height: auto;
    line-height: 1.6;

    .regular {
      font-size: 1.8rem;
    }
  }
`;

// Main Component
const ArchivingDetail = () => {
  const { edition } = useParams();
  const navigate = useNavigate();
  const [event, setEvent] = useState(null);
  const [activeBooth, setActiveBooth] = useState(0);
  const [activeSession, setActiveSession] = useState(0);

  useEffect(() => {
    if (edition && archivingData[edition]) {
      setEvent(archivingData[edition]);
    }
  }, [edition]);

  if (!event) {
    return (
      <PageContainer>
        <MainTitle>이벤트를 찾을 수 없습니다</MainTitle>
      </PageContainer>
    );
  }

  // 부스와 세션을 분리
  const booths = event.sections.filter(section => section.type === 'booth');
  const sessions = event.sections.filter(section => section.type === 'session');

  return (
    <PageContainer>
      <MainTitle>{event.title}</MainTitle>
      
      <ContentContainer>
        {/* Hero Section */}
        <HeroSection>
          <HeroImage
            src="https://c.animaapp.com/me8tr3vkphaONr/img/10---------------1-1.png"
            alt="GKSF Event"
          />
          
          <HeroContent>
            <HeroTitle>{event.heroTitle}</HeroTitle>
            
            <HeroSubtitle>
              {event.heroSubtitle}
            </HeroSubtitle>
            
            <HeroDescription>
              {event.heroDescription}
            </HeroDescription>
            
          </HeroContent>
        </HeroSection>

        {/* Booth Button Frame - Section 밖에 위치 */}
        <SegmentedControlContainer>
          <SegmentedControlFrame>
            {booths.map((booth, index) => (
              <SegmentButton 
                key={booth.id}
                onClick={() => setActiveBooth(index)}
                className={activeBooth === index ? 'active' : ''}
              >
                <div><span>부스 {String.fromCharCode(65 + index)}</span></div>
              </SegmentButton>
            ))}
          </SegmentedControlFrame>
        </SegmentedControlContainer>

        {/* Booth Section - 카드만 포함 */}
        <BoothSection>
          <ContentCard>
            <CardTitle>{booths[activeBooth]?.title || '부스 정보가 없습니다'}</CardTitle>
            <CardDescription>
              {booths[activeBooth]?.description || '부스 설명이 없습니다'}
            </CardDescription>
          </ContentCard>
        </BoothSection>

        {/* Session Button Frame - Section 밖에 위치 */}
        <SessionControlContainer>
          <SessionControlFrame>
            {/* 위쪽 줄: 세션 A, B, C */}
            <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
              {sessions.slice(0, 3).map((session, index) => (
                <SessionButton 
                  key={session.id}
                  onClick={() => setActiveSession(index)}
                  className={activeSession === index ? 'active' : ''}
                >
                  <div><span>세션 {String.fromCharCode(65 + index)}</span></div>
                </SessionButton>
              ))}
            </div>
            {/* 아래쪽 줄: 세션 D, E */}
            {sessions.length > 3 && (
              <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center' }}>
                {sessions.slice(3).map((session, index) => (
                  <SessionButton 
                    key={session.id}
                    onClick={() => setActiveSession(index + 3)}
                    className={activeSession === (index + 3) ? 'active' : ''}
                  >
                    <div><span>세션 {String.fromCharCode(65 + index + 3)}</span></div>
                  </SessionButton>
                ))}
              </div>
            )}
          </SessionControlFrame>
        </SessionControlContainer>

        {/* Session Section - 카드만 포함 */}
        <SessionSection>
          <SessionCard>
            <SessionTitle>
              {sessions[activeSession]?.title || '세션 정보가 없습니다'}
            </SessionTitle>
            <SessionDescription>
              <span className="bold">연사자<br /></span>
              <span className="regular">
                {sessions[activeSession]?.speaker || '연사자 정보가 없습니다'}<br /><br />
              </span>
              <span className="bold">세션 설명<br /></span>
              <span className="regular">
                {sessions[activeSession]?.description || '세션 설명이 없습니다'}
              </span>
            </SessionDescription>
          </SessionCard>
                 </SessionSection>
       </ContentContainer>
       
               <div style={{ marginTop: '16rem' }} />
        <Footer />
      </PageContainer>
    );
  };

export default ArchivingDetail;