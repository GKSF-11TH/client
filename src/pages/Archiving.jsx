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
  width: 100%;
  height: 199.3rem;

  @media (max-width: 768px) {
  height: 165.3rem;
  }
`;

const MainContent = styled.div`
  position: absolute;
  width: 100%;
  max-width: 1200px;
  height: 224.3rem;
  top: 5rem;
  left: 50%;
  transform: translateX(-50%);
`;

const Heading = styled.h1`
  position: absolute;
  top: 18.8rem;
  left: calc(50% - 720px);
  color: #fff;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: #fff;
  font-family: Syncopate;
  font-size: 7.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.72px;
  text-align: left;

  @media (max-width: 768px) {
    top: 7.5rem;
    left: 4rem;
    font-size: 3rem;
    letter-spacing: -0.3px;
  }
`;

const ArchiveGrid = styled.div`
  position: absolute;
  width: 100%;
  height: 216.6rem;
  top: 47.7rem;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 5.5rem;
`;

const ArchiveRow = styled.div`
  display: flex;
  width: 100%;
  max-width: 1200px;
  height: 38.8rem;
  align-items: center;
  justify-content: center;
  gap: 2.9rem;
`;

const SecondRow = styled(ArchiveRow)``;
const ThirdRow = styled(ArchiveRow)``;

const ItemGroup = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 0.2rem;
`;

const HorizontalSeparator = styled.div`
  position: absolute;
  width: 31.5rem;
  height: 0.1rem;
  background: #bbb;
  bottom: -2rem;
`;

const VerticalSeparator = styled.div`
  height: calc(100% - 1rem);
  width: 0.1rem;
  background: #bbb;
  flex-shrink: 0;
  align-self: flex-start;
`;

const ForumCardContainer = styled.div`
  position: relative;
  width: 31.5rem;
  height: 38.8rem;
`;

const ForumCard = styled.div`
  width: 31.5rem;
  height: 38rem;
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
  font-size: 4.2rem;
  font-style: normal;
  font-weight: 400;
  letter-spacing: -0.42px;
  line-height: 100%;
  color: white;
  margin: 0;
  padding: 2rem;
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
  width: 150px;
  height: 0.1rem;
  background: #bbb;
  bottom: -6rem;
`;

const MobileVerticalSeparator = styled.div`
  position: absolute;
  height: 186.5px;
  width: 0.1rem;
  background: #bbb;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
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
                <ItemGroup>
                  <ArchiveItem edition="11st GKSF" hasLogo={true} />
                  <HorizontalSeparator />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="10th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="9th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="8th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
              </ArchiveRow>
              <SecondRow>
                <ItemGroup>
                  <ArchiveItem edition="7th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="6th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="5th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="4th GKSF" />
                  <HorizontalSeparator />
                </ItemGroup>
              </SecondRow>
              <ThirdRow>
                <ItemGroup>
                  <ArchiveItem edition="3rd GKSF" />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="2nd GKSF" />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
                  <ArchiveItem edition="1st GKSF" />
                </ItemGroup>
                <VerticalSeparator />
                <ItemGroup>
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
      <Footer />
    </MainContainer>
  );
};

const MobileMain = () => {
  return (
    <MainContainer>
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
                <ArchiveItem edition="11st GKSF" hasLogo={true} isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem edition="10th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>
            
            {/* 2행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem edition="9th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem edition="8th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>
            
            {/* 3행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem edition="7th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem edition="6th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>
            
            {/* 4행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem edition="5th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem edition="4th GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>
            
            {/* 5행 */}
            <MobileArchiveRow>
              <MobileItemGroup>
                <ArchiveItem edition="3rd GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
              <MobileVerticalSeparator />
              <MobileItemGroup>
                <ArchiveItem edition="2nd GKSF" isMobile={true} />
                <MobileHorizontalSeparator />
              </MobileItemGroup>
            </MobileArchiveRow>
            
                         {/* 6행 */}
             <MobileArchiveRow style={{ alignItems: 'flex-start' }}>
               <MobileItemGroup>
                 <ArchiveItem edition="1st GKSF" isMobile={true} />
               </MobileItemGroup>
               <MobileVerticalSeparator />
               <MobileItemGroup>
                                                                                                                                           <ForumCard style={{ width: '150px', height: '190px', alignItems: 'flex-start', justifyContent: 'flex-start' }}>
                     <ForumTitle style={{ 
                       fontSize: '23.134px', 
                       fontFamily: 'SF Pro',
                       fontWeight: '120',
                       letterSpacing: '-0.211px',
                       lineHeight: '100%',
                       padding: '7.821px 37.284px 70.88px 8.806px',
                       textAlign: 'left',
                       color: '#FFF'
                     }}>
                       Global{'\n'} Korean{'\n'}
                       Studies{'\n'} Forum
                     </ForumTitle>
                   </ForumCard>
               </MobileItemGroup>
             </MobileArchiveRow>
          </MobileArchiveGrid>
        </MainContent>
      </ContentWrapper>
      <Footer />
    </MainContainer>
  );
};

const Archiving = () => {
  const [isMobile, setIsMobile] = React.useState(false);

  React.useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile);

    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  return isMobile ? <MobileMain /> : <DesktopMain />;
};

export default Archiving;
