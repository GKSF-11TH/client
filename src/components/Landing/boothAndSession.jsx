import React, { useState } from 'react';
import useResponsive from './useResponsive';

import {
  BoothAndSessionWrapper,
  OrbBg1, OrbBg2, Bg,
  BoothAndSessionTitle,
  BoothAndSessionSub,
  BoothAndSessionCardRow,
  BoothAndSessionHeader,
  CardContainer, Card3D, CardFace, CardBack
} from '../../style/LandingStyle';
import gksAiImage from '../../assets/images/GKSAI.png';
import bgImage from '../../assets/images/BG.png';
import card1_1Image from '../../assets/images/card1_1.svg';
import card1_2Image from '../../assets/images/card1_2.png';
import card2_1Image from '../../assets/images/card2_1.svg';
import card2_2Image from '../../assets/images/card2_2.png';

const BoothAndSession = () => {
  const [flippedCards, setFlippedCards] = useState({ booth: false, session: false });
  const { isMobile } = useResponsive(); 

  const handleCardClick = (cardType) => {
    setFlippedCards(prev => ({
      ...prev,
      [cardType]: !prev[cardType]
    }));
  };

  return (
    <BoothAndSessionWrapper>
      <BoothAndSessionHeader>
        <BoothAndSessionTitle>
          Booth and Session
        </BoothAndSessionTitle>
        <BoothAndSessionSub>
          Immerse Yourself {isMobile && <br/>}
          in Thought-Provoking Dialogues
        </BoothAndSessionSub>
      </BoothAndSessionHeader>
      <BoothAndSessionCardRow>
      <OrbBg1 src={gksAiImage} alt="orb" />
      <OrbBg2 src={gksAiImage} alt="orb" />
      <Bg src={bgImage} alt="bg" />
        {/* BOOTH 카드 */}
        <CardContainer
            style={{
              transform: isMobile ? 'rotate(-5deg)' : 'rotate(-15deg)',
              marginRight: isMobile ? '0.5rem' : '1rem',
              marginTop: isMobile ? '1rem' : '13rem',
              zIndex: 1,
              width: isMobile ? '180px' : '200px',
              height: isMobile ? '240px' : '300px',
            }}
          onClick={() => handleCardClick('booth')}
        >
          <Card3D className={flippedCards.booth ? 'rotate-y-180' : ''}>
     
            <CardFace>
              <img
                src={card1_1Image}
                alt="Booth Front"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
              />
            </CardFace>
    
            <CardBack>
              <img
                src={card1_2Image}
                alt="Booth Back"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
              />
            </CardBack>
          </Card3D>
        </CardContainer>

        <CardContainer
           style={{
            transform: isMobile ? 'rotate(5deg)' : 'rotate(15deg)',
            marginLeft: isMobile ? '0rem' : '0rem',
            marginTop: isMobile ? '1rem' : '16rem',
            zIndex: 2,
            width: isMobile ? '180px' : '200px',
            height: isMobile ? '240px' : '300px',
          }}
          onClick={() => handleCardClick('session')}
        >
          <Card3D className={flippedCards.session ? 'rotate-y-180' : ''}>
          <CardFace>
              <img
                src={card2_1Image}
                alt="Booth Front"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
              />
            </CardFace>
            <CardBack>
              <img
                src={card2_2Image}
                alt="Booth Back"
                style={{ width: '100%', height: '100%', objectFit: 'cover', borderRadius: '1rem' }}
              />
            </CardBack>
          </Card3D>
        </CardContainer>
      </BoothAndSessionCardRow>
      
    </BoothAndSessionWrapper>
  );
};

export default BoothAndSession;