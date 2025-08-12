import React from 'react';
import styled from 'styled-components';
import { useParams, useNavigate } from 'react-router-dom';
import BackgroundImage from '../assets/images/booth-gradient-bg.png';
import MobileBackgroundImage from '../assets/images/booth-gradient-bg-mobile.png';

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

  @media (max-width: 768px) {
    background-image: url('${MobileBackgroundImage}');
    background-position: center top;
  }
`;

const MainContainer = styled.main`
  width: 100vw;
  overflow: hidden;
  position: relative;
  z-index: 11;
`;

const DetailContainer = styled.div`
  max-width: 1000px;
  margin: 8rem auto;
  background: rgba(255, 255, 255, 0.1);
  border: 0.1rem solid #bbb;
  border-radius: 1.6rem;
  padding: 4rem 3.2rem;
  box-shadow: 0 0 2.4rem rgba(255, 255, 255, 0.1);
  color: #fff;
  backdrop-filter: blur(1rem);

  @media (max-width: 768px) {
    padding: 2.4rem 0.8rem;
    margin: 1.6rem 1rem;
    border-radius: 1rem;
  }
`;

const DetailTitle = styled.h1`
  font-family: Syncopate, Helvetica;
  font-size: 4.8rem;
  font-style: normal;
  font-weight: 400;
  line-height: 100%;
  letter-spacing: -0.048rem;
  color: white;
  margin-bottom: 3.2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 3rem;
    margin-bottom: 2rem;
  }
`;

const DetailImg = styled.img`
  max-width: 18rem;
  margin: 0 auto 2.4rem;
  display: block;
  border-radius: 0.8rem;
`;

const DetailText = styled.p`
  font-family:
    SF Pro Text,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  font-size: 1.6rem;
  line-height: 1.7;
  color: #fff;
  margin-bottom: 2rem;
  text-align: center;

  @media (max-width: 768px) {
    font-size: 1.4rem;
  }
`;

const BackBtn = styled.button`
  margin: 3.2rem auto 0;
  padding: 1.2rem 2.4rem;
  background: rgba(255, 255, 255, 0.1);
  color: #fff;
  border: 0.1rem solid #bbb;
  border-radius: 0.8rem;
  font-size: 1.6rem;
  font-family:
    SF Pro Text,
    -apple-system,
    BlinkMacSystemFont,
    sans-serif;
  cursor: pointer;
  display: block;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.2);
    border-color: #fff;
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    padding: 1rem 2rem;
  }
`;

const ArchivingDetail = () => {
  const { edition } = useParams();
  const navigate = useNavigate();

  // 에디션별 정보 데이터
  const editionData = {
    1: {
      title: '1st GKSF',
      year: '2013',
      description:
        '제1회 글로벌 한국학 연구자 포럼이 개최되었습니다. 한국학 연구의 새로운 지평을 열었던 첫 번째 포럼입니다.',
      highlights: [
        '한국학 연구의 기초 마련',
        '국제 학술 교류의 시작',
        '한국 문화의 세계화 논의'
      ]
    },
    2: {
      title: '2nd GKSF',
      year: '2014',
      description:
        '제2회 글로벌 한국학 연구자 포럼에서는 한국학 연구의 발전 방향과 국제 협력 방안을 논의했습니다.',
      highlights: [
        '한국학 연구 방법론 발전',
        '해외 한국학 연구소와의 협력',
        '디지털 한국학 도입'
      ]
    },
    3: {
      title: '3rd GKSF',
      year: '2015',
      description:
        '제3회 글로벌 한국학 연구자 포럼에서는 한국학의 미래 비전과 글로벌 네트워크 구축에 대해 논의했습니다.',
      highlights: [
        '한국학 미래 비전 수립',
        '글로벌 네트워크 구축',
        '차세대 연구자 양성'
      ]
    },
    4: {
      title: '4th GKSF',
      year: '2016',
      description:
        '제4회 글로벌 한국학 연구자 포럼에서는 한국학의 디지털 전환과 새로운 연구 패러다임을 탐구했습니다.',
      highlights: [
        '디지털 한국학 도입',
        'AI 기술 활용 연구',
        '크로스 미디어 연구'
      ]
    },
    5: {
      title: '5th GKSF',
      year: '2017',
      description:
        '제5회 글로벌 한국학 연구자 포럼에서는 한국학의 글로벌 확산과 지역별 특화 연구에 대해 논의했습니다.',
      highlights: [
        '지역별 한국학 연구',
        '문화 간 소통 연구',
        '한국학 교육 표준화'
      ]
    },
    6: {
      title: '6th GKSF',
      year: '2018',
      description:
        '제6회 글로벌 한국학 연구자 포럼에서는 한국학의 학제간 연구와 실용적 응용에 대해 탐구했습니다.',
      highlights: ['학제간 연구 활성화', '실용적 응용 연구', '산학 협력 강화']
    },
    7: {
      title: '7th GKSF',
      year: '2019',
      description:
        '제7회 글로벌 한국학 연구자 포럼에서는 한국학의 혁신과 지속가능한 발전 방안을 논의했습니다.',
      highlights: ['혁신적 연구 방법론', '지속가능한 발전', '환경 친화적 연구']
    },
    8: {
      title: '8th GKSF',
      year: '2020',
      description:
        '제8회 글로벌 한국학 연구자 포럼에서는 코로나19 이후 한국학의 새로운 방향성을 모색했습니다.',
      highlights: ['온라인 포럼 도입', '비대면 연구 방법론', '글로벌 위기 대응']
    },
    9: {
      title: '9th GKSF',
      year: '2021',
      description:
        '제9회 글로벌 한국학 연구자 포럼에서는 하이브리드 형태의 새로운 포럼 모델을 시도했습니다.',
      highlights: ['하이브리드 포럼 모델', '디지털 네트워킹', '가상 현실 활용']
    },
    10: {
      title: '10th GKSF',
      year: '2022',
      description:
        '제10회 글로벌 한국학 연구자 포럼에서는 한국학의 10년 성과를 돌아보고 미래 전략을 수립했습니다.',
      highlights: ['10년 성과 총평', '미래 전략 수립', '글로벌 파트너십 확대']
    },
    11: {
      title: '11th GKSF',
      year: '2023',
      description:
        '제11회 글로벌 한국학 연구자 포럼에서는 AI 시대의 한국학과 메타버스를 활용한 새로운 연구 방법론을 탐구했습니다.',
      highlights: ['AI 시대 한국학', '메타버스 활용 연구', '차세대 기술 융합']
    }
  };

  const currentEdition = editionData[edition];

  if (!currentEdition) {
    return (
      <MainContainer>
        <Background />
        <DetailContainer>
          <DetailTitle>에디션을 찾을 수 없습니다</DetailTitle>
          <DetailText>
            요청하신 GKSF 에디션 정보가 존재하지 않습니다.
          </DetailText>
          <BackBtn onClick={() => navigate('/archiving')}>
            아카이빙으로 돌아가기
          </BackBtn>
        </DetailContainer>
      </MainContainer>
    );
  }

  return (
    <MainContainer>
      <Background />
      <DetailContainer>
        <DetailTitle>{currentEdition.title}</DetailTitle>
        <DetailText>
          <strong>개최 연도:</strong> {currentEdition.year}
        </DetailText>
        <DetailText>{currentEdition.description}</DetailText>
        <DetailText>
          <strong>주요 특징:</strong>
        </DetailText>
        <ul
          style={{
            color: '#fff',
            fontSize: '1.4rem',
            lineHeight: '1.8',
            marginBottom: '2rem'
          }}
        >
          {currentEdition.highlights.map((highlight, index) => (
            <li key={index} style={{ marginBottom: '0.5rem' }}>
              {highlight}
            </li>
          ))}
        </ul>
        <BackBtn onClick={() => navigate('/archiving')}>
          아카이빙으로 돌아가기
        </BackBtn>
      </DetailContainer>
    </MainContainer>
  );
};

export default ArchivingDetail;
