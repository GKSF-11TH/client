import React from 'react';
import styled from 'styled-components';
import gksf11_Logo from '../../assets/images/_GKSF11_로고.png';

const ArchiveItemContainer = styled.div`
  position: relative;
  width: 31.5rem;
  height: 38.8rem;
`;

const Card = styled.div`
  width: 31.5rem;
  height: 30rem;
  flex-shrink: 0;
  border: 0.1rem solid var(--Netural-40, #bbb);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #555;
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);
  }
`;

const EditionTitle = styled.h2`
  font-family: 'Syncopate', Helvetica;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.36px;
  line-height: 100%;
  color: white;
  text-align: left;
  margin-top: 3.5rem;
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ArchiveItem = ({ edition, hasLogo = false }) => {
  return (
    <ArchiveItemContainer>
      <Card>{hasLogo && <LogoImage src={gksf11_Logo} alt="GKSF Logo" />}</Card>
      <EditionTitle>{edition}</EditionTitle>
    </ArchiveItemContainer>
  );
};

export default ArchiveItem;
