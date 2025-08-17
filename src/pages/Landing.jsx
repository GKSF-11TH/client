import React, { useEffect, useState, useRef } from 'react';
import { LandingWrapper, GksAiContainer, GksAiPill, Orb, GksAiText } from '../style/LandingStyle';
import ParticleGlobe from '../components/Landing/particleGlobe';
import IntroOverlayComponent from '../components/Landing/introOverlay';
import MainTheme from '../components/Landing/mainTheme';
import VideoSection from '../components/Landing/videoSection';
import BoothAndSession from '../components/Landing/boothAndSession';
import Info from '../components/Landing/info'
import GuestBook from '../components/Landing/guestBook';

import gksAiImage from '../assets/images/GKS_AI.png';


class SmoothScroll {
  constructor(options = {}) {
    this.currentScroll = 0;
    this.targetScroll = 0;
    this.ease = options.ease || 0.08; 
    this.isScrolling = false;
    this.rafId = null;
    this.callbacks = [];
    
    this.init();
  }
  
  init() {
  
    this.onScroll = this.onScroll.bind(this);
    this.onResize = this.onResize.bind(this);
    this.animate = this.animate.bind(this);
    
    window.addEventListener('scroll', this.onScroll, { passive: true });
    window.addEventListener('resize', this.onResize);
    

    this.currentScroll = window.scrollY;
    this.targetScroll = window.scrollY;
    

    this.animate();
  }
  
  onScroll() {
    this.targetScroll = window.scrollY;
    if (!this.isScrolling) {
      this.isScrolling = true;
    }
  }
  
  onResize() {
    this.currentScroll = window.scrollY;
    this.targetScroll = window.scrollY;
  }
  
  animate() {
 
    const diff = this.targetScroll - this.currentScroll;

    if (Math.abs(diff) < 0.1) {
      this.currentScroll = this.targetScroll;
      this.isScrolling = false;
    } else {
      this.currentScroll += diff * this.ease;
    }
   
    this.callbacks.forEach(callback => {
      if (typeof callback === 'function') {
        callback(this.currentScroll);
      }
    });
    
    this.rafId = requestAnimationFrame(this.animate);
  }
  

  addCallback(callback) {
    this.callbacks.push(callback);
  }
  
 
  removeCallback(callback) {
    const index = this.callbacks.indexOf(callback);
    if (index > -1) {
      this.callbacks.splice(index, 1);
    }
  }
  
  destroy() {
    if (this.rafId) {
      cancelAnimationFrame(this.rafId);
    }
    window.removeEventListener('scroll', this.onScroll);
    window.removeEventListener('resize', this.onResize);
    this.callbacks = [];
  }
}

const Landing = () => {
  const [hideIntro, setHideIntro] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const [visibleSections, setVisibleSections] = useState([]);
  const [currentSection, setCurrentSection] = useState('intro');
  
  const smoothScrollRef = useRef(null);
  
  const sectionTexts = {
    intro: 'GKS AI',
    welcome: 'Welcome to 11th GKSF!',
    mainTheme: 'Explore Main Themes',
    video: 'Watch Our Journey',
    booth: 'Visit Booths & Sessions',
    info: 'Get More Information',
    guestbook: 'Leave Your Message'
  };

  // 스크롤 처리 로직을 별도 함수로 분리
  const handleScrollUpdate = (currentScrollY) => {
    setScrollY(currentScrollY);
    setHideIntro(currentScrollY > 30);
    
    const windowHeight = window.innerHeight;
    const particleEndPoint = windowHeight * 2;
    
    if (currentScrollY >= particleEndPoint) {
      const scrollPosition = currentScrollY - particleEndPoint;
      const sectionHeight = windowHeight * 1.5;
      
      if (scrollPosition > sectionHeight * 3.5 && scrollPosition < sectionHeight * 4.3) {
        setCurrentSection('mainTheme');
      } else if (scrollPosition > sectionHeight * 4.31 && scrollPosition < sectionHeight * 5.1) {
        setCurrentSection('video');
      } else if (scrollPosition > sectionHeight * 5.11 && scrollPosition < sectionHeight * 5.9) {
        setCurrentSection('booth');
      } else if (scrollPosition > sectionHeight * 5.91 && scrollPosition < sectionHeight * 8.3) {
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
    
    setVisibleSections(newVisibleSections);
  };

  useEffect(() => {
    smoothScrollRef.current = new SmoothScroll({
      ease: 0.08 
    });
    

    smoothScrollRef.current.addCallback(handleScrollUpdate);
    
    return () => {
      if (smoothScrollRef.current) {
        smoothScrollRef.current.destroy();
      }
    };
  }, []);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentSection('welcome');
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  return (
    <LandingWrapper>
      <GksAiContainer>
        <GksAiPill>
          <Orb>
            <img src={gksAiImage} alt='gksAI' style={{width: '100%', height: '100%', objectFit: 'cover', borderRadius: '50%'}}/>
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