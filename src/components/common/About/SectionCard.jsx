import React from 'react';
import styled from 'styled-components';
import iconAI from '../../../assets/images/GKS_AI.png';

const SectionCard = ({ title, children }) => {
  return (
    <CardWrapper>
      <TitleWrapper>
        <img src={iconAI} alt="AI Icon" />
        <h2>{title}</h2>
      </TitleWrapper>
      {children}
    </CardWrapper>
  );
};

const CardWrapper = styled.section`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  align-items: flex-start;
`;

const TitleWrapper = styled.div`
  display: flex;
  gap: 1.8rem;
  justify-content: flex-start;
  align-items: center;

  > img {
    width: calc(4.5 * 1.25rem);
    height: calc(4.5 * 1.25rem);
  }

  > h2 {
    color: var(--text-primary);
    -webkit-text-stroke-width: 0.4px;
    -webkit-text-stroke-color: #fff;
    font-family: Syncopate;
    font-size: 3.6rem;
    font-style: normal;
    font-weight: 400;
    line-height: 100%; /* 3.6rem */
    letter-spacing: -0.036rem;
  }
`;

export default SectionCard;
