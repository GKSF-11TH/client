import React from 'react';
import styled from 'styled-components';
import { GlassEffectWithSolidBg } from '../../style/common';
import { useNavigate } from 'react-router-dom';

const BoothCard = ({ type, content, title, link }) => {
  const navigate = useNavigate();
  return (
    <Container onClick={() => navigate(link)}>
      <div>
        <TabWrapper>
          <Tab>{type}</Tab>
        </TabWrapper>
        <Content>{content}</Content>
      </div>
      <Title>{title}</Title>
    </Container>
  );
};

const Container = styled(GlassEffectWithSolidBg)`
  cursor: pointer;
  transition:
    transform 0.5s ease,
    opacity 0.5s ease;

  &::after {
    border-radius: 50px;
    background: var(--Background-Glass, rgba(16, 16, 16, 0.4));
    transition:
      background 0.5s ease,
      /* filter 1s ease, */ opacity 0.5s ease;
  }

  display: flex;
  flex-direction: column;
  padding: 1.53rem 1.74rem 2.6rem 1.74rem;
  justify-content: space-between;
  border-radius: 1.6212rem;
  overflow: hidden;

  &::after,
  &::before {
    border-radius: 1.6212rem;
  }

  > div {
    display: flex;
    flex-direction: column;
    gap: 2.55rem;
  }

  &:hover {
    transform: scale(1.1);

    &::after {
      background: linear-gradient(
        89deg,
        rgba(16, 212, 141, 0.6) 5.4%,
        rgba(34, 106, 223, 0.6) 40.92%,
        rgba(19, 61, 231, 0.6) 73.07%,
        rgba(84, 25, 234, 0.6) 95.62%
      ); /* opacity를 주려면 rgba로 */
      filter: blur(66px); /* background-filter 대신 filter */
      opacity: 0.8; /* 배경 투명도 추가 */
    }
  }
`;

const TabWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const Tab = styled(GlassEffectWithSolidBg)`
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-primary);
  text-align: center;
  -webkit-text-stroke-width: 0.11px;
  -webkit-text-stroke-color: var(--text-primary);
  font-family: 'SF Pro';
  font-size: 0.9727rem;
  font-style: normal;
  font-weight: 300;
  line-height: 130%; /* 1.2645rem */
  letter-spacing: 0.0195rem;

  display: flex;
  width: 7.6427rem;
  height: 2.9181rem;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  border-radius: 2.5rem;
`;

const Content = styled.p`
  color: var(--text-tertiary);
  font-family: 'IBM Plex Mono';
  font-size: 1.3rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 1.82rem */
  letter-spacing: 0.013rem;

  margin-right: 6.7rem;
  width: 13.3rem;
  height: 18rem;
`;

const Title = styled.h2`
  color: #fff;
  -webkit-text-stroke-width: 0.14px;
  -webkit-text-stroke-color: #fff;
  font-family: 'Syncopate';
  font-size: 3.4045rem;
  font-style: normal;
  font-weight: 120;
  line-height: 100%; /* 3.4045rem */
  letter-spacing: -0.034rem;
`;

export default BoothCard;
