import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/booth-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-gradient-bg-mobile.png';
import Footer from '../components/common/Footer';
import speaker1Image from '../assets/images/speaker1.jpeg';
import speaker2Image from '../assets/images/speaker2.png';
import speaker3Image from '../assets/images/speaker3.png';
import speaker4Image from '../assets/images/speaker4.png';
import speaker5Image from '../assets/images/speaker5.png';

const sessions = [
  {
    id: 1,
    title: '생각은 AI가 하고, 나는 멈췄다?: AI 리터러시 교육이 필요한 지금',
    time: '10:00 - 11:00',
    place: 'Main Hall',
    tags: ['AI', '리터러시', '교육'],
    speaker: '구본권 한겨레 사람과 디지털 연구소장',
    content:
      '생성형 AI는 단순한 도구를 넘어 삶 전반에 영향을 미치는 기반 기술로 자리잡고 있으며, 이에 따라 AI 리터러시 교육의 중요성도 높아지고 있다. 본 세션은 AI 의존이 사고력 저하를 초래할 수 있다는 우려와 학습 능력을 향상시킬 수 있다는 기대 사이에서 균형점을 모색하고자 한다. 나아가 인간의 주체성을 잃지 않고 AI를 효과적으로 활용할 수 있는 방법에 대해 함께 고민해보고자 한다.',
    structure: '강연 및 청중 질의응답',
    img: speaker1Image
  },
  {
    id: 2,
    title: '스포츠 산업, AI라는 코치를 만나다',
    time: '11:15 - 12:15',
    place: 'Room 2',
    tags: ['스포츠', 'AI', '산업'],
    speaker: '정용철 서강대학교 교육대학원 스포츠전공 주임교수',
    content:
      '대한민국의 스포츠와 AI에 대한 현주소에 대해 이야기하고, 스포츠와 AI 기술의 융합이 어떻게 변화하고 있는지를 조망하고자 합니다. 이를 통해 스포츠 산업 내 AI 기술의 활용 가능성을 모색하고, 나아가 AI와 스포츠 심리학의 융합이 가져올 새로운 패러다임을 공유함으로써 스포츠 산업의 미래 발전에 기여하고자 합니다.',
    structure: '강연 및 미니 토크쇼',
    img: speaker2Image
  },
  {
    id: 3,
    title: 'AI와 청년 일자리: 함께 가는 법을 묻다',
    time: '13:30 - 14:30',
    place: 'Room 3',
    tags: ['AI', '청년', '일자리'],
    speaker:
      '이금룡 코글로닷컴 회장 /  양승엽 한국노동연구원 사회정책연구본부 부연구위원',
    content:
      'AI 기술의 발전으로 노동시장이 빠르게 재편되면서, 청년층은 일자리 불확실성에 직면하고 있습니다. 본 세션에서는 AI로 인해 변화하는 노동시장 속에서 청년이 갖춰야 할 역량과 정부·기업의 역할, 사람과 기술의 공존 방안을 고용주와 노동자의 관점에서 함께 모색합니다.',
    structure: '심포지엄 및 청중 질의응답',
    img: speaker3Image
  },
  {
    id: 4,
    title: 'AI와 교육: 혁신과 불평등의 경계에서',
    time: '14:45 - 15:45',
    place: 'Main Hall',
    tags: ['AI', '교육', '격차'],
    speaker: '김현아 경일초등학교 교장 / 한정윤 고운영센터 부연구위원',
    content:
      'AI와 교육의 접목에 관한 제도적 기반과 실제 교육 현장의 경험을 폭넓게 바라보며 AI 기반 교육의 현재와 미래 전망을 탐구합니다. 또한 AI 기반 교육의 확산이 초래할 수 있는 교육 격차 문제를 진단하고, 이를 해소하기 위한 실천적 방안에 대해 다양한 관점에서 논의하고자 합니다.',
    structure: '심포지엄 및 청중 질의응답',
    img: speaker4Image
  },
  {
    id: 5,
    title: '문화와 창의성',
    speaker: '최수정, 문화기획자',
    content: '창의적 문화 활동이 사회에 미치는 영향과 사례를 공유합니다.',
    structure: '케이스 스터디',
    img: speaker5Image
  }
];

const tabs = ['세션 A', '세션 B', '세션 C', '세션 D', '세션 E'];

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 105rem;
  color: #fff;
  font-family: 'Pretendard', 'Montserrat', sans-serif;

  @media (max-width: 768px) {
    height: 165.3rem;
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
    height: 165.3rem;
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
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 3rem;
    margin-bottom: 0.5rem;
  }
`;

const Subtitle = styled.p`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;

  /* Desktop/Body/16_R */
  font-family: 'IBM Plex Mono';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.016rem;
  padding-bottom: 2.8rem;
  @media (max-width: 900px) {
    font-size: 1.05rem;
    margin-bottom: 2.8rem;
  }
  @media (max-width: 600px) {
    font-size: 1.3rem;
    margin-bottom: 1rem;
  }
`;

const NavWrapper = styled.div`
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
  backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));
  @media (max-width: 900px) {
    width: 90%;
    max-width: 60rem;
    height: 5.6rem;
    gap: 0.8rem;
    padding: 0.8rem 0.6rem 1rem 0.6rem;
    margin: 0 auto 3.2rem auto;
    background: transparent;
    border: none;
    backdrop-filter: none;
  }
  @media (max-width: 600px) {
    width: 90%;
    height: 9rem;
    flex-wrap: wrap;
    justify-content: center;
    align-content: center;
    gap: 0.6rem;
    padding: 1.2rem 0 0 0;
    margin: 0 auto 2.2rem auto;
    background: transparent;
    border: none;
    backdrop-filter: none;
  }
`;

const Tab = styled.button.attrs(() => ({}))`
  display: flex;
  width: 15rem;
  height: 4.8rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: 3.6rem;
  border: ${(props) =>
    props.$active
      ? '0.0794rem solid var(--Glass, rgba(255, 255, 255, 0.2))'
      : 'none'};
  background: ${(props) =>
    props.$active ? 'rgba(255, 255, 255, 0.15)' : 'transparent'};
  color: #fff;
  font-family: 'Pretendard', sans-serif;
  font-size: 1.8rem;
  font-weight: 300;
  cursor: pointer;
  outline: none;
  transition: all 0.18s cubic-bezier(0.4, 1.2, 0.6, 1);
  white-space: nowrap;
  transform: ${(props) =>
    props.$active ? 'translateY(-0.1rem)' : 'translateY(0)'};
  backdrop-filter: ${(props) =>
    props.$active ? 'blur(calc(var(--Glass-L, 30px) / 2))' : 'none'};
  padding: 1rem;
  margin: 0;
  &:hover {
    background: rgba(255, 255, 255, 0.15);
    transform: translateY(-0.1rem);
    backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));
  }
  &:active {
    background: rgba(255, 255, 255, 0.2);
    transform: translateY(-0.2rem);
    backdrop-filter: blur(calc(var(--Glass-L, 30px) / 2));
  }
  @media (max-width: 900px) {
    width: 11rem;
    height: 4rem;
    font-size: 1.5rem;
  }
  @media (max-width: 600px) {
    width: 8.5rem;
    height: 3.2rem;
    font-size: 1.1rem;
  }
`;

const SessionTitle = styled.h2`
  padding-bottom: 2rem;
  font-family: 'DesignHouse', sans-serif;
  font-size: 3rem;
  font-weight: 400;
  text-align: center;
  margin-top: 4.5rem;
  margin-bottom: 3.6rem;
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

const SpeakerImg = styled.img`
  width: 30rem;
  height: 30rem;
  object-fit: cover;
  object-position: center top;
  border-radius: 2.4rem;
  background: #222;
  box-shadow: 0 0 3.2rem #4f8cff33;
  border: 0.2rem solid #4f8cff33;
  @media (max-width: 600px) {
    width: 25rem;
    height: 25rem;
  }
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
    height: 33rem;
    padding-left: 3rem;
    padding-right: 3rem;
  }
`;

const SpeakerGroup = styled.div``;

const SpeakerTitle = styled.div`
  font-size: 1.3rem;
  color: var(--text-tertiary);
  margin-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono', monospace;
`;

const Speaker = styled.div`
  font-size: 1.3rem;
  color: var(--Text-Primary, #fbfbfb);
  font-weight: 500;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono', monospace;
`;

const ContentGroup = styled.div``;

const ContentTitle = styled.div`
  font-size: 1.3rem;
  color: var(--text-tertiary);
  margin-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono', monospace;
`;

const Content = styled.div`
  font-size: 1.3rem;
  color: var(--Text-Primary, #fbfbfb);
  line-height: 1.7;
  font-family: 'IBM Plex Mono', monospace;
`;

const StructureGroup = styled.div``;

const Structure = styled.div`
  font-size: 1.3rem;
  color: var(--Text-Primary, #fbfbfb);
  font-weight: 500;
  font-family: 'IBM Plex Mono', monospace;
`;

const StructureTitle = styled.div`
  font-size: 1.3rem;
  color: var(--text-tertiary);
  margin-bottom: 0.8rem;
  font-weight: 600;
  letter-spacing: 0.01em;
  font-family: 'IBM Plex Mono', monospace;
`;

const BottomSpace = styled.div`
  height: 8rem;
  @media (max-width: 600px) {
    height: 4.8rem;
  }
`;

const Session = () => {
  const [selectedTab, setSelectedTab] = useState(0);
  const session = sessions[selectedTab];

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
            ? session.title.replace(':', ':\n')
            : session.title}
        </SessionTitle>
        <InfoRow>
          <SpeakerImg src={session.img} alt={session.speaker} />
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
      <div style={{ position: 'relative', zIndex: 1 }}>
        <Footer />
      </div>
    </Container>
  );
};

export default Session;
