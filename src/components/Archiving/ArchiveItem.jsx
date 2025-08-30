import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import gksf11_Logo from '../../assets/images/_GKSF11_로고.png';
import gksf10_Logo from '../../assets/images/10th.png';
import gksf9_Logo from '../../assets/images/9th.png';
import gksf8_Logo from '../../assets/images/8th.png';
import gksf7_Logo from '../../assets/images/7th.png';
import gksf6_Logo from '../../assets/images/6th.png';
import gksf5_Logo from '../../assets/images/5th.png';
import gksf4_Logo from '../../assets/images/4th.jpg';
import gksf3_Logo from '../../assets/images/3rd.jpg';
import gksf2_Logo from '../../assets/images/2nd.jpg';
import gksf1_Logo from '../../assets/images/1st.jpg';

// 픽셀화 애니메이션 키프레임
const pixelateAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.7);
  }
  100% {
    opacity: 1;
    transform: scale(1.1);
  }
`;

// 픽셀화된 로고 컨테이너
const PixelatedContainer = styled.div`
  width: 110%;
  height: 110%;
  display: flex;
  justify-content: center;
  align-items: center;
  animation: ${pixelateAnimation} 0.3s ease-out;
`;

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
  position: relative;

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
  object-fit: cover;
  transition: opacity 260ms linear;
`;

// object-fit: cover와 동일한 사각형 계산
function getContainRect(canvas, img) {
  const cw = canvas.width;
  const ch = canvas.height;
  const iw = img.naturalWidth;
  const ih = img.naturalHeight;

  if (!iw || !ih) return { dx: 0, dy: 0, dw: cw, dh: ch };

  // cover 방식으로 계산 (이미지가 카드 전체를 덮도록)
  const scale = Math.max(cw / iw, ch / ih);
  const dw = Math.round(iw * scale);
  const dh = Math.round(ih * scale);
  const dx = Math.round((cw - dw) / 2);
  const dy = Math.round((ch - dh) / 2);
  return { dx, dy, dw, dh };
}

const ArchiveItem = ({ edition, hasLogo = false, isMobile = false }) => {
  const navigate = useNavigate();

  // 상태는 준비 여부만 유지 (불필요한 리렌더 방지)
  const [ready, setReady] = useState(false);

  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const cardRef = useRef(null);
  const rectRef = useRef(null); // contain 사각형 저장

  // 회차별 로고 매칭 함수
  const getLogoByEdition = (editionText) => {
    const editionNumber = editionText.match(/(\d+)/)?.[1];
    console.log('editionText:', editionText, 'editionNumber:', editionNumber);

    if (!editionNumber) {
      console.log('editionNumber not found, using default logo');
      return gksf11_Logo; // 기본값
    }

    let selectedLogo;
    switch (editionNumber) {
      case '1':
        selectedLogo = gksf1_Logo;
        break;
      case '2':
        selectedLogo = gksf2_Logo;
        break;
      case '3':
        selectedLogo = gksf3_Logo;
        break;
      case '4':
        selectedLogo = gksf4_Logo;
        break;
      case '5':
        selectedLogo = gksf5_Logo;
        break;
      case '6':
        selectedLogo = gksf6_Logo;
        break;
      case '7':
        selectedLogo = gksf7_Logo;
        break;
      case '8':
        selectedLogo = gksf8_Logo;
        break;
      case '9':
        selectedLogo = gksf9_Logo;
        break;
      case '10':
        selectedLogo = gksf10_Logo;
        break;
      case '11':
        selectedLogo = gksf11_Logo;
        break;
      default:
        selectedLogo = gksf11_Logo; // 기본값
        break;
    }

    console.log(`Edition ${editionNumber} -> Logo:`, selectedLogo);
    return selectedLogo;
  };

  const formatEdition = (text) => {
    if (!isMobile) return text;
    return text.replace(/(\d+)(st|nd|rd|th)/gi, (match, number, suffix) => {
      return number + suffix.toLowerCase();
    });
  };

  // 초기화 및 리사이즈 대응
  useEffect(() => {
    const img = logoRef.current;
    const cvs = canvasRef.current;
    const card = cardRef.current;
    if (!img || !cvs || !card) return;

    const dpr = Math.max(1, Math.floor(window.devicePixelRatio || 1));

    function init() {
      const rect = card.getBoundingClientRect();
      const w = Math.round(rect.width);
      const h = Math.round(rect.height);

      // HiDPI 대응
      cvs.width = w * dpr;
      cvs.height = h * dpr;
      cvs.style.width = `${w}px`;
      cvs.style.height = `${h}px`;

      const ctx = cvs.getContext('2d');
      ctx.clearRect(0, 0, cvs.width, cvs.height);

      // contain 사각형 계산 저장
      rectRef.current = getContainRect(cvs, img);

      // 원본 이미지는 항상 보이게 (깜빡임 방지)
      if (logoRef.current) logoRef.current.style.opacity = '1';

      // 캔버스는 기본 숨김 (호버 시만 표시)
      cvs.style.display = 'none';

      setReady(true);
    }

    if (!img.complete) {
      img.onload = init;
    } else {
      init();
    }

    const onResize = () => init();
    window.addEventListener('resize', onResize);
    return () => window.removeEventListener('resize', onResize);
  }, []);
  
  
    const handleMouseEnter = () => {
      if (!ready) return;
    
      const cvs = canvasRef.current;
      const ctx = cvs.getContext('2d');
      const img = logoRef.current;
      const rect = rectRef.current;
      if (!cvs || !ctx || !img || !rect) return;
    
      const { dx, dy, dw, dh } = rect;
    
  
      const pixelSize = 24;
    
      const lowW = Math.max(1, Math.floor(dw / pixelSize));
      const lowH = Math.max(1, Math.floor(dh / pixelSize));
    
      const tmp = document.createElement('canvas');
      tmp.width = lowW;
      tmp.height = lowH;
    
      const tctx = tmp.getContext('2d', { willReadFrequently: true });

      tctx.imageSmoothingEnabled = false;
      tctx.clearRect(0, 0, lowW, lowH);
    

      tctx.drawImage(
        img,
        0, 0, img.naturalWidth, img.naturalHeight,
        0, 0, lowW, lowH
      );
    
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tmp, 0, 0, lowW, lowH, dx, dy, dw, dh);
    
      cvs.style.display = 'block';
    };
    

  // 호버 해제 시: 캔버스만 숨김 (원본 이미지는 건드리지 않음)
  const handleMouseLeave = () => {
    const cvs = canvasRef.current;
    if (!cvs) return;
    cvs.style.display = 'none';
  };

  // 클릭 시 바로 아카이빙 페이지로 이동
  const handleClick = () => {
    const editionNumber = edition.match(/(\d+)/)?.[1];
    if (editionNumber) {
      navigate(`/archiving/${editionNumber}`);
    }
  };

  return (
    <ArchiveItemContainer $isMobile={isMobile}>
      <Card
        ref={cardRef}
        $isMobile={isMobile}
        onClick={handleClick}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        data-card
      >
        {hasLogo && (
          <>
            <LogoImage
              ref={logoRef}
              src={getLogoByEdition(edition)}
              alt={`GKSF ${edition} Logo`}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'cover',
                pointerEvents: 'none',
                // 항상 불투명 1 유지 (깜빡임 방지)
                opacity: 1
              }}
            />
            <canvas
              ref={canvasRef}
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                imageRendering: 'pixelated',
                pointerEvents: 'none'
              }}
            />
          </>
        )}
      </Card>
      <EditionTitle $isMobile={isMobile}>{formatEdition(edition)}</EditionTitle>
    </ArchiveItemContainer>
  );
};

export default ArchiveItem;
