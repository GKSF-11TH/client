import React from 'react';
import styled from 'styled-components';
import { useNavigate } from 'react-router-dom';
import gksf11_Logo from '../../assets/images/_GKSF11_로고.png';

const ArchiveItemContainer = styled.div`
  position: relative;
  width: ${(props) => (props.$isMobile ? '15rem' : '25rem')};
  height: ${(props) => (props.$isMobile ? '14.3rem' : '31rem')};
`;

const Card = styled.div`
  width: ${(props) => (props.$isMobile ? '15rem' : '25rem')};
  height: ${(props) => (props.$isMobile ? '14.3rem' : '23.8rem')};
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
  font-family: ${(props) =>
    props.$isMobile
      ? 'SF Pro Display, SF Pro, -apple-system, BlinkMacSystemFont, sans-serif'
      : 'Syncopate, Helvetica'};
  font-size: ${(props) => (props.$isMobile ? '1.7rem' : '2.8rem')};
  font-style: normal;
  font-weight: ${(props) => (props.$isMobile ? '500' : '400')};
  letter-spacing: ${(props) => (props.$isMobile ? '-0.15rem' : '-0.36px')};
  line-height: ${(props) => (props.$isMobile ? '1.4' : '100%')};
  color: white;
  text-align: left;
  margin-top: ${(props) => (props.$isMobile ? '1.5rem' : '2.8rem')};
`;

const LogoImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const ArchiveItem = ({ edition, hasLogo = false, isMobile = false }) => {
  const navigate = useNavigate();

  const formatEdition = (text) => {
    if (!isMobile) return text;

    // "11st GKSF" -> "11st GKSF" (st만 소문자로 유지, GKSF는 대문자)
    return text.replace(/(\d+)(st|nd|rd|th)/gi, (match, number, suffix) => {
      return number + suffix.toLowerCase();
    });
  };

  const handleClick = () => {
    // edition에서 숫자 부분만 추출 (예: "11st GKSF" -> "11")
    const editionNumber = edition.match(/(\d+)/)?.[1];
    if (editionNumber) {
      navigate(`/archiving/${editionNumber}`);
    }
  };

  return (
    <ArchiveItemContainer $isMobile={isMobile}>
      <Card $isMobile={isMobile} onClick={handleClick}>
        {hasLogo && <LogoImage src={gksf11_Logo} alt="GKSF Logo" />}
      </Card>
      <EditionTitle $isMobile={isMobile}>{formatEdition(edition)}</EditionTitle>
    </ArchiveItemContainer>
  );
};

export default ArchiveItem;
