import styled, { keyframes } from 'styled-components';

export const LandingWrapper = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  overflow-x: hidden;
  background-color: var(--background-primary);
`;

export const IntroOverlay = styled.div`
  position: absolute;
  top: 16.875rem;
  left: 15%;
  z-index: 10;
  width: 66.25rem;
  transition: opacity 0.8s ease, transform 0.8s ease, filter 0.8s ease;

  &.stage-0 {
    opacity: 1;
    filter: blur(0px);
    transform: translateY(0px);
  }

  &.stage-1 {
    opacity: 0.2;
    filter: blur(2px);
    transform: translateY(-20px);
  }

  &.stage-2 {
    opacity: 0;
    filter: blur(2px);
    transform: translateY(-50px);
  }

  @media (max-width: 768px) {
    top: 60%;
    left: 5%;
    max-width: 90%;
  }
`;

export const LogoVertical = styled.div`
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
  writing-mode: vertical-rl;
  transform: rotate(180deg);
  font-size: 3.375rem;
  letter-spacing: -0.0225rem;
  margin-bottom: 10px;
  color: var(--Text-Primary);

  @media (max-width: 768px) {
    font-size: 2.5rem;
  }

`;

export const MainTitle = styled.h1`
  position: absolute;
  font-size: 6.75rem;
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.045rem;
  margin-bottom: 30px;
  color: var(--Text-Primary);

  @media (max-width: 768px) {
    font-size: 4.5rem;
  }
`;

export const IntroText = styled.div`
  position: absolute;
  bottom: 53%;
  right: 15%;
  max-width: 48rem;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-style: normal;
  font-size: 1.5rem;
  line-height: 160%;
  color: var(--Text-Primary);
  z-index: 20;
  transition: opacity 0.8s ease, transform 0.8s ease;

   
    &.stage-0 {
    opacity: 0;
    transform: translateY(30px);
    filter: blur(10px);
  }

  
  &.stage-1 {
    opacity: 1;
    transform: translateY(0px);
    filter: blur(0px);
  }


  &.stage-2 {
    opacity: 0;
    transform: translateY(-30px);
    filter: blur(2px);
  }

  p {
    margin: 0;
  }

  @media (max-width: 768px) {
    top: 60%;
    left: 5%;
    right: 5%;
    font-size: 1.5rem;
    text-align: right;
  }
`;

export const GksAiContainer = styled.div`
  position: fixed;
  bottom: 6rem;
  left: 6rem;
  z-index: 5000;


  @media (max-width: 768px) {
    opacity: 0;
  }
`;

export const GksAiPill = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50px;
  padding: 12px 15px 12px 12px;
  display: flex;
  align-items: center;
  gap: 8px;
  transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1); 
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  width: fit-content;
  min-width: 120px;
  height: 52px;
  transform: translateZ(0);
  will-change: width, padding, background, border, box-shadow; 
  
  ${props => props.isExpanded && `
    padding: 12px 20px 12px 12px;
    background: rgba(255, 255, 255, 0.15);
    border: 1px solid rgba(255, 255, 255, 0.3);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    gap: 12px;
  `}
`;

export const GksAiText = styled.div`
  color: white;
  font-family: 'IBM Plex Mono';
  font-weight: 500;
  font-style: normal;
  font-size: 16px;
  white-space: nowrap;
  transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1); 
  letter-spacing: 0.5px;
  transform: translateZ(0);
  will-change: font-size, font-weight; 
  
  ${props => props.isExpanded && `
    font-size: 16px;

  `}
`;

export const Orb = styled.div`
  width: 3.3rem,;
  height: 3.3rem;
  border-radius: 50%;
  flex-shrink: 0;
  margin-left: 0;
  transition: all 1.5s cubic-bezier(0.23, 1, 0.32, 1); 
  transform: translateZ(0);
`;


export const MainThemeContainer = styled.div`
  position: relative;
  width: 100%;
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;

  @media (max-width: 768px) {

  }
`;

export const MainThemeContent = styled.div`
  position: relative;
  z-index: 10;
  max-width: 1200px;
  width: 100%;
  padding: 4rem 2rem;
  color: var(--Text-Primary);
  text-align: center;
  
`;

export const MainThemeTitle = styled.h1`
  font-size: 3.375rem;
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--Text-Primary);
  text-align: left;
  margin-top: 3rem;
  margin-left: 8rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 2.5rem;
  }
`;

export const MainThemeSubtitle = styled.h2`
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 300;
  margin-bottom: 1rem;
  color: var(--Text-Primary);
  margin-left: 8rem;
  text-align: left;
  line-height: 1.4;

  @media (max-width: 768px) {
    margin-bottom: 1rem;
    margin-left: 1rem;
    font-size: 1.3rem;
  }
`;

export const MainThemeButton = styled.button`
  position: absolute;
  right: 10rem;
  top: 10%;
  background-color: var(--background-tertiary);
  color: var(--Text-Primary);
  border: 1px solid #fff;
  padding: 1.125rem 1.875rem;
  font-family: 'SF Pro';
  font-size: 1.6875rem;
  font-weight: 400;
  border-radius: 0.75rem;
  cursor: pointer;
  transition: all 0.3s ease;
  margin-bottom: 4rem;

  &:hover {
    background-color: #444444;
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    right: 2rem; 
    top: auto;
    margin-bottom: 0rem;
    bottom: 0rem; 
    font-size: 1.2rem;
    padding: 0.9rem 1.5rem;
    margin-right: 1rem;
  }
`;

export const MainThemeSection = styled.div`
  text-align: left;
  margin-bottom: 2rem;
  max-width: 100rem;
  margin-left: auto;
  margin-right: auto;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(20px);
  border: 1.5px solid rgba(255, 255, 255, 0.1);
  border-radius: var(--radius-l);
  padding: 2.25rem 3.375rem;
  transition: all 0.8s ease;
  transform: translateY(50px) scale(0.8);
  opacity: 0;

  &.visible {
    transform: translateY(0) scale(1);
    opacity: 1;
  }

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-5px) scale(1.02);
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem); 
    padding: 2rem;
    margin: 0 auto 1.5rem; 

    &.visible {
    transition: all 0.5s ease;
    transform: translateY(0px) scale(1);
    opacity: 1;
  }
  }
`;

export const MainThemeSectionTitle = styled.h3`
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--Text-Primary);

  @media (max-width: 768px) {
    font-size: 1.5rem;

  }
  
`;

export const MainThemeSectionContent = styled.div`
  font-size: 1.5rem;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  line-height: 140%;
  color: var(--Text-Primary);


  @media (max-width: 768px) {
    font-size: 1.0rem;
    line-height: 160%;

  }
`;


export const IntroVideoSection = styled.div`
  background-color: var(--background-primary);
  min-height: 100vh;
  width: 100%;
  position: relative;
  z-index: 200;
  display: flex;
  justify-content: center;   
  align-items: flex-start;    
`;

export const IntroVideoBox = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 0;
  text-align: left;
  
  @media (max-width: 768px) {
    margin-top: 10rem;
  }

`;

export const VideoTitle = styled.div`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;
  padding: 4rem 2rem;

  @media (max-width: 768px) {
    /* margin-left: 1rem; */
  }
`;

export const IntroVideoTitle = styled.h1`
  font-size:  3.375rem;
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
  margin-bottom: 1rem;
  color: var(--text-primary);
  text-align: left;             
  margin-top: 3rem;
  margin-left: 8rem;

  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 2.5rem;
  }
`;

export const IntroVideoSubtitle = styled.p`
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 300;
  color: var(--text-primary);
  text-align: left; 
  margin-left: 8rem;

  
  @media (max-width: 768px) {
    margin-left: 1rem;
    font-size: 1.3rem;
  }
`;

export const VideoBox = styled.h1`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 400;
  color: var(--text-primary);
  text-align: center;


  @media (max-width: 768px) {
    font-size: 1.3rem;
  }
`;


const floatUpDown1 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(-30px); }
  100% { transform: translateY(0); }
`;
const floatUpDown2 = keyframes`
  0% { transform: translateY(0); }
  50% { transform: translateY(30px); }
  100% { transform: translateY(0); }
`;

export const OrbBg1 = styled.img`
  position: absolute;
  top: 10%;
  right: -10%;
  transform: translateX(-50%);
  width: 120%;
  opacity: 1;
  z-index: -10;
  animation: ${floatUpDown1} 4s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 10%;
    width: 120%;
  }
`;

export const OrbBg2 = styled.img`
  position: absolute;
  top: 0%;
  left: -10%;
  transform: translateX(-50%);
  width: 120%;
  opacity: 1;
  z-index: -10;
  animation: ${floatUpDown2} 6s ease-in-out infinite;
  pointer-events: none;

  @media (max-width: 768px) {
    top: 0%;
    width: 120%;
  }
`;

export const Bg = styled.img`
  position: absolute;
  top: 10%;
  right: 25%;
  width: 75rem;
  opacity: 0.8;
  z-index: 1;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 50rem;
    right: -15%;
    top: 30%;
  }
`;
export const BoothAndSessionWrapper = styled.div`
  min-height: 100vh;
  width: 100%;
  background-color: var(--background-primary);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start; 
  position: relative;
  overflow: hidden;
  padding: 0 0 2rem 0;        
  z-index: 400;
`;

export const BoothAndSessionHeader = styled.div`
  position: relative;
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 4rem 2rem;
  z-index: 10;
  text-align: left;

  @media (max-width: 768px) {
    padding: 0;
  }
`;



export const BoothAndSessionTitle = styled.h1`
  font-size: 3.375rem; 
  font-family: 'Syncopate', sans-serif;
  font-weight: 400;
  color: var(--Text-Primary);
  margin-bottom: 1rem;
  letter-spacing: -0.0225rem;
  margin-top: 3rem; 
  margin-left: 8rem;

  
  @media (max-width: 768px) {
    font-size: 2.5rem;
    margin-left: 3rem;
  }
`;


export const BoothAndSessionSub = styled.p`
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 300;
  color: var(--Text-Primary);
  margin-bottom: 2rem;
  margin-left: 8rem;


  @media (max-width: 768px) {
    text-align: left;
    font-size: 1.3rem;
    margin-left: 3rem;
  }
`;


export const BoothAndSessionCardRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 4rem;
    margin-top: 2rem;
  }
`;

export const BoothAndSessionFooter = styled.div`
  color: #bbb;
  font-size: 1rem;
  margin-top: 3rem;
  text-align: center;
`;


export const CardContainer = styled.div`
  width: 21rem;
  height: 28rem;
  cursor: pointer;
  position: relative;
  transition: transform 0.5s;
  z-index: 10;

  &:hover {
    scale: 1.15;
    transition: all 0.5s ease;

  }

  @media (max-width: 768px) {
    width: 16rem;
    height: 22rem;
  }
`;

export const Card3D = styled.div`
  width: 100%;
  height: 100%;
  position: relative;
  transition: transform 0.7s;
  transform-style: preserve-3d;
  &.rotate-y-180 {
    transform: rotateY(180deg);
  }
`;

export const CardFace = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  backface-visibility: hidden;
  background: linear-gradient(90deg, #121212 0%, rgba(18,18,18,0) 100%);
  border-radius: 20px;
  overflow: hidden;
  box-shadow: 0 4px 32px rgba(0,0,0,0.2);
`;


export const CardBack = styled(CardFace)`
  background: 
    url('/src/assets/images/GKSF_AI.svg'); 
  color: #fff;
  transform: rotateY(180deg);
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
`;




const useResponsive = () => {
  const [isMobile, setIsMobile] = useState(false);
  
  useEffect(() => {
    const checkDevice = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    checkDevice();
    window.addEventListener('resize', checkDevice);
    return () => window.removeEventListener('resize', checkDevice);
  }, []);
  
  return { isMobile };
};


export const InfoWrapper = styled.section`
  position: relative;
  background-color: var(--background-primary);
  width: 100%;
  min-height: 300vh;
  padding: 4rem 0 0 0;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 500;

  @media (max-width: 768px) {
    min-height: 500vh;

  }
`;

export const InfoTop = styled.div`
  text-align: center;
  margin-bottom: 2.5rem;
  z-index: 2;

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 2rem;
    margin-bottom: 4rem;
    width: 100%;
  }
`;

export const InfoTitle = styled.h1`
  font-size: 3.375rem;
  color: var(--text-primary);
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
  letter-spacing: -0.0225rem;

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 2rem;
    font-size: 2.5rem;
  }
`;

export const InfoSubtitle = styled.div`
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 300;
  color: var(--text-primary);
  margin-top: 1rem;

  @media (max-width: 768px) {
    text-align: left;
    margin-left: 2rem;
    font-size: 1.3rem;
  }
`;

export const InfoCardRow = styled.div`
  display: flex;
  gap: 2rem;
  justify-content: center;
  margin-bottom: 3rem;
  z-index: 2;

  @media (max-width: 768px) {
    flex-direction: column;
    align-items: center;
    gap: 1.5rem;
    width: 100%;
    max-width: 350px;
    margin-bottom: 6rem;
  }
`;

export const InfoCard = styled.div`
  background: var(--Background-Glass);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 18px;
  box-shadow: 0 4px 32px rgba(0,0,0,0.18);
  width: 30rem;  
  height: 20rem;
  padding: 3rem;
  margin-top: 6rem;
  color: #fff;
  font-size: 1rem;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.15);
    transform: translateY(-2px);
  }

  > div:first-child {
    font-family: 'SF Pro';
    font-weight: 500;
    font-size: 1.687rem;
    position: absolute;     
    top: 3rem;            
    left: 3rem;         
    margin: 0;
  }

  > div:last-child {
    font-family: 'IBM Plex Mono';
    font-weight: 400;
    font-size: 1.25rem;
    line-height: 1.6;
    text-align: center;
  }

  @media (max-width: 768px) {
    width: calc(100% - 2rem); 
    height: 21rem;
    padding: 4rem;
    margin-top: 0;
    border-radius: 15px;

    

    > div:first-child {
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }

    > div:last-child {
      font-size: 1.2rem;
      line-height: 1.4;
    }
  }
`;


export const InfoOrbBg = styled.img`
  position: absolute;
  left: ${({ $leftPercent }) => ($leftPercent !== undefined ? `${$leftPercent}%` : '40%')};
  top: ${({ $topPx }) => ($topPx !== undefined ? `${$topPx}px` : '220px')};
  width: ${({ $widthPercent }) => ($widthPercent !== undefined ? `${$widthPercent}%` : '140%')};
  transform: translateX(-50%) translateY(${({ $translateY }) => ($translateY !== undefined ? `${$translateY}px` : '0px')})
    scale(${({ $scale }) => ($scale !== undefined ? $scale : 1)});
  opacity: ${({ $opacity }) => ($opacity !== undefined ? $opacity : 0.95)};
  z-index: 1;
  filter: blur(0.5px);
  pointer-events: none;
  user-select: none;
  transition: transform 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              top 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              left 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              width 0.3s cubic-bezier(0.25, 0.46, 0.45, 0.94), 
              opacity 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94);
  will-change: transform, top, left, width, opacity;

  @media (max-width: 768px) {
    margin-top: 48rem;
    width: 280%;
  }

`;

export const InfoContent = styled.div`
  position: relative;
  z-index: 2;
  color: var(--Text-Secondary);
  max-width: 700px;
  margin: 50rem auto;
  padding: 4rem 2rem 2rem 2rem;
  left: -10rem;
  text-align: left;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    max-width: 90%;
    margin: 15rem auto;
    padding: 2rem 1rem;
    left: 0;
    font-size: 1rem;
  }
`;

export const InfoAnchorArea = styled.div`
  position: absolute;
  bottom: 40rem;
  left: 0;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 3;

  @media (max-width: 768px) {
    bottom: 15rem;
  }
`;

export const InfoAnchorCard = styled.div`
  width: 70%;
  min-height: 20rem;
  border-radius: 20px;
  background: rgba(255, 255, 255, 0.015);
  border: 1px solid rgba(255, 255, 255, 0.12);
  backdrop-filter: blur(4px);
  color: #fff;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 2rem;
  padding: 3.5rem 3rem 3rem 3rem;
  width: 80.25rem;
  transition: all 0.3s ease;
  position: relative;
  
  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    width: 34rem;
    height: 51rem;
    flex-direction: column;
    padding: 2.5rem 2rem;
    min-height: 200px;
    text-align: center;
  }
`;

export const InfoAnchorText = styled.div`
  position: absolute;
  top: 20%;
  left: 5%;
  text-align: left;
  color: var(--Text-Secondary);
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 1.3rem;
  line-height: 140%;

  @media (max-width: 768px) {
    margin-top: 30rem;
    position: static;
    text-align: center;
    font-size: 1.2;
    margin-bottom: 2rem;

    > div:first-child {
      font-family: 'SF Pro';
      font-weight: 500;
      font-size: 1.5rem;
      margin-bottom: 1rem;
    }
  }
`;

export const InfoAnchorButton = styled.button`
  position: absolute;
  right: 5%;
  bottom: 20%;
  background: rgba(255,255,255,0.1);
  color: #fff;
  padding: 0.75rem 1.25rem;
  border-radius: 10px;
  border: 1px solid rgba(255,255,255,0.18);
  cursor: pointer;
  font-weight: 500;
  white-space: nowrap;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255,255,255,0.15);
    border-color: rgba(255,255,255,0.25);
    transform: translateY(-1px);
  }

  @media (max-width: 768px) {
    position: static;
    padding: 1.5 2rem;
    font-size: 1.2rem;
  }
`;

export const InfoAnchorOrb = styled.img`
  position: absolute;
  bottom: 2.5rem;
  left: 50%;
  transform: translateX(-50%);
  width: 220px;
  z-index: 2;
  pointer-events: none;

  @media (max-width: 768px) {
    width: 120px;
    bottom: 0rem;
  }
`;

export const GuestBookSection = styled.section`
  background-color: var(--background-primary);
  width: 100%;
  min-height: 120vh;
  padding: 6rem 0 20rem 0;
  position: relative;
  z-index: 600;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 768px) {
    padding: 4rem 0 6rem 0;
    min-height: auto;
  }
`;

export const GuestBookHeader = styled.div`
  position: absolute;
  top: 15%;
  text-align: center;
  margin-bottom: 2.5rem;

  @media (max-width: 768px) {
    position: static;
    margin-bottom: 3rem;
  
    padding: 0 1rem;
  }
`;

export const GuestBookTitle = styled.h2`
  font-size: 3.375rem;
  color: var(--text-primary);
  font-family: "Syncopate", sans-serif;
  font-weight: 400;
  letter-spacing: -0.0225rem;

  @media (max-width: 768px) {
    margin-left: -2rem;
    font-size: 2.5rem;
    text-align: left;
  }
`;

export const GuestBookSubtitle = styled.p`
  font-size: 1.875rem;
  font-family: 'SF Pro', sans-serif;
  font-weight: 300;
  color: var(--text-primary);
  margin-top: 1rem;

  @media (max-width: 768px) {
    margin-left: -2rem;
    font-size: 1.3rem;
    text-align: left;
  }
`;

export const GuestBookGrid = styled.div`
  position: absolute;
  top: 28%;
  width: 100%;
  max-width: 1000px;
  padding: 0 2rem;
  display: flex;
  flex-wrap: wrap;
  gap: 1rem;
  justify-content: center;
  align-items: flex-start;
  margin-top: 0rem;


  @media (max-width: 1024px) {
    max-width: 900px;
    gap: 1rem;
  }

  @media (max-width: 768px) {
    position: static;
    flex-direction: column;
    max-width: 100%;
    padding: 0 1rem;
    gap: 1.5rem;
    align-items: center;
    margin-top: 0;
  }

  @media (max-width: 640px) {
    gap: 1rem;
  }
`;


export const GuestBookCard = styled.div`
  position: relative;
  background: rgba(255,255,255,0.04);
  border: 1px solid rgba(255,255,255,0.08);
  border-radius: 16px;
  padding: 2rem 1.75rem;
  color: #e6e6e6;
  min-height: 160px;
  width: 27rem;
  height: 18rem;
  overflow: hidden;
  transition: transform 0.25s ease, border-color 0.25s ease;
  box-shadow: 0 6px 30px rgba(0,0,0,0.25);

  &:before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(89deg, #10D48D 5.4%, #226ADF 40.92%, #133DE7 73.07%, #5419EA 95.62%);
    filter: blur(66px);
    opacity: 0;
    transition: opacity 0.35s ease;
    pointer-events: none;
    border-radius: 16px;
  }

  &:hover {
    border-color: rgba(255,255,255,0.2);
  }

  &:hover:before {
    opacity: 0.7;
  }

  &:nth-child(3n+1),
  &:nth-child(3n) {
    transform: translateY(3rem);
  }

  @media (max-width: 768px) {
    width: 100%;
    max-width: 34rem;
    height: auto;
    min-height: 140px;
    padding: 1.5rem;
    transform: none !important;

    
    &.active {
      border-color: rgba(255,255,255,0.2);

      &:before {
        opacity: 0.7;
      }
    }
  }
`;

export const GuestBookCardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 0.75rem;
`;

export const GuestBookName = styled.span`
  font-family: 'SF Pro';
  font-weight: 400;
  color: var(--text-primary);
  color: #ffffff;
  font-size: 1.25rem;

  @media (max-width: 768px) {
    font-size: 1.1rem;
  }
`;

export const GuestBookRole = styled.span`
  font-family: 'SF Pro';
  font-weight: 300;
  color: var(--Text-Tertiary);
  font-size: 0.9rem;

  @media (max-width: 768px) {
    font-size: 0.8rem;
  }
`;

export const GuestBookText = styled.p`
  margin: 0;
  color: var(--Text-Secondary);
  line-height: 140%;
  font-family: 'IBM Plex Mono';
  font-weight: 400;
  font-size: 0.95rem;

  @media (max-width: 768px) {
    font-size: 0.9rem;
    line-height: 150%;
  }
`;
