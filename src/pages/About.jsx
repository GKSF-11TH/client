import React from 'react';
import SectionCard from '../components/common/About/SectionCard';
import styled from 'styled-components';

const PageText = [
  {
    title: 'ABOUT GKSF',
    description:
      '국제한국학포럼(Global Korean Studies Forum)은 다양한 전공의 서강대학교 학생들이 주도하여 직접 기획하고 운영하는, 국내 유일의 융합형 한국학 포럼입니다. 한국을 청년의 시각으로 새롭게 바라보고, 그 가능성을 다각도로 모색해보자는 취지에서 출발하였습니다.\n제11회 국제한국학포럼에서는 ‘AI 혁명과 한국’을 대주제로 삼아, 급속히 진화하는 인공지능 기술이 한국 사회의 구조와 감각을 어떻게 재편하고 있는지를 탐색합니다. 노동과 교육, 문화와 정치 등 한국 사회 전반에 걸쳐 AI는 근본적인 질문을 던지고 있으며, 우리는 이 거대한 전환 속에서 ‘한국다움’은 무엇인지, 또 어떤 방향으로 나아가야 하는가를 진지하게 묻고자 합니다.\n이번 포럼은 단순한 기술적 담론을 넘어, 인공지능 시대에 우리가 만들어갈 한국 사회의 윤리, 정체성, 상상력에 대한 청년들의 깊이 있는 고민과 실천적 통찰을 공유하는 장이 될 것입니다.'
  },
  {
    title: 'People',
    description:
      'Lorem ipsum dolor sit amet consectetur. Est morbi velit diam facilisi. Amet tellus id vitae ultrices placerat proin nulla vel. Odio nunc mattis etiam platea cras. Morbi aliquam dolor nunc eget elit feugiat. Vestibulum vitae pellentesque in quisque magna mi consectetur volutpat aenean. Magna lectus fermentum lorem erat elit at.\nAliquet est tempus volutpat enim morbi vestibulum turpis. Pharetra id tincidunt fermentum at. Nibh sed.'
  },
  {
    title: 'Booth',
    description:
      'Lorem ipsum dolor sit amet consectetur. Est morbi velit diam facilisi. Amet tellus id vitae ultrices placerat proin nulla vel. Odio nunc mattis etiam platea cras. Morbi aliquam dolor nunc eget elit feugiat. Vestibulum vitae pellentesque in quisque magna mi consectetur volutpat aenean. Magna lectus fermentum lorem erat elit at.\nAliquet est tempus volutpat enim morbi vestibulum turpis. Pharetra id tincidunt fermentum at. Nibh sed.'
  },
  {
    title: 'Session',
    description:
      'Lorem ipsum dolor sit amet consectetur. Est morbi velit diam facilisi. Amet tellus id vitae ultrices placerat proin nulla vel. Odio nunc mattis etiam platea cras. Morbi aliquam dolor nunc eget elit feugiat. Vestibulum vitae pellentesque in quisque magna mi consectetur volutpat aenean. Magna lectus fermentum lorem erat elit at.\nAliquet est tempus volutpat enim morbi vestibulum turpis. Pharetra id tincidunt fermentum at. Nibh sed.'
  }
];

const About = () => {
  return (
    <SectionWrapper>
      {PageText.map((item, index) => (
        <SectionCard title={item.title} key={index}>
          <TextBox>{item.description}</TextBox>
        </SectionCard>
      ))}
    </SectionWrapper>
  );
};

const ChatWrapper = styled.div`
  width: 100%;
`;

const SectionWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 16.1rem;
`;

const TextBox = styled.p`
  color: #fff;
  font-family: 'SF Pro';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 510;
  line-height: 140%; /* 2.52rem */
  letter-spacing: 0.036rem;
`;

export default About;
