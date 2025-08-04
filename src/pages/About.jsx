import React from 'react';
import SectionCard from '../components/About/SectionCard';
import styled from 'styled-components';
import Intro from '../components/About/Intro';
import PeopleContent from '../components/About/PeopleContent';
import { GlassEffectWithSolidBg } from '../style/common';
import Gradient1 from '../assets/images/Gradient1.png';
import Gradient2 from '../assets/images/Gradient2.png';

const PageText = [
  {
    isText: true,
    chatBox: null,
    title: 'ABOUT GKSF',
    description:
      '국제한국학포럼(Global Korean Studies Forum)은 다양한 전공의 서강대학교 학생들이 주도하여 직접 기획하고 운영하는, 국내 유일의 융합형 한국학 포럼입니다. 한국을 청년의 시각으로 새롭게 바라보고, 그 가능성을 다각도로 모색해보자는 취지에서 출발하였습니다.\n제11회 국제한국학포럼에서는 ‘AI 혁명과 한국’을 대주제로 삼아, 급속히 진화하는 인공지능 기술이 한국 사회의 구조와 감각을 어떻게 재편하고 있는지를 탐색합니다. 노동과 교육, 문화와 정치 등 한국 사회 전반에 걸쳐 AI는 근본적인 질문을 던지고 있으며, 우리는 이 거대한 전환 속에서 ‘한국다움’은 무엇인지, 또 어떤 방향으로 나아가야 하는가를 진지하게 묻고자 합니다.\n이번 포럼은 단순한 기술적 담론을 넘어, 인공지능 시대에 우리가 만들어갈 한국 사회의 윤리, 정체성, 상상력에 대한 청년들의 깊이 있는 고민과 실천적 통찰을 공유하는 장이 될 것입니다.'
  },
  {
    isText: false,
    chatBox: 'Who participated?',
    title: 'People',
    description:
      'Lorem ipsum dolor sit amet consectetur. Est morbi velit diam facilisi. Amet tellus id vitae ultrices placerat proin nulla vel. Odio nunc mattis etiam platea cras. Morbi aliquam dolor nunc eget elit feugiat. Vestibulum vitae pellentesque in quisque magna mi consectetur volutpat aenean. Magna lectus fermentum lorem erat elit at.\nAliquet est tempus volutpat enim morbi vestibulum turpis. Pharetra id tincidunt fermentum at. Nibh sed.'
  },
  {
    isText: true,
    chatBox: 'Lorem ispum dolor',
    title: 'Booth',
    description:
      'Lorem ipsum dolor sit amet consectetur. Est morbi velit diam facilisi. Amet tellus id vitae ultrices placerat proin nulla vel. Odio nunc mattis etiam platea cras. Morbi aliquam dolor nunc eget elit feugiat. Vestibulum vitae pellentesque in quisque magna mi consectetur volutpat aenean. Magna lectus fermentum lorem erat elit at.\nAliquet est tempus volutpat enim morbi vestibulum turpis. Pharetra id tincidunt fermentum at. Nibh sed.'
  },
  {
    isText: true,
    chatBox: 'Lorem ispum dolor',
    title: 'Session',
    description:
      'Lorem ipsum dolor sit amet consectetur. Est morbi velit diam facilisi. Amet tellus id vitae ultrices placerat proin nulla vel. Odio nunc mattis etiam platea cras. Morbi aliquam dolor nunc eget elit feugiat. Vestibulum vitae pellentesque in quisque magna mi consectetur volutpat aenean. Magna lectus fermentum lorem erat elit at.\nAliquet est tempus volutpat enim morbi vestibulum turpis. Pharetra id tincidunt fermentum at. Nibh sed.'
  }
];

const About = () => {
  return (
    <Container>
      <Background>
        <img src={Gradient1} alt="Gradient Background 1" />
        <img src={Gradient2} alt="Gradient Background 2" />
      </Background>
      <Content>
        <Intro />
        <Sections>
          {PageText.map((item, index) => (
            <Section key={index}>
              {item.chatBox ? <ChatBox>{item.chatBox}</ChatBox> : null}
              <SectionCard title={item.title}>
                {item.isText ? (
                  <TextBox>{item.description}</TextBox>
                ) : (
                  <PeopleContent />
                )}
              </SectionCard>
            </Section>
          ))}
        </Sections>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100%;
  padding: 16.4rem 17rem 18rem 17rem;
  min-height: 100vh;

  @media (max-width: 768px) {
    padding: 12rem 3rem 8.5rem 3rem;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: 0;
  overflow: hidden;

  > img {
    position: absolute;
    left: 0;
    width: 100vw;
    height: auto;
    object-fit: cover;
  }

  > img:nth-child(1) {
    top: 0;
  }

  > img:nth-child(2) {
    bottom: -9.6rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  display: flex;
  flex-direction: column;
  gap: 20.57rem;
`;

const Sections = styled.div`
  display: flex;
  flex-direction: column;
  gap: 4.9rem;
`;

const Section = styled.div``;

const ChatBox = styled(GlassEffectWithSolidBg)`
  display: block;
  width: fit-content;
  margin-left: auto;
  padding: 1.6rem 2.8rem;
  color: #fff;
  -webkit-text-stroke-width: 0.36px;
  font-family: 'IBM Plex Mono';
  font-size: 2.4rem;
  font-style: normal;
  font-weight: 500;
  line-height: normal;
  letter-spacing: 0.048rem;
  margin-bottom: 5.3rem;

  @media (max-width: 768px) {
    padding: 1rem 1.8rem;
    font-size: 1.6rem;
  }
`;

const TextBox = styled.p`
  color: var(--text-secondary);
  font-family: 'SF Pro';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 510;
  line-height: 140%; /* 2.52rem */
  letter-spacing: 0.036rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default About;
