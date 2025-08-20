import React from 'react';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/booth-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-gradient-bg-mobile.png';
import Card from '../components/Archiving/Card';
import ArchiveItem from '../components/Archiving/ArchiveItem';

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

  @media (max-width: 710px) {
    background-image: url('${MobileBackgroundImage}');
    background-position: center top;
  }
`;

const MainContainer = styled.main`
  width: 100vw;
  overflow: hidden;
  position: relative;
  z-index: 1;
`;

const ContentWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 155rem;

  @media (max-width: 1350px) {
    height: 150rem;
  }

  @media (max-width: 710px) {
    height: 170rem;
  }
`;

const MainContent = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1000px;
  height: 185rem;
  top: 4rem;
  left: 50%;
  transform: translateX(-50%);

  @media (max-width: 1350px) {
    max-width: 90vw;
    height: 160rem;
  }

  @media (max-width: 710px) {
    top: 6rem;
    max-width: 100%;
    height: 185rem;
  }
`;

const Heading = styled.h1`
  position: absolute;
  top: 15rem;
  left: calc(50% - 58rem);
  color: #fff;
  -webkit-text-stroke-width: 0.04rem;
  -webkit-text-stroke-color: #fff;
  font-family: Syncopate;
  font-size: 5.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.058rem;
  text-align: left;

  @media (max-width: 1350px) {
    left: calc(50% - 42rem);
    font-size: 5rem;
  }

  @media (max-width: 900px) {
    left: calc(50% - 27rem);
    font-size: 4.5rem;
  }

  @media (max-width: 710px) {
    top: 10rem;
    left: calc(50% - 17rem);
    transform: none;
    font-size: 3rem;
    letter-spacing: -0.03rem;
    text-align: left;
  }
`;

const ArchiveGrid = styled.div`
  position: absolute;
  top: 38rem;
  width: 100%;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 4.5rem;

  @media (max-width: 1350px) {
    top: 35rem;
  }

  @media (max-width: 900px) {
    top: 32rem;
  }

  @media (max-width: 710px) {
    display: none;
  }
`;

const ArchiveRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1000px;
  height: 31rem;
  align-items: center;
  justify-content: center;
  gap: 2.4rem;

  @media (max-width: 1350px) {
    max-width: 90vw;
    gap: 2rem;
  }
`;

const SecondRow = styled(ArchiveRow)``;

const ThirdRow = styled(ArchiveRow)`
  @media (max-width: 1350px) {
    /* 3열로 변경 */
    .item-4 {
      display: none;
    }
  }
`;

const ItemGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;

  &.item-4 {
    @media (max-width: 1350px) {
      display: none;
    }
  }

  &.item-3 {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const HorizontalSeparator = styled.div`
  position: absolute;
  width: 25rem;
  height: 0.1rem;
  background: #bbb;
  bottom: -1.6rem;
`;

const VerticalSeparator = styled.div`
  height: calc(100% - 1rem);
  width: 0.1rem;
  background: #bbb;
  flex-shrink: 0;
  align-self: flex-start;

  @media (max-width: 1350px) {
    height: calc(100% - 1rem);
  }

  &.separator-3rd {
    @media (max-width: 1350px) {
      display: none;
    }
  }

  &.separator-6th {
    @media (max-width: 1350px) {
      display: none;
    }
  }

  &.separator-9th {
    @media (max-width: 1350px) {
      display: none;
    }
  }

  &.separator-after-2nd {
    @media (max-width: 900px) {
      display: none;
    }
  }
`;

const ForumCardContainer = styled.div`
  position: relative;
  width: 25rem;
  height: 31rem;
`;

const ForumCard = styled.div`
  width: 25rem;
  height: 30rem;
  flex-shrink: 0;
  background-color: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: flex-start;
  align-items: flex-start;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    border-color: #555;
    box-shadow: 0 0 2rem rgba(255, 255, 255, 0.1);
  }
`;

const ForumTitle = styled.h2`
  text-align: left;
  font-family: 'Syncopate', Helvetica;
  font-size: 3.4rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.034rem;
  line-height: 100%;
  color: white;
  margin: 0;
  padding: 1.6rem;
  white-space: pre-line;
`;

// Mobile Components
const MobileArchiveGrid = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8rem;
  width: 100%;
  max-width: 300px;
  margin: 0 auto;
  padding: 0 1rem;
`;

const MobileArchiveRow = styled.div`
  position: relative;
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: center;
  gap: 4rem;
`;

const MobileItemGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.5rem;
`;

const MobileHorizontalSeparator = styled.div`
  position: absolute;
  width: 15rem;
  height: 0.1rem;
  background: #bbb;
  bottom: -6rem;
`;

const MobileVerticalSeparator = styled.div`
  position: absolute;
  height: 18.65rem;
  width: 0.1rem;
  background: #bbb;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
`;

const DesktopMain = () => {
  return (
    <MainContainer data-model-id="764:13808">
      <Background />
      <ContentWrapper>
        <MainContent>
          <Heading>
            GKSF
            <br />
            ARCHIVIING
          </Heading>
          <ArchiveGrid>
            <ArchiveRow>
              <ItemGroup className="item-1">
                <ArchiveItem edition="11th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
              <VerticalSeparator />
              <ItemGroup className="item-2">
                <ArchiveItem edition="10th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
              <VerticalSeparator className="separator-after-2nd" />
              <ItemGroup className="item-3">
                <ArchiveItem edition="9th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
              <VerticalSeparator className="separator-3rd" />
              <ItemGroup className="item-4">
                <ArchiveItem edition="8th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
            </ArchiveRow>
            <SecondRow>
              <ItemGroup className="item-1">
                <ArchiveItem edition="7th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
              <VerticalSeparator />
              <ItemGroup className="item-2">
                <ArchiveItem edition="6th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
              <VerticalSeparator className="separator-after-2nd" />
              <ItemGroup className="item-3">
                <ArchiveItem edition="5th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
              <VerticalSeparator className="separator-6th" />
              <ItemGroup className="item-4">
                <ArchiveItem edition="4th GKSF" hasLogo={true} />
                <HorizontalSeparator />
              </ItemGroup>
            </SecondRow>
            <ThirdRow>
              <ItemGroup className="item-1">
                <ArchiveItem edition="3rd GKSF" hasLogo={true} />
              </ItemGroup>
              <VerticalSeparator />
              <ItemGroup className="item-2">
                <ArchiveItem edition="2nd GKSF" hasLogo={true} />
              </ItemGroup>
              <VerticalSeparator className="separator-after-2nd" />
              <ItemGroup className="item-3">
                <ArchiveItem edition="1st GKSF" hasLogo={true} />
              </ItemGroup>
              <VerticalSeparator className="separator-9th" />
              <ItemGroup className="item-4">
                <ForumCardContainer>
                  <ForumCard>
                    <ForumTitle>
                      Global{'\n'}
                      Korean{'\n'}
                      Studies{'\n'}
                      Forum
                    </ForumTitle>
                  </ForumCard>
                </ForumCardContainer>
              </ItemGroup>
            </ThirdRow>
          </ArchiveGrid>
        </MainContent>
      </ContentWrapper>
    </MainContainer>
  );
};

const MobileMain = () => {
  return (
    <MainContainer>
      <Background />
      <ContentWrapper>
        <MainContent>
          <Heading>
            GKSF
            <br />
            ARCHIVIING
          </Heading>
          <MobileArchiveGrid style={{ marginTop: '20rem' }}>
            {/* 1행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem
                  edition="11th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem
                  edition="10th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>

            {/* 2행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem
                  edition="9th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem
                  edition="8th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>

            {/* 3행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem
                  edition="7th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem
                  edition="6th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>

            {/* 4행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem
                  edition="5th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem
                  edition="4th GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>

            {/* 5행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem
                  edition="3rd GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem
                  edition="2nd GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>

            {/* 6행 */}
            <MobileArchiveRow style={{ alignItems: 'flex-start' }}>
              <MobileItemGroup>
                <ArchiveItem
                  edition="1st GKSF"
                  hasLogo={true}
                  isMobile={true}
                />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ForumCard
                  style={{
                    width: '150px',
                    height: '190px',
                    alignItems: 'flex-start',
                    justifyContent: 'flex-start'
                  }}
                >
                  <ForumTitle
                    style={{
                      fontSize: '23.134px',
                      fontFamily: 'SF Pro',
                      fontWeight: '120',
                      letterSpacing: '-0.211px',
                      lineHeight: '100%',
                      padding: '7.821px 37.284px 70.88px 8.806px',
                      textAlign: 'left',
                      color: '#FFF'
                    }}
                  >
                    Global{'\n'} Korean{'\n'}
                    Studies{'\n'} Forum
                  </ForumTitle>
                </ForumCard>
              </MobileItemGroup>
            </MobileArchiveRow>
          </MobileArchiveGrid>
        </MainContent>
      </ContentWrapper>
    </MainContainer>
  );
};

const Archiving = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 710);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileMain /> : <DesktopMain />;
};

export default Archiving;
