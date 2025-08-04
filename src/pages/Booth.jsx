import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/booth-gradient-bg.svg';
import MobileBackgroundImage from '../assets/images/booth-gradient-bg-mobile.png';
import BoothCard from '../components/Booth/BoothCard';
import { useNavigate } from 'react-router-dom';

const CardText = [
  {
    type: 'BOOTH A',
    content:
      '기술 발전에 대한 두려움보다 더 나은 삶을 향한 가능성에 주목하며, 예술/의료/교육 분야의 문제를 AI와의 융합으로 어떻게 풀어갈 수 있을지 살펴봅니다.',
    title: 'UTOPIA',
    link: '/boothDetail/1'
  },
  {
    type: 'BOOTH B',
    content:
      'AI가 불러올 잠재적 위협과 그 본질을 직시하고 한국 사회가 나아가야 할 방향을 모색합니다.',
    title: 'DISTOPIA',
    link: '/boothDetail/2'
  },
  {
    type: 'BOOTH C',
    content:
      'AI 시대의 현실 속에서 인간다움과 주체성을 지킬 방법을 고민하며, 인간성에 대한 질문을 스스로 던져볼 수 있는 자리를 마련합니다.',
    title: 'REALITY',
    link: '/boothDetail/3'
  }
];

const Booth = () => {
  const navigate = useNavigate();
  return (
    <Container>
      <Background />
      <Content>
        <Title>BOOTH</Title>
        <CardWrapper>
          {CardText.map((card, index) => (
            <BoothCard
              key={index}
              {...card}
              onClick={() => navigate(card.link)}
            />
          ))}
        </CardWrapper>
      </Content>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem 17rem 0 17rem;

  @media (max-width: 768px) {
    padding: 5rem 2rem 8.5rem 2rem;
    overflow-y: hidden;
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
  background-position: center;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url('${MobileBackgroundImage}');
    height: 230rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 9rem 12rem 0 12rem;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 17.4rem;

  @media (max-width: 768px) {
    gap: 7.2rem;
    padding: 6.7rem 4.8rem 0 4.8rem;
  }
`;

const Title = styled.h1`
  color: var(--text-primary);
  text-align: center;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: var(--text-primary);
  font-family: Syncopate;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 3.6rem */
  letter-spacing: -0.036rem;

  @media (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 127%;
  }
`;

const CardWrapper = styled.div`
  cursor: pointer;
  width: 100%;
  padding: 0.9rem 0;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 6.6rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 7.4rem;
  }
`;

export default Booth;
