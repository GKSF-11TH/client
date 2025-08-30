import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/booth-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-gradient-bg-mobile.png';
import speaker1Image from '../assets/images/speaker1.jpeg';
import speaker2Image from '../assets/images/speaker2.png';
import speaker3Image from '../assets/images/speaker3.jpeg';
import speaker3_2Image from '../assets/images/speaker3_2.png';
import speaker4Image from '../assets/images/speaker4.png';
import speaker4_1Image from '../assets/images/speaker4_1.jpeg';
import speaker5Image from '../assets/images/speaker5.png';
import speaker5_1Image from '../assets/images/speaker5_1.png';

const sessions = [
  {
    id: 1,
    title: '생각은 AI가 하고, 나는 멈췄다?: AI 리터러시 교육이 필요한 지금',
    time: '10:00 - 11:00',
    place: 'Main Hall',
    tags: ['AI', '리터러시', '교육'],
    speaker: '구본권 한겨레 사람과 디지털 연구소장',
    content:
      '(1) 생성형 AI의 구조와 AI 리터러시에 대한 배경지식\n(2) 생성형 AI의 양면성:\n학습효율을 높여준다 VS 사고력과 창의력을 저하시킨다\n(3) 생성형 AI를 올바르게 사용하기 위한 교육적 방향성과 태도',
    structure: '강연 및 청중 질의응답',
    img: speaker1Image,
    hasMultipleSpeakers: false
  },
  {
    id: 2,
    title: '스포츠 산업, AI라는 코치를 만나다',
    time: '11:15 - 12:15',
    place: 'Room 2',
    tags: ['스포츠', 'AI', '산업'],
    speaker: '이준성 연세대학교 스포츠응용산업학과 교수',
    content:
      '(1) 한국 스포츠 산업에서의 AI 활용 현황\n(2) AI 기술이 한국 스포츠 문화에 끼친 변화\n(3) 스포츠 산업의 일자리와 산업 구조의 재편 가능성\n(4) AI와 함께 나아갈 한국 스포츠의 미래 전략',
    structure: '강연 및 청중 질의응답',
    img: speaker2Image,
    hasMultipleSpeakers: false
  },
  {
    id: 3,
    title: 'AI와 청년 일자리: 함께 가는 법을 묻다',
    time: '13:30 - 14:30',
    place: 'Room 3',
    tags: ['AI', '청년', '일자리'],
    speaker:
      '이금룡 코글로닷컴 회장\n양승엽 한국노동연구원 사회정책연구본부 부연구위원',
    content:
      '(1) AI 도입에 따른 한국 노동시장의 일자리 변화\n(2) 기업의 인력 재편 전략과 고용 구조 변화\n(3) 청년층이 겪는 고용 불안정과 격차 확대\n(4) AI 시대에 대비한 한국 청년의 역량 개발의 필요성\n(5) 정부·기업·노동자의 역할 및 한국 사회의 대응 전략',
    structure: '심포지엄 및 청중 질의응답',
    img: speaker3Image,
    img2: speaker3_2Image,
    hasMultipleSpeakers: true
  },
  {
    id: 4,
    title: 'AI와 교육: 혁신과 불평등의 경계에서',
    time: '14:45 - 15:45',
    place: 'Main Hall',
    tags: ['AI', '교육', '격차'],
    speaker: '김현아 경일초등학교 교장\n한정윤 서울시립대학교 교육대학원 교수',
    content:
      '(1) 한국 교육 현장의 AI 도입 현황\n(2) 해외에서 실행 중인 AI 교육 사례\n(3) AI가 바꾼 한국 교육의 방식 및 교사 역할의 재정의\n(4) 학생에게 요구되는 새로운 핵심 역량\n(5) AI 교육 정책의 한국적 방향성 모색',
    structure: '심포지엄 및 청중 질의응답',
    img: speaker4_1Image,
    img2: speaker4Image,
    hasMultipleSpeakers: true
  },
  {
    id: 5,
    title: '인공지능이 그려 갈 K-콘텐츠의 새로운 무대',
    speaker: '최민근 MBC 예능국 예능3CP 프로듀서\n김영대 음악평론가',
    content:
      '(1) AI 기술이 K-콘텐츠 산업에 가져온 변화\n(2) AI 콘텐츠가 한국적 콘텐츠로 인정받을 수 있는가\n(3) 팬과 AI 아티스트의 정서적 연결 가능성\n(4) K-콘텐츠 산업의 윤리적·문화적 방향성',
    structure: '심포지엄 및 청중 질의응답',
    img: speaker5Image,
    img2: speaker5_1Image,
    hasMultipleSpeakers: true
  }
];

const tabs = ['세션 A', '세션 B', '세션 C', '세션 D', '세션 E'];

const Container = styled.div`
  position: relative;
  width: 100%; /* Safari 가로 스크롤 방지 (100vw 사용 지양) */
  height: 105rem;
  color: #fff;
  font-family: 'Pretendard', 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    height: 100%;
  }
`;

const Background = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url('${MobileBackgroundImage}');
    background-position: center top;
  }
`;

const Header = styled.header`
  position: relative;
  z-index: 11;
  padding-top: 14rem;
  padding-bottom: 1rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  @media (max-width: 600px) {
    padding-top: 13rem;
    gap: 0;
  }
`;

const Title = styled.h1`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;
  -webkit-text-stroke-width: 0.04rem;
  -webkit-text-stroke-color: #fff;
  font-family: Syncopate;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.036rem;
  padding-bottom: 2.4rem;
  @media (max-width: 600px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
`;

const Subtitle = styled.p`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;
  font-family: 'IBM Plex Mono';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.016rem;
  padding-bottom: 2.8rem;
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const NavWrapper = styled.div`
  position: relative; /* 클릭 박스 안정화 */
  display: flex;
  width: 66rem;
  height: 6.4rem;
  padding: 1rem 0.8rem 0.8rem 0.8rem;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  gap: 1rem;
  margin: 0 auto;
  background: rgba(255, 255, 255, 0.05);
  border: 0.1rem solid rgba(255, 255, 255, 0.1);
  border-radius: 3.6rem;
  overflow: hidden; /* blur 클리핑 */
  background-clip: padding-box; /* iOS Safari 안정화 */
  -webkit-backdrop-filter: saturate(150%) blur(15px);
  backdrop-filter: saturate(150%) blur(15px);
  isolation: isolate; /* 레이어 분리로 화이트 박스 방지 */

  /* flex-gap 미지원 Safari 폴백 */
  @supports not (gap: 1rem) {
    & > * {
      margin-left: 0.5rem;
      margin-right: 0.5rem;
    }
    margin-left: -0.5rem;
    margin-right: -0.5rem;
  }

  @media (max-width: 900px) {
    width: 90%;
    max-width: 60rem;
    height: 5.6rem;
    gap: 0.8rem;
    padding: 0.8rem 0.6rem 1rem 0.6rem;
    margin: 0 auto 3.2rem auto;
    background: transparent;
    border: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 12rem;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 0.6rem;
    row-gap: 0.6rem; /* iOS에서 줄바꿈 간격 보정 */
    padding: 1.2rem 0 0 0;
    margin: 0 auto 2.2rem auto;
    background: transparent;
    border: none;
    -webkit-backdrop-filter: none;
    backdrop-filter: none;
  }
`;

const Tab = styled.button.attrs(() => ({}))`
  appearance: none;
  -webkit-appearance: none;
  background-clip: padding-box;
  background-color: transparent;

  position: relative;
  z-index: 1;
  display: flex;
  width: 15rem;
  height: 4.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3.6rem;
  border: ${(props) =>
    props.$active
      ? '0.08rem solid rgba(255,255,255,0.2)'
      : '0.08rem solid rgba(255,255,255,0.08)'};
  background: ${(props) =>
    props.$active ? 'rgba(255,255,255,0.15)' : 'rgba(255,255,255,0.08)'};
  color: #fff;
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  cursor: pointer;
  outline: none;
  transition:
    transform 0.18s cubic-bezier(0.4, 1.2, 0.6, 1),
    background 0.18s ease,
    border-color 0.18s ease;
  white-space: nowrap;
  transform: ${(props) =>
    props.$active ? 'translateY(-2px)' : 'translateY(0)'};
  padding: 1rem;
  margin: 0;
  backface-visibility: hidden;
  -webkit-backface-visibility: hidden;
  will-change: transform;
  transform: translateZ(0);
  -webkit-font-smoothing: antialiased;

  /* 버튼에는 blur를 적용하지 않음: Safari 화이트 박스 방지 */

  @media (hover: hover) and (pointer: fine) {
    &:hover {
      background: rgba(255, 255, 255, 0.12);
      transform: translateY(-2px);
    }
    &:active {
      background: rgba(255, 255, 255, 0.18);
      transform: translateY(-4px);
    }
  }

  @media (max-width: 600px) {
    width: 10.5rem;
    height: 4.2rem;
    font-size: 1.1rem;
    /* 모바일: 이전 레이아웃 느낌 복원 (비활성 투명, 활성만 강조) */
    background: ${(props) =>
      props.$active ? 'rgba(255,255,255,0.15)' : 'transparent'};
    border: ${(props) =>
      props.$active
        ? '0.08rem solid rgba(255,255,255,0.2)'
        : '0.08rem solid transparent'};
  }
`;

const SessionTitle = styled.h2`
  padding-bottom: 2rem;
  font-family: 'DesignHouse', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-top: 5.2rem;
  margin-bottom: 4.6rem;
  letter-spacing: 0.04em;
  line-height: 1.3;
  color: #fff;
  text-shadow: 0 0.2rem 1.2rem #2e3c5d55;
  @media (max-width: 900px) {
    margin-top: 4rem;
  }
  @media (max-width: 600px) {
    font-size: 2rem;
    margin-top: 0.5rem;
    margin-bottom: 1.6rem;
    white-space: pre-line;
  }
`;

const InfoRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 3.2rem;
  @media (max-width: 900px) {
    gap: 4rem;
    padding-left: 1.5rem;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 4.4rem;
    padding-left: 1rem;
  }
`;

const SpeakerImgContainer = styled.div`
  position: relative;
  width: 30rem;
  height: 30rem;
  perspective: 60rem;
  cursor: ${(props) => (props.$hasMultipleSpeakers ? 'pointer' : 'default')};

  @media (max-width: 600px) {
    width: 25rem;
    height: 25rem;
  }
`;

const SpeakerImg3D = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s;
  transform-style: preserve-3d;

  &.rotate-y-180 {
    transform: rotateY(-180deg);
  }
`;

const SpeakerImgFront = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  object-fit: cover;
  object-position: center top;
  border-radius: 2.4rem;
  background: #222;
  box-shadow: 0 0 3.2rem #4f8cff33;
  border: 0.2rem solid #4f8cff33;
`;

const SpeakerImgBack = styled.img`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  transform: rotateY(-180deg);
  object-fit: cover;
  object-position: center top;
  border-radius: 2.4rem;
  background: #222;
  box-shadow: 0 0 3.2rem #4f8cff33;
  border: 0.2rem solid #4f8cff33;
`;

const InfoCol = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  height: 29rem;
  width: 90%;
  max-width: 42rem;
  @media (max-width: 900px) {
    height: 18rem;
    padding-left: 0.5rem;
  }
  @media (max-width: 600px) {
    align-items: flex-start;
    text-align: left;
    width: 100%;
    max-width: 100%;
    height: auto; /* 콘텐츠 기반 높이 */
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const SpeakerGroup = styled.div``;

const SpeakerTitle = styled.div`
  font-size: 1.4rem;
  color: var(--text-tertiary);
  margin-bottom: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono';
`;

const Speaker = styled.div`
  font-size: 1.4rem;
  color: var(--Text-Primary, #fbfbfb);
  font-weight: 400;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono';
  white-space: pre-line;
  line-height: 1.6;
`;

const ContentGroup = styled.div``;

const ContentTitle = styled.div`
  font-size: 1.4rem;
  color: var(--text-tertiary);
  margin-bottom: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono';
`;

const Content = styled.div`
  font-size: 1.4rem;
  color: var(--Text-Primary, #fbfbfb);
  line-height: 1.7;
  font-family: 'IBM Plex Mono';
  white-space: pre-line;
`;

const StructureGroup = styled.div``;

const Structure = styled.div`
  font-size: 1.4rem;
  color: var(--Text-Primary, #fbfbfb);
  font-weight: 400;
  font-family: 'IBM Plex Mono';
`;

const StructureTitle = styled.div`
  font-size: 1.4rem;
  color: var(--text-tertiary);
  margin-bottom: 0.8rem;
  font-weight: 400;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono';
`;

const BottomSpace = styled.div`
  height: 8rem;
  @media (max-width: 600px) {
    height: 4.8rem;
  }
`;

const Session = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [flippedCards, setFlippedCards] = useState({});
  const session = sessions[selectedTab];

  const handleCardFlip = (sessionId) => {
    if (sessions[sessionId - 1].hasMultipleSpeakers) {
      setFlippedCards((prev) => ({
        ...prev,
        [sessionId]: !prev[sessionId]
      }));
    }
  };

  const isCardFlipped = (sessionId) => flippedCards[sessionId] || false;

  return (
    <Container>
      <Background />
      <Header>
        <Title>SESSION</Title>
        <Subtitle>
          'AI 혁명과 한국'에서 뻗어나온 <br />
          다섯가지 소주제로 다섯 개의 세션을 진행합니다.
        </Subtitle>
        <NavWrapper>
          {tabs.map((tab, idx) => (
            <Tab
              key={tab}
              $active={selectedTab === idx}
              onClick={() => setSelectedTab(idx)}
            >
              {tab}
            </Tab>
          ))}
        </NavWrapper>
      </Header>
      <main style={{ position: 'relative', zIndex: 1 }}>
        <SessionTitle>
          {session.title.includes(':')
            ? session.title.replace(':', ':')
            : session.title}
        </SessionTitle>
        <InfoRow>
          <SpeakerImgContainer
            $hasMultipleSpeakers={session.hasMultipleSpeakers}
            onClick={() => handleCardFlip(session.id)}
          >
            <SpeakerImg3D
              className={isCardFlipped(session.id) ? 'rotate-y-180' : ''}
            >
              <SpeakerImgFront src={session.img} alt={session.speaker} />
              {session.hasMultipleSpeakers && session.img2 && (
                <SpeakerImgBack src={session.img2} alt={session.speaker} />
              )}
            </SpeakerImg3D>
          </SpeakerImgContainer>
          <InfoCol>
            <SpeakerGroup>
              <SpeakerTitle>연사자</SpeakerTitle>
              <Speaker>{session.speaker}</Speaker>
            </SpeakerGroup>
            <ContentGroup>
              <ContentTitle>세션 내용</ContentTitle>
              <Content>{session.content}</Content>
            </ContentGroup>
            <StructureGroup>
              <StructureTitle>세션 구성</StructureTitle>
              <Structure>{session.structure}</Structure>
            </StructureGroup>
          </InfoCol>
        </InfoRow>
      </main>
      <BottomSpace />
    </Container>
  );
};

export default Session;
