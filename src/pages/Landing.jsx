import React, { useEffect, useState } from 'react';
import { LandingWrapper, GksAiContainer, GksAiPill, Orb, GksAiText } from '../style/LandingStyle';
import ParticleGlobe from '../components/Landing/particleGlobe';
import IntroOverlayComponent from '../components/Landing/introOverlay';
import MainTheme from '../components/Landing/mainTheme';
import VideoSection from '../components/Landing/videoSection';
import BoothAndSession from '../components/Landing/boothAndSession';
import Info from '../components/Landing/info'
import GuestBook from '../components/Landing/guestBook';

const Landing = () => {
  const [hideIntro, setHideIntro] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  // const [isExpanded, setIsExpanded] = useState(false);
  const [currentSection, setCurrentSection] = useState('intro');
  

 
  const sectionTexts = {
    intro: 'GKS AI',
    welcome: 'Welcome to 11th GKSF!',
    mainTheme: 'Explore Main Themes',
    video: 'Watch Our Journey',
    booth: 'Visit Booths & Sessions',
    info: 'Get More Information',
    guestbook: 'Leave Your Message'
  };

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      setScrollY(currentScrollY);
      setHideIntro(currentScrollY > 30);

     
      const windowHeight = window.innerHeight;
      const particleEndPoint = windowHeight * 2; 
      
      if (currentScrollY >= particleEndPoint) {
        const scrollPosition = currentScrollY - particleEndPoint;
        const sectionHeight = windowHeight * 1.5; 
        
        if (scrollPosition > sectionHeight * 3.4 && scrollPosition < sectionHeight * 4.2) {
          setCurrentSection('mainTheme');
        } else if (scrollPosition > sectionHeight * 4.21 && scrollPosition < sectionHeight * 5.0) {
          setCurrentSection('video');
        } else if (scrollPosition > sectionHeight * 5.01 && scrollPosition < sectionHeight * 5.8  ) {
          setCurrentSection('booth');
        } else if (scrollPosition > sectionHeight * 5.81 && scrollPosition < sectionHeight * 8.3) {
          setCurrentSection('info');
        } else if (scrollPosition > sectionHeight * 8.31 && scrollPosition < sectionHeight * 9.1) {
          setCurrentSection('guestbook');
        }
      } else {
      
        setCurrentSection('welcome');
      }

      const sections = document.querySelectorAll('.main-theme-section');
      const newVisibleSections = [];
      
      sections.forEach((section, index) => {
        const rect = section.getBoundingClientRect();
        const isVisible = rect.top < window.innerHeight * 0.8;
        
        if (isVisible) {
          newVisibleSections[index] = true;
        }
      });
      console.log(document.querySelector('.booth-and-session'));
      setVisibleSections(newVisibleSections);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    
    const timer = setTimeout(() => {
      setIsExpanded(true);
      setCurrentSection('welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingWrapper>
      <GksAiContainer>
        <GksAiPill>
          <Orb>
            <img src='/src/assets/images/GKS_AI.png' alt='gksAI' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}/>
          </Orb>
          <GksAiText>
            {sectionTexts[currentSection]}
          </GksAiText>
        </GksAiPill>
      </GksAiContainer>
  
      <ParticleGlobe scrollY={scrollY} />
      
 
      <IntroOverlayComponent hideIntro={hideIntro} />
      <div style={{ height: '200vh' }}></div>


      <MainTheme visibleSections={visibleSections} />
      


      <VideoSection />
      <BoothAndSession />
      <Info/>
      <GuestBook />
      
      

    </LandingWrapper>
  );
};

export default Landing;