import React from 'react';
import { useParams } from 'react-router-dom';
import styled from 'styled-components';
import BackgroundImage from '../assets/images/booth-detail-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-detail-gradient-bg-mobile.png';
import Footer from '../components/common/Footer';

const BoothData = [
  {
    title: 'To:Utopia - Try Everything with AI',
    description:
      '기술의 발전은 예측 불가능성에 대한 두려움을 동반해왔지만, 우리는 그것을 기회로 바꾸며 더 나은 삶을 만들어왔습니다.\n이 부스에서는 한국 사회의 예술, 의료, 교육 분야에서 나타나는 문제들을 AI와의 융합을 통해 어떻게 해결할 수 있는지를 제시합니다.\n이를 통해 AI를 두려운 존재가 아닌, 우리의 삶과 공존하며 함께 발전해나갈 존재로 인식하는 계기를 마련하고자 합니다.',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    title: '빅브라더 v.2050: AI is watching you',
    description:
      '정치, 노동, 문화, 자아의 네 분야를 중심으로 AI가 가져올 한국의 디스토피아적 미래 단면을 제시합니다.\n이를 통해 AI 미래의 잠재적 위험과 본질을 탐색하고, 실체 없는 두려움에서 벗어나 한국 사회가 나아갈 방향성을 모색하는 계기를 마련하고자 합니다.',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
  },
  {
    title: '그대들은 어떻게 살 것인가 - AI와 살아가는 지금의 한국 이야기',
    description:
      '본 부스는 인간이 AI와 공존하는 현재의 현실을 돌아보며, 인간다움과 주체성을 어떻게 지켜갈 것인지에 대한 질문을 던집니다.\n익숙한 사회 풍경 속 AI의 확산, 그로 인한 인간 능력의 약화와 선택의 제한 등 문제를 직시하고, 이 거대한 흐름에 무력하게 휩쓸리는 존재가 아닌 사고하고 저항하는 존재로서 인간의 가능성을 되새기고자 합니다.\n궁극적으로는 AI 시대를 호황 또는 위기가 아닌 질문의 시기로 보고, 이 질문을 스스로 던질 수 있는 시민적 태도를 회복하자는 메시지를 전달합니다.',
    images: [1, 2, 3, 4, 5, 6, 7, 8, 9]
  }
];

const BoothDetail = () => {
  const { boothId } = useParams();
  return (
    <Container>
      <Background />
      <Content>
        <Title>{BoothData[boothId - 1].title}</Title>
        <Description>{BoothData[boothId - 1].description}</Description>
        <ImageGridBox>
          {BoothData[boothId - 1].images.map((image, index) => (
            <ImageBox key={index} alt={`Booth ${boothId} Image ${index + 1}`} />
          ))}
          <SpareBox imageLen={BoothData[boothId - 1].images.length}>
            Global Korean Studies Forum
          </SpareBox>
        </ImageGridBox>
      </Content>
      <div style={{ position: 'relative', zIndex: 1, marginTop: 'auto' }}>
        <Footer />
      </div>
    </Container>
  );
};

const Container = styled.div`
  position: relative;
  width: 100vw;
  height: 155rem;
  display: flex;
  flex-direction: column;

  @media (max-width: 768px) {
    height: 165.3rem;
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
    background-position: center top;
    height: 165.3rem;
  }
`;

const Content = styled.div`
  position: relative;
  z-index: 11;
  width: 100%;
  padding: 15.4rem 0 0 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  max-width: 106rem;
  flex: 1;
  margin: 0 auto;

  @media (max-width: 768px) {
    padding: 11.7rem 1.5rem 0 1.5rem;
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

const Description = styled.p`
  color: var(--text-secondary);
  text-align: center;
  font-family: 'designhouse';
  font-size: 2rem;
  font-style: normal;
  font-weight: 400;
  line-height: 160%; /* 3.2rem */
  letter-spacing: -0.024rem;
  white-space: pre-line;
  max-width: 120rem;

  margin-bottom: 9.3rem;
  padding: 0 4rem;

  @media (max-width: 768px) {
    font-size: 1.6rem;
    line-height: 170%;
    margin-bottom: 5rem;
    padding: 0 1rem;
    max-width: 100%;
  }
`;

const ImageGridBox = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 25%);
  gap: 0.8rem;
  width: 100%;
  padding: 0 2rem;
  margin-bottom: 15rem;
  /* background: var(--background-tertiary); */

  @media (max-width: 768px) {
    grid-template-columns: repeat(2, 50%);
    gap: 0.4rem;
    margin-bottom: 4rem;
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

  object-fit: cover;
  background: var(--background-primary);
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

export default BoothDetail;
