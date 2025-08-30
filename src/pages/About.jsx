import React, { useEffect, useRef, useState } from 'react';
import SectionCard from '../components/About/SectionCard';
import styled, { css } from 'styled-components';
import Intro from '../components/About/Intro';
import PeopleContent from '../components/About/PeopleContent';
import { GlassEffectWithSolidBg } from '../style/common';
import Gradient1 from '../assets/images/Gradient1.png';
import Gradient2 from '../assets/images/Gradient2.png';
import { keyframes } from 'styled-components';

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
    description: ''
  },
  {
    isText: true,
    chatBox: 'What is booth?',
    title: 'Booth',
    description:
      '국제한국학포럼에서 부스는 단순한 정보 제공을 넘어, 관람객이 직접 체험할 수 있는 전시 및 참여형 콘텐츠로 구성됩니다. 이번 포럼의 부스는 ‘유토피아’, ‘디스토피아’, ‘리얼리티’라는 세 가지 소주제를 중심으로 구성되며, 이들 각각은 AI라는 기술적 전환이 한국 사회에 어떤 방식으로 작용하고 있는지를 다양한 시선에서 풀어냅니다. 각 부스들은 내용적으로 긴밀히 연결되어 있어, 관람객들은 이를 순차적으로 체험해 나가며 하나의 큰 대주제인 ‘AI 혁명과 한국’을 보다 입체적이고 다층적으로 이해할 수 있습니다. 이 과정을 통해 관람객은 각 부스가 던지는 질문을 바탕으로 스스로 사고하고, 현재 우리가 마주한 기술적 전환의 의미를 성찰해볼 수 있는 시간을 갖게 됩니다'
  },
  {
    isText: true,
    chatBox: 'What is Session?',
    title: 'Session',
    description:
      '국제한국학포럼에서 세션이란, 단순한 지식 전달의 자리를 넘어 오늘날 한국 사회를 살아가는 청년들이 스스로 질문을 던지고 깊이 있는 토론을 통해 대안을 모색하는 장입니다.이번 포럼은 총 5개의 학술 세션으로 구성되어 있으며, 각 세션을 통해 우리는 기술 중심의 사회 변화 속에서도 인간과 공동체의 가치를 되묻고자 합니다.최근, ‘AI’라는 단어는 더 이상 먼 미래의 이야기가 아닌, 우리가 일상에서 마주하는 가장 현실적인 변화로 자리 잡고 있습니다. 특히 2025년의 한국 사회에서 AI는 기술적 혁신을 넘어 교육, 스포츠, 노동, 문화 등 거의 모든 영역을 뒤흔드는 강력한 전환점으로 작용하고 있습니다.많은 이들이 AI 기술의 변화에 놀라움과 동시에 위기를 이야기하지만, 정작 그 변화에 대해 주체적으로 고민하고 대응하려는 움직임은 아직 충분하지 않은 것이 현실입니다.AI 기술의 발전을 막연히 두려워하기보다, 지금 우리에게 필요한 것은 그 변화를 올바르게 직시하여 미래를 능동적으로 준비하는 태도입니다.이에 제11회 국제한국학포럼은 ‘AI 혁명과 한국: Korea in AI Revolution’이라는 대주제 아래, AI 혁명 속에서 청년들이 마주할 한국 사회의 변화를 중심에 두고자 합니다.'
  }
];

function useIntersectionObserver(options) {
  const ref = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target); // 한 번만 실행
        }
      });
    }, options);

    if (ref.current) observer.observe(ref.current);

    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [options]);

  return [ref, isVisible];
}

export function TypeWriterTrigger({ text }) {
  const [ref, isVisible] = useIntersectionObserver({ threshold: 0.2 });

  return (
    <TypeWriter active={isVisible} ref={ref} textLength={text.length}>
      <p>{text}</p>
    </TypeWriter>
  );
}

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
              {item.chatBox ? (
                <ChatBox>
                  <TypeWriterTrigger text={item.chatBox} />
                </ChatBox>
              ) : null}
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

const typing = (length) => keyframes`
  from { width: 0ch }
  to { width: calc(${length}ch + 1ch) }
`;

const blinkCaret = keyframes`
  from, to { border-color: transparent }
  50% { border-color: white; }
`;

const TypeWriter = styled.div`
  > p {
    display: inline-block;
    border-right: 0.15em solid white;
    white-space: nowrap;
    letter-spacing: 0.048rem;
    width: 0ch;
    overflow: hidden;

    ${({ active, textLength }) =>
      active &&
      css`
        animation:
          ${typing(textLength)} 2s steps(${textLength}, end) forwards,
          ${blinkCaret} 1.25s step-end infinite;
      `}
  }
`;

const TextBox = styled.p`
  color: var(--text-secondary);
  font-family: 'SF Pro';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 140%; /* 2.52rem */
  letter-spacing: 0.036rem;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

export default About;
