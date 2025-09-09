import React, { useState, useEffect, useRef } from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/booth-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-detail-gradient-bg-mobile.png';

// Utopia 이미지들 import
import utopia1 from '../assets/images/utopia1.png';
import utopia2 from '../assets/images/utopia2.png';
import utopia3 from '../assets/images/utopia3.png';
import utopia4 from '../assets/images/utopia4.png';
import utopia5 from '../assets/images/utopia5.png';
import utopia6 from '../assets/images/utopia6.png';
import utopia7 from '../assets/images/utopia7.png';
import utopia8 from '../assets/images/utopia8.png';
import utopia9 from '../assets/images/utopia9.png';
import utopia10 from '../assets/images/utopia10.png';
import utopia11 from '../assets/images/utopia11.png';
import utopia12 from '../assets/images/utopia12.png';
import utopia13 from '../assets/images/utopia13.png';
import utopia14 from '../assets/images/utopia14.png';
import utopia15 from '../assets/images/utopia15.png';
import utopia16 from '../assets/images/utopia16.png';
import utopia17 from '../assets/images/utopia17.png';
import utopia18 from '../assets/images/utopia18.png';
import utopia19 from '../assets/images/utopia19.png';
import utopia20 from '../assets/images/utopia20.png';
import utopia21 from '../assets/images/utopia21.png';
import utopia22 from '../assets/images/utopia22.png';
import utopia23 from '../assets/images/utopia23.png';
import utopia24 from '../assets/images/utopia24.png';
import utopia25 from '../assets/images/utopia25.png';
import utopia26 from '../assets/images/utopia26.png';

// Dystopia 이미지들 import
import dystopia1 from '../assets/images/dystopia1.png';
import dystopia2 from '../assets/images/dystopia2.png';
import dystopia3 from '../assets/images/dystopia3.png';
import dystopia4 from '../assets/images/dystopia4.png';
import dystopia5 from '../assets/images/dystopia5.png';
import dystopia6 from '../assets/images/dystopia6.png';
import dystopia7 from '../assets/images/dystopia7.png';
import dystopia8 from '../assets/images/dystopia8.png';
import dystopia9 from '../assets/images/dystopia9.png';
import dystopia10 from '../assets/images/dystopia10.png';
import dystopia11 from '../assets/images/dystopia11.png';
import dystopia12 from '../assets/images/dystopia12.png';
import dystopia13 from '../assets/images/dystopia13.png';
import dystopia14 from '../assets/images/dystopia14.png';

// Reality 이미지들 import
import reality1 from '../assets/images/reality1.png';
import reality2 from '../assets/images/reality2.png';
import reality3 from '../assets/images/reality3.png';
import reality4 from '../assets/images/reality4.png';
import reality5 from '../assets/images/reality5.png';
import reality6 from '../assets/images/reality6.png';
import reality7 from '../assets/images/reality7.png';
import reality8 from '../assets/images/reality8.png';
import reality9 from '../assets/images/reality9.png';

// Utopia 이미지 배열
const utopiaImages = [
  utopia1,
  utopia2,
  utopia3,
  utopia4,
  utopia5,
  utopia6,
  utopia7,
  utopia8,
  utopia9,
  utopia10,
  utopia11,
  utopia12,
  utopia13,
  utopia14,
  utopia15,
  utopia16,
  utopia17,
  utopia18,
  utopia19,
  utopia20,
  utopia21,
  utopia22,
  utopia23,
  utopia24,
  utopia25,
  utopia26
];

// Dystopia 이미지 배열
const dystopiaImages = [
  dystopia1,
  dystopia2,
  dystopia3,
  dystopia4,
  dystopia5,
  dystopia6,
  dystopia7,
  dystopia8,
  dystopia9,
  dystopia10,
  dystopia11,
  dystopia12,
  dystopia13,
  dystopia14
];

// Reality 이미지 배열
const realityImages = [
  reality1,
  reality2,
  reality3,
  reality4,
  reality5,
  reality6,
  reality7,
  reality8,
  reality9
];

const BoothData = [
  {
    title: 'To:Utopia - Try Everything with AI',
    description:
      '기술의 발전은 예측 불가능성에 대한 두려움을 동반해왔지만, 우리는 그것을 기회로 바꾸며 더 나은 삶을 만들어왔습니다. 이 부스에서는 한국 사회의 예술, 의료, 교육 분야에서 나타나는 문제들을 AI와의 융합을 통해 어떻게 해결할 수 있는지를 제시합니다. 이를 통해 AI를 두려운 존재가 아닌, 우리의 삶과 공존하며 함께 발전해나갈 존재로 인식하는 계기를 마련하고자 합니다.',
    images: utopiaImages
  },
  {
    title: '빅브라더 v.2050: AI is watching you',
    description:
      '정치, 노동, 문화, 자아의 네 분야를 중심으로 AI가 가져올 한국의 디스토피아적 미래 단면을 제시합니다. 이를 통해 AI 미래의 잠재적 위험과 본질을 탐색하고, 실체 없는 두려움에서 벗어나 한국 사회가 나아갈 방향성을 모색하는 계기를 마련하고자 합니다.',
    images: dystopiaImages
  },
  {
    title: '그대들은 어떻게 살 것인가 - AI와 살아가는 "지금"의 한국 이야기',
    description:
      '본 부스는 인간이 AI와 공존하는 현재의 현실을 돌아보며, 인간다움과 주체성을 어떻게 지켜갈 것인지에 대한 질문을 던집니다. 익숙한 사회 풍경 속 AI의 확산, 그로 인한 인간 능력의 약화와 선택의 제한 등 문제를 직시하고, 이 거대한 흐름에 무력하게 휩쓸리는 존재가 아닌 "사고하고 저항하는 존재"로서 인간의 가능성을 되새기고자 합니다. 궁극적으로는 AI 시대를 "호황 또는 위기"가 아닌 "질문"의 시기로 보고, 이 질문을 스스로 던질 수 있는 시민적 태도를 회복하자는 메시지를 전달합니다.',
    images: realityImages
  }
];

const BoothDetail = () => {
  const { boothId } = useParams();
  const [selectedImageIndex, setSelectedImageIndex] = useState(null);
  const [touchStart, setTouchStart] = useState(null);
  const [touchEnd, setTouchEnd] = useState(null);
  const modalRef = useRef(null);

  const currentBooth = BoothData[boothId - 1];
  const selectedImage =
    selectedImageIndex !== null
      ? currentBooth.images[selectedImageIndex]
      : null;

  const handleImageClick = (image, index) => {
    setSelectedImageIndex(index);
  };

  useEffect(() => {
    if (selectedImageIndex !== null && modalRef.current) {
      modalRef.current.focus();
    }
  }, [selectedImageIndex]);

  const closeModal = () => {
    setSelectedImageIndex(null);
  };

  const goToPrevious = () => {
    if (selectedImageIndex > 0) {
      setSelectedImageIndex(selectedImageIndex - 1);
    }
  };

  const goToNext = () => {
    if (selectedImageIndex < currentBooth.images.length - 1) {
      setSelectedImageIndex(selectedImageIndex + 1);
    }
  };

  const handleTouchStart = (e) => {
    setTouchEnd(null);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;

    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;

    if (isLeftSwipe) {
      goToNext();
    } else if (isRightSwipe) {
      goToPrevious();
    }
  };

  const handleKeyDown = (e) => {
    if (selectedImageIndex === null) return;

    switch (e.key) {
      case 'ArrowLeft':
        goToPrevious();
        break;
      case 'ArrowRight':
        goToNext();
        break;
      case 'Escape':
        closeModal();
        break;
      default:
        break;
    }
  };

  return (
    <Container>
      <Background />
      <Content>
        <Title>{BoothData[boothId - 1].title}</Title>
        <BoothDescription>부스 소개</BoothDescription>
        <Description>{BoothData[boothId - 1].description}</Description>
        <ImageGridBox>
          {currentBooth.images.map((image, index) => (
            <ImageBox
              key={index}
              src={image}
              alt={`Booth ${boothId} Image ${index + 1}`}
              onClick={() => handleImageClick(image, index)}
            />
          ))}
          <SpareBox imageLen={currentBooth.images.length}>
            Global Korean Studies Forum
          </SpareBox>
        </ImageGridBox>
      </Content>

      {selectedImage && (
        <ModalOverlay
          ref={modalRef}
          onClick={closeModal}
          onKeyDown={handleKeyDown}
          tabIndex={0}
        >
          <ModalContent
            onClick={(e) => e.stopPropagation()}
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {selectedImageIndex > 0 && (
              <NavButton $position="left" onClick={goToPrevious}>
                ‹
              </NavButton>
            )}

            <ModalImage src={selectedImage} alt="Enlarged view" />

            {selectedImageIndex < currentBooth.images.length - 1 && (
              <NavButton $position="right" onClick={goToNext}>
                ›
              </NavButton>
            )}
          </ModalContent>
        </ModalOverlay>
      )}
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  min-height: 100vh;
  padding: 5rem 0 0 0;
  display: flex;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 5rem 2rem 8.5rem 2rem;
    overflow-y: hidden;
  }
`;

const Background = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  z-index: 0;
  width: 100%;
  height: 100%;
  background-image: url('${BackgroundImage}');
  background-size: cover;
  background-position: center top;
  background-repeat: no-repeat;

  @media (max-width: 768px) {
    background-image: url('${MobileBackgroundImage}');
    height: 230rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 10.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 106rem;

  @media (max-width: 768px) {
    padding: 6.7rem 1.5rem 0 1.5rem;
  }
`;

const Title = styled.h1`
  color: var(--text-primary);
  text-align: center;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: var(--text-primary);
  font-family: Syncopate;
  font-size: 3.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 3.6rem */
  letter-spacing: -0.036rem;
  margin-bottom: 6.9rem;
  padding: 0 7.7rem;

  @media (max-width: 768px) {
    font-size: 3.2rem;
    line-height: 127%;
    margin-bottom: 2.8rem;
    padding: 0 2rem;
  }
`;

const BoothDescription = styled.p`
  color: var(--Text-Tertiary, #919191);
  text-align: center;

  /* Desktop/Body/16_R */
  font-family: 'IBM Plex Mono';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 2.24rem */
  letter-spacing: 0.016rem;
  margin-bottom: 1.2rem;
`;

const Description = styled.p`
  color: var(--text-secondary);
  text-align: center;
  font-family: 'SF Pro';
  font-size: 1.6rem;
  font-style: normal;
  font-weight: 300;
  line-height: 125%; /* 2.4rem */
  letter-spacing: -0.024rem;

  margin-bottom: 9.3rem;
  padding: 0 7.7rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 140%;
    margin-bottom: 5rem;
    padding: 0 2rem;
  }
`;

const ImageGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 0.8rem;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 27.6rem;
  /* background: var(--background-tertiary); */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    gap: 0.4rem;
    margin-bottom: 8.48rem;
    padding: 0 1.7rem;
  }

  /* @media (max-width: 400px) {
    grid-template-columns: 1fr;
    gap: 1rem;
    padding: 0;
  } */
`;

const ImageBox = styled.img`
  width: 100%;
  aspect-ratio: 25 / 36;
  cursor: pointer;
  transition: transform 0.2s ease;

  object-fit: cover;
  background: var(--background-primary);

  &:hover {
    transform: scale(1.02);
  }
`;

const SpareBox = styled.div`
  width: ${(props) => (4 - (props.imageLen % 4)) * 100}%;
  aspect-ratio: ${(props) => 4 - (props.imageLen % 4)} * 25/ 36;
  background: var(--Background-Glass, rgba(16, 16, 16, 0.4));
  padding: 2.6rem 0 0 2.25rem;
  display: inline-flex;

  color: #fff;
  font-family: Syncopate;
  font-size: 4.2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 4.2rem */
  letter-spacing: -0.042rem;

  @media (max-width: 768px) {
    font-size: 2.05rem;
    padding: 1.2rem 0 0 1.2rem;
    width: ${(props) => (2 - (props.imageLen % 2)) * 100}%;
    aspect-ratio: ${(props) => 2 - (props.imageLen % 2)} * 25/ 36;
  }
`;

const NoImagesFound = styled.div`
  width: 100%;
  height: 30rem;
  display: flex;
  justify-content: center;
  align-items: center;
  color: var(--text-tertiary);
  opacity: 0.7;
  font-family: 'SF Pro';
  font-size: 1.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 125%; /* 2.4rem */
  letter-spacing: -0.024rem;

  margin-bottom: 9.3rem;
  padding: 0 7.7rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 140%;
    margin-bottom: 5rem;
    padding: 0 2rem;
  }
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.9);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 10000;
  padding: 15rem;

  @media (max-width: 768px) {
    padding: 2rem;
  }
`;

const ModalContent = styled.div`
  position: relative;
  max-width: 30vw;
  max-height: 35vh;
  display: flex;
  justify-content: center;
  align-items: center;

  @media (max-width: 768px) {
    max-width: 90vw;
    max-height: 85vh;
  }
`;

const ModalImage = styled.img`
  max-width: 100%;
  max-height: 100%;
  width: auto;
  height: auto;
  object-fit: contain;
  border-radius: 0.8rem;
  box-shadow: 0 0.4rem 2rem rgba(0, 0, 0, 0.5);
  display: block;
`;

const NavButton = styled.button`
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  ${({ $position }) =>
    $position === 'left' ? 'left: -8rem;' : 'right: -8rem;'}
  background: rgba(255, 255, 255, 0.2);
  border: none;
  color: white;
  font-size: 3rem;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: background 0.2s ease;
  z-index: 10001;

  &:hover {
    background: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    ${({ $position }) =>
      $position === 'left' ? 'left: 1rem;' : 'right: 1rem;'}
    width: 3rem;
    height: 3rem;
    font-size: 2rem;
  }
`;

export default BoothDetail;
