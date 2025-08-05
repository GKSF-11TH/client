import React from 'react';
import styled from 'styled-components';
import Card from '../components/Archiving/Card';
import ArchiveItem from '../components/Archiving/ArchiveItem';
import Footer from '../components/common/Footer';

const MainContainer = styled.main`
  width: 100%;
  overflow: hidden;
  position: relative;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 146.4rem;
  height: 239.3rem;
  left: 50%;
  transform: translateX(-50%);
`;

const MainContent = styled.div`
  position: absolute;
  width: 110rem;
  height: 224.3rem;
  top: 5rem;
  left: 19.4rem;
`;

const Heading = styled.h1`
  position: absolute;
  top: 18.8rem;
  left: 2rem;
  color: #fff;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: #fff;
  font-family: Syncopate;
  font-size: 7.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.72px;
`;

const ArchiveGrid = styled.div`
  position: absolute;
  width: 110rem;
  height: 216.6rem;
  top: 47.7rem;
  left: 0;
  background-size: 100% 100%;
`;

const ArchiveRow = styled.div`
  display: flex;
  width: 106.2rem;
  height: 38.8rem;
  align-items: center;
  gap: 2.9rem;
  position: absolute;
  top: 2rem;
  left: 2rem;
`;

const SecondRow = styled(ArchiveRow)`
  top: 46.6rem;
`;

const ThirdRow = styled.div`
  position: absolute;
  width: 106.2rem;
  height: 44.8rem;
  top: 88.2rem;
  left: 1.9rem;
`;

const ThirdRowContent = styled.div`
  display: flex;
  width: 106.2rem;
  height: 38.8rem;
  align-items: center;
  gap: 2.9rem;
  position: absolute;
  top: 3rem;
  left: 0;
`;

const FourthRow = styled(ArchiveRow)`
  top: 135.8rem;
`;

const HorizontalSeparator = styled.div`
  position: absolute;
  width: 31.5rem;
  height: 0.1rem;
  background: #bbb;
  top: ${({ $top }) => $top || '0rem'};
  left: ${({ $left }) => $left || '0rem'};
`;

const VerticalSeparator = styled.div`
  height: 38.8rem;
  width: 0.1rem;
  background: #bbb;
`;

const ForumCard = styled(Card)`
  position: relative;
  width: 31.5rem;
  height: 38.8rem;
  background-color: rgba(255, 255, 255, 0.1);
  border: none;
`;

const ForumTitle = styled.h2`
  position: absolute;
  top: 2.5rem;
  left: 2.3rem;
  font-family: 'Syncopate', Helvetica;
  font-size: 4.2rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.42px;
  line-height: 100%;
  color: white;
`;

const DesktopMain = () => {
  return (
    <MainContainer data-model-id="764:13808">
      <ContentWrapper>
        <MainContent>
          <Heading>
            GKSF
            <br />
            ARCHIVIING
          </Heading>
          <ArchiveGrid>
            <ArchiveRow>
              <ArchiveItem edition="11st GKSF" hasLogo={true} />
              <HorizontalSeparator $top="41rem" $left="0rem" />
              <VerticalSeparator></VerticalSeparator>
              <ArchiveItem edition="10th GKSF" />
              <HorizontalSeparator $top="41rem" $left="37.5rem" />
              <VerticalSeparator></VerticalSeparator>
              <ArchiveItem edition="9th GKSF" />
              <HorizontalSeparator $top="41rem" $left="74.6rem" />
            </ArchiveRow>
            <SecondRow>
              <ArchiveItem edition="8th GKSF" />
              <HorizontalSeparator $top="41rem" $left="0rem" />
              <VerticalSeparator></VerticalSeparator>
              <ArchiveItem edition="7th GKSF" />
              <HorizontalSeparator $top="41rem" $left="37.5rem" />
              <VerticalSeparator></VerticalSeparator>
              <ArchiveItem edition="6th GKSF" />
              <HorizontalSeparator $top="41rem" $left="74.6rem" />
            </SecondRow>
            <ThirdRow>
              <ThirdRowContent>
                <ArchiveItem edition="5th GKSF" />
                <HorizontalSeparator $top="41rem" $left="0rem" />
                <VerticalSeparator></VerticalSeparator>
                <ArchiveItem edition="4th GKSF" />
                <HorizontalSeparator $top="41rem" $left="37.5rem" />
                <VerticalSeparator></VerticalSeparator>
                <ArchiveItem edition="3rd GKSF" />
                <HorizontalSeparator $top="41rem" $left="74.6rem" />
              </ThirdRowContent>
            </ThirdRow>
            <FourthRow>
              <ArchiveItem edition="2nd GKSF" />
              <VerticalSeparator></VerticalSeparator>
              <ArchiveItem edition="1st GKSF" />
              <VerticalSeparator></VerticalSeparator>
              <ForumCard>
                <ForumTitle>
                  Global
                  <br />
                  Korean
                  <br />
                  Studies
                  <br />
                  Forum
                </ForumTitle>
              </ForumCard>
            </FourthRow>
          </ArchiveGrid>
        </MainContent>
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

export default DesktopMain;
