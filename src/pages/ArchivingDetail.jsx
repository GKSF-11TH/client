import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import archivingData from '../components/Archiving/archivingData.json';
import BackgroundImage from '../assets/images/booth-detail-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-detail-gradient-bg-mobile.png';
import GradientArchiving1 from '../assets/images/Gradient_1.png';
import GradientArchiving2 from '../assets/images/Gradient_2.png';

// 포스터 이미지들 import
import poster1 from '../assets/images/1poster.png';
import poster2 from '../assets/images/2poster.jpg';
import poster3 from '../assets/images/3poster.png';
import poster4 from '../assets/images/4poster.png';
import poster5 from '../assets/images/5poster.png';
import poster6 from '../assets/images/6poster.png';
import poster7 from '../assets/images/7poster.jpg';
import poster8 from '../assets/images/8poster.png';
import poster9 from '../assets/images/9poster.png';
import poster10 from '../assets/images/10poster.png';
import poster11 from '../assets/images/11poster.jpg';
// Styled Components
const PageContainer = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  font-family: 'IBM Plex Mono';
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding-top: 20rem;
  padding-bottom: 12rem;

  @media (max-width: 768px) {
    padding-top: 12rem;
    align-items: flex-start;
    padding-left: 1.3rem;
    padding-right: 1.3rem;
  }
`;

const MainTitle = styled.div`
color: #FFF;
/* Desktop/Heading/72_R */
-webkit-text-stroke-width: 0.4px;
-webkit-text-stroke-color: #FFF;
font-family: Syncopate;
font-size: 72px;
font-style: normal;
font-weight: 400;
line-height: 100%; /* 72px */
letter-spacing: -0.72px;
@media (max-width: 768px) {
    color: #FBFBFB;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: #FFF;
font-family: "SF Pro";
font-size: 32px;
font-style: normal;
font-weight: 120;
line-height: 100%; /* 32px */
letter-spacing: -0.32px;
padding-bottom: 2rem;
  }
`;

const ContentContainer = styled.div`
  box-shadow: 0px 4px 4px #00000040;
  min-height: 100vh;
  position: relative;
  z-index: 1;
  width: 70%;
  max-width: 100vw;
  display: flex;
  flex-direction: column;
  gap: 8rem;

  @media (max-width: 768px) {
    width: 100%;
    max-width: 100%;
    gap: 2rem;
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
  height: 60.3rem;
  margin-left: 7.8rem;
  margin-top: 0;
  width: 100%;
  display: flex;
  flex-direction: column;
  overflow: visible;

  @media (max-width: 768px) {
    margin-left: 0;
    height: auto;
    text-align: center;
  }
`;

const HeroTitle = styled.div`
  color: #fff;
  font-family: Syncopate;
  font-size: 42px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.42px;
  margin-top: 3rem;
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    color: #FFF;
    margin-bottom: 1.5rem;

    /* Mobile/Title/24_Exp.T */
    font-family: Syncopate;
    font-size: 24px;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 24px */
    letter-spacing: -0.24px;
  }
`;

const HeroSubtitle = styled.p`
  color: var(--Text-Primary, #fbfbfb);
  font-family: 'IBM Plex Mono';
  font-size: 32px;
  font-style: normal;
  font-weight: 500;
  line-height: 100%;
  letter-spacing: -0.32px;
  margin: 0;
  margin-bottom: 3rem;
  text-align: left;

  @media (max-width: 768px) {
    color: var(--Text-Primary, #FBFBFB);
    margin-bottom: 1.5rem;

    /* Mobile/Subtitle/18_R */
    font-family: "SF Pro";
    font-size: 18px;
    font-style: normal;
    font-weight: 510;
    line-height: 140%; /* 25.2px */
    letter-spacing: 0.36px;
  }
`;

const HeroDivider = styled.div`
  background: #fff;
  width: 475px;
  height: 1px;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    width: 100%;
    margin-bottom: 1.5rem;
  }
`;

const HeroDescription = styled.p`
  color: #fff;
  font-family: 'SF Pro';
  font-size: 24px;
  font-style: normal;
  font-weight: 400;
  line-height: 170%;
  letter-spacing: -0.24px;
  margin: 0;
  text-align: left;

  @media (max-width: 768px) {
    color: var(--Text-Primary, #FBFBFB);

/* Mobile/Body/12_R */
font-family: "IBM Plex Mono";
font-size: 12px;
font-style: normal;
font-weight: 400;
line-height: 150%; /* 18px */
letter-spacing: 0.12px;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-image: url('${GradientArchiving1}'), url('${GradientArchiving2}');
    background-size: cover, cover;
    background-position: center top, center top;
    background-repeat: no-repeat, no-repeat;
    opacity: 0.8;
    z-index: 1;
  }

  @media (max-width: 768px) {
    background-image: url('${MobileBackgroundImage}');
    background-position: center top;

    &::before {
      background-image: url('${GradientArchiving1}'), url('${GradientArchiving2}');
      background-size: cover, cover;
      background-position: center top, center top;
      background-repeat: no-repeat, no-repeat;
      opacity: 0.6;
    }
  }
`;

// Booth Section
const BoothSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
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
  min-width: 11.736rem;
  max-width: 11.736rem;
  cursor: pointer;
  flex-shrink: 0;
  flex-grow: 0;
  flex-basis: 11.736rem;
  transition: all 0.3s ease;
  border-radius: 3.6rem;
  will-change: transform;
  transform: translateZ(0);
  box-sizing: border-box;

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

  @media (max-width: 900px) {
    width: 11rem;
    height: 4rem;
    min-width: 11rem;
    max-width: 11rem;
    flex-basis: 11rem;
  }
  @media (max-width: 600px) {
    width: 8.5rem;
    height: 3.2rem;
    min-width: 8.5rem;
    max-width: 8.5rem;
    flex-basis: 8.5rem;
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
  min-height: 40rem;
  overflow: hidden;
  padding: 7rem 4rem;
  width: 100%;
  text-align: center;

  &::before {
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      169deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0) 41%,
      rgba(255, 255, 255, 0) 57%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 20px;
    content: '';
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
    min-height: auto;
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
  margin: 0 auto;
  padding: 0;
  position: relative;
  text-align: center !important;
  display: block !important;
  width: 100% !important;
  max-width: 120rem;

  @media (max-width: 768px) {
    color: var(--Text-Primary, #FBFBFB);
    text-align: center;
    padding: 0 2rem;

    /* Mobile/Subtitle/16_R */
    font-family: "SF Pro";
    font-size: 16px;
    font-style: normal;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.32px;
  }
`;

const CardDescription = styled.p`
  color: #efefef;
  font-family: 'IBM Plex Mono', Helvetica;
  font-size: 2rem;
  font-weight: 400;
  letter-spacing: -0.2px;
  line-height: 1.7;
  margin: 0 auto;
  padding: 0;
  position: relative;
  text-align: center !important;
  display: block !important;
  width: 100% !important;
  max-width: 120rem;

  @media (max-width: 768px) {
    color: var(--Text-Primary, #FBFBFB);
    text-align: center;
    padding: 0 2rem;

    /* Mobile/Body/12_R */
    font-family: "IBM Plex Mono";
    font-size: 12px;
    font-style: normal;
    font-weight: 400;
    line-height: 150%; /* 18px */
    letter-spacing: 0.12px;
  }
`;

// Session Section
const SessionSection = styled.div`
  position: relative;
  width: 100%;
  display: flex;
  flex-direction: column;
  height: 100%;
  margin-top: 1rem;
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
  width: fit-content;
  min-width: 20rem;
  margin-left: 0;
  margin-top: 8rem;
  align-self: center;


  &::before {
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      108deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0.4) 4%,
      rgba(255, 255, 255, 0.03) 100%
    );
    border-radius: 100px;
    content: '';
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
    margin-top: 6rem;
    align-self: center;
    background: none;
    backdrop-filter: none;
    padding: 0;
    border-radius: 0;
    height: auto;
    min-height: 5rem;
    &::before {
      display: none;
    }
  }
`;

const SessionControlFrame = styled.div`
  align-items: center;
  display: flex;
  flex: 0 0 auto;
  gap: 10px;
  position: relative;
  width: fit-content;
  justify-content: center;
  contain: layout style;
  min-height: 5.2rem;
  @media (max-width: 768px) {
    flex-direction: row;
    align-items: stretch;
    gap: 1rem;
    flex-wrap: wrap;
    justify-content: center;
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
  font-size: 18px;

  &:hover {
    background-color: rgba(255, 255, 255, 0.1);
  }

  &.active {
    -webkit-backdrop-filter: blur(15px) brightness(100%);
    backdrop-filter: blur(15px) brightness(100%);
    background-color: #ffffff26;
    border: 0.1rem solid rgba(255, 255, 255, 0.6);
  }

  @media (max-width: 768px) {
    width: 9.5rem;
    height: 4.2rem;
    color: var(--Text-Primary, #FBFBFB);
    font-family: "IBM Plex Mono";
    font-size: 12px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
    letter-spacing: 0.24px;
    padding: 12px 24px;
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
  overflow: hidden;
  padding: 7rem 4rem;
  width: 100%;
  text-align: center;

  &::before {
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    background: linear-gradient(
      169deg,
      rgba(255, 255, 255, 1) 0%,
      rgba(255, 255, 255, 0) 57%,
      rgba(255, 255, 255, 0.1) 100%
    );
    border-radius: 20px;
    content: '';
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

// 포스터 이미지 매핑 함수
const getPosterImage = (edition) => {
  const posterMap = {
    '1': poster1,
    '2': poster2,
    '3': poster3,
    '4': poster4,
    '5': poster5,
    '6': poster6,
    '7': poster7, // 7번째 포스터가 없으므로 9번째 사용
    '8': poster8, // 8번째 포스터가 없으므로 9번째 사용
    '9': poster9,
    '10': poster10,
    '11': poster11, // 11번째 포스터가 없으므로 10번째 사용
  };
  return posterMap[edition] || poster4; // 기본값으로 4번째 포스터 사용
};

// 줄바꿈 처리 함수
const formatTextWithLineBreaks = (text) => {
  if (!text) return '';
  // 실제 줄바꿈 문자(\n)와 문자열로 저장된 줄바꿈(\\n) 모두 처리
  return text.split(/\n|\\n/).map((line, index) => (
    <React.Fragment key={index}>
      {line}
      {index < text.split(/\n|\\n/).length - 1 && <br />}
    </React.Fragment>
  ));
};

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
  const booths = event.sections.filter((section) => section.type === 'booth');
  const sessions = event.sections.filter(
    (section) => section.type === 'session'
  );

  return (
    <PageContainer>
      <Background />
      <ContentContainer>
        <MainTitle>{event.title}</MainTitle>
        <HeroSection>
          <HeroImage
            src={getPosterImage(edition)}
            alt={`${event.title} 포스터`}
          />

          <HeroContent>
            <HeroTitle>{formatTextWithLineBreaks(event.heroTitle)}</HeroTitle>

            <HeroSubtitle>{formatTextWithLineBreaks(event.heroSubtitle)}</HeroSubtitle>

            <HeroDivider />

            <HeroDescription>{formatTextWithLineBreaks(event.heroDescription)}</HeroDescription>
          </HeroContent>
        </HeroSection>

        {/* Booth Button Frame - Section 밖에 위치 */}
        <SessionControlContainer>
          <SessionControlFrame>
            {booths.map((booth, index) => (
              <SessionButton
                key={booth.id}
                onClick={() => setActiveBooth(index)}
                className={activeBooth === index ? 'active' : ''}
              >
                <div>
                  <span>부스 {String.fromCharCode(65 + index)}</span>
                </div>
              </SessionButton>
            ))}
          </SessionControlFrame>
        </SessionControlContainer>

        {/* Booth Section - 카드만 포함 */}
        <BoothSection>
          <ContentCard>
            <CardTitle>
              {formatTextWithLineBreaks(booths[activeBooth]?.title) || '부스 정보가 없습니다'}
            </CardTitle>
            <CardDescription>
              {formatTextWithLineBreaks(booths[activeBooth]?.description) || '부스 설명이 없습니다'}
            </CardDescription>
          </ContentCard>
        </BoothSection>

        {/* Session Button Frame - Section 밖에 위치 */}
        <SessionControlContainer>
          <SessionControlFrame>
            {sessions.map((session, index) => (
              <SessionButton
                key={session.id}
                onClick={() => setActiveSession(index)}
                className={activeSession === index ? 'active' : ''}
              >
                <div>
                  <span>세션 {String.fromCharCode(65 + index)}</span>
                </div>
              </SessionButton>
            ))}
          </SessionControlFrame>
        </SessionControlContainer>

        {/* Session Section - 카드만 포함 */}
        <SessionSection>
          <SessionCard>
            <CardTitle>
              {formatTextWithLineBreaks(sessions[activeSession]?.title) || '세션 정보가 없습니다'}
            </CardTitle>
            <CardDescription>
              <span className="bold">
                연사자
                <br />
              </span>
              <span className="regular">
                {formatTextWithLineBreaks(sessions[activeSession]?.speaker) || '연사자 정보가 없습니다'}
                <br />
                <br />
              </span>
              <span className="bold">
                세션 설명
                <br />
              </span>
              <span className="regular">
                {formatTextWithLineBreaks(sessions[activeSession]?.description) || '세션 설명이 없습니다'}
              </span>
            </CardDescription>
          </SessionCard>
        </SessionSection>
      </ContentContainer>
     </PageContainer>
   );
 };

export default ArchivingDetail;
