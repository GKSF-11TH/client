import React, { useState, useRef, useEffect } from 'react';
import styled, { keyframes } from 'styled-components';
import { useNavigate } from 'react-router-dom';
import gksf11_Logo from '../../assets/images/_GKSF11_로고.png';

// 픽셀화 애니메이션 키프레임
const pixelateAnimation = keyframes`
  0% {
    opacity: 0;
    transform: scale(0.8);
  }
  100% {
    opacity: 1;
    transform: scale(1);
  }
`;

// 픽셀화된 로고 컨테이너
const PixelatedContainer = styled.div`
  width: 100%;
  height: 100%;
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
  object-fit: contain;
  transition: opacity 260ms linear;
`;

const ArchiveItem = ({ edition, hasLogo = false, isMobile = false }) => {
  const navigate = useNavigate();
  const [clickCount, setClickCount] = useState(0);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isPixelated, setIsPixelated] = useState(false);
  const [ready, setReady] = useState(false);

  const canvasRef = useRef(null);
  const logoRef = useRef(null);
  const offscreenRef = useRef(null);

  // 더 부드러운 이징 함수
  const easeInOutCubic = (t) =>
    t < 0.5 ? 4 * t * t * t : 1 - Math.pow(-2 * t + 2, 3) / 2;

  const formatEdition = (text) => {
    if (!isMobile) return text;

    // "11st GKSF" -> "11st GKSF" (st만 소문자로 유지, GKSF는 대문자)
    return text.replace(/(\d+)(st|nd|rd|th)/gi, (match, number, suffix) => {
      return number + suffix.toLowerCase();
    });
  };

  // 초기화
  useEffect(() => {
    const img = logoRef.current;
    const cvs = canvasRef.current;
    const card = document.querySelector('[data-card]');

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

      const off = document.createElement('canvas');
      off.width = w * dpr;
      off.height = h * dpr;
      offscreenRef.current = off;

      const octx = off.getContext('2d');
      octx.imageSmoothingEnabled = true;
      octx.clearRect(0, 0, off.width, off.height);
      octx.drawImage(img, 0, 0, off.width, off.height);

      if (logoRef.current) logoRef.current.style.opacity = '1';
      const ctx = cvs.getContext('2d');
      ctx.clearRect(0, 0, cvs.width, cvs.height);
      setReady(true);
      setIsPixelated(false);
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

  // 부드럽고 약한 픽셀화 애니메이션 (한 번만 실행)
  const animatePixelate = () => {
    if (!ready || isAnimating) return;
    setIsAnimating(true);

    const cvs = canvasRef.current;
    const ctx = cvs.getContext('2d');
    const off = offscreenRef.current;
    const start = performance.now();

    // 픽셀화 설정 - 더 부드럽고 약하게
    const endPixelSize = 10; // 기존 28 → 10 (훼손 줄임)
    const duration = 1800; // 기존 900 → 1800 (느리게)
    const strength = 0.75; // 최종 강도 제한(0~1), 기본 75%

    // 최종 픽셀 크기 계산 (강도 제한 적용)
    const finalPx = Math.max(
      1,
      Math.round(endPixelSize * Math.min(1, Math.max(0, strength)))
    );

    const loop = (now) => {
      const t = Math.min(1, (now - start) / duration);
      const k = easeInOutCubic(t); // 더 부드러운 속도 프로파일

      // 1 → finalPx 까지만 변화 (너무 거칠게 가지 않음)
      const px = Math.max(1, Math.round(1 + k * (finalPx - 1)));

      const lowW = Math.max(1, Math.floor(off.width / px));
      const lowH = Math.max(1, Math.floor(off.height / px));

      const tmp = document.createElement('canvas');
      tmp.width = lowW;
      tmp.height = lowH;

      const tctx = tmp.getContext('2d');
      tctx.imageSmoothingEnabled = true;
      tctx.clearRect(0, 0, lowW, lowH);
      tctx.drawImage(off, 0, 0, lowW, lowH);

      ctx.clearRect(0, 0, cvs.width, cvs.height);
      ctx.imageSmoothingEnabled = false;
      ctx.drawImage(tmp, 0, 0, lowW, lowH, 0, 0, cvs.width, cvs.height);

      if (logoRef.current) {
        // 원본은 천천히 사라지도록(여유 있게)
        const imgOpacity = 1 - k;
        logoRef.current.style.opacity = imgOpacity.toString();
      }

      if (t < 1) {
        requestAnimationFrame(loop);
      } else {
        setIsAnimating(false);
        setIsPixelated(true);
      }
    };

    requestAnimationFrame(loop);
  };

  const handleClick = () => {
    if (isAnimating || !ready) return;

    if (clickCount === 0) {
      // 첫 번째 클릭: 픽셀화 애니메이션 시작
      setClickCount(1);
      animatePixelate();
    } else if (clickCount === 1) {
      // 두 번째 클릭: 아카이빙 페이지로 이동
      const editionNumber = edition.match(/(\d+)/)?.[1];
      if (editionNumber) {
        navigate(`/archiving/${editionNumber}`);
      }
    }
  };

  return (
    <ArchiveItemContainer $isMobile={isMobile}>
      <Card $isMobile={isMobile} onClick={handleClick} data-card>
        {hasLogo && (
          <>
            <LogoImage
              ref={logoRef}
              src={gksf11_Logo}
              alt="GKSF Logo"
              style={{
                position: 'absolute',
                inset: 0,
                width: '100%',
                height: '100%',
                objectFit: 'contain',
                pointerEvents: 'none'
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
