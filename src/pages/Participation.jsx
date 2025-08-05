import React, { useState } from 'react';
import styled from 'styled-components';
import Guestbook from '../components/common/Guestbook';
import Preapply from '../components/common/Preapply';
import Footer from '../components/common/Footer';

const Container = styled.div`
  background: linear-gradient(180deg, #2e3c5d 0%, #000 60%);
  min-height: 100vh;
  color: #fff;
  font-family: 'Montserrat', 'Pretendard', sans-serif;
`;

const Header = styled.header`
  padding-top: 125px;
  text-align: center;
  @media (max-width: 900px) {
    padding-top: 60px;
  }
  @media (max-width: 600px) {
    padding-top: 32px;
  }
`;

const Title = styled.h1`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;
  -webkit-text-stroke-width: 0.4px;
  -webkit-text-stroke-color: #fff;
  font-family: Syncopate;
  font-size: 36px;
  font-style: normal;
  font-weight: 400;
  line-height: 100%; /* 36px */
  letter-spacing: -0.36px;
  padding-bottom: 24px;
  @media (max-width: 900px) {
    font-size: 2.2rem;
  }
  @media (max-width: 600px) {
    font-size: 1.5rem;
    margin-bottom: 10px;
  }
`;

const Subtitle = styled.p`
  color: var(--Text-Primary, #fbfbfb);
  text-align: center;

  /* Desktop/Body/16_R */
  font-family: 'IBM Plex Mono';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 22.4px */
  letter-spacing: 0.16px;
  padding-bottom: 90px;
  @media (max-width: 900px) {
    font-size: 1.05rem;
    margin-bottom: 28px;
  }
  @media (max-width: 600px) {
    font-size: 0.98rem;
    margin-bottom: 18px;
  }
`;

const CardRow = styled.div`
  display: flex;
  justify-content: center;
  gap: 48px;
  margin-bottom: 80px;
  @media (max-width: 900px) {
    gap: 24px;
    margin-bottom: 40px;
  }
  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    gap: 16px;
    margin-bottom: 24px;
  }
`;

const Card = styled.div`
  display: flex;
  width: 340px;
  height: 230px;
  padding: 32px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  position: relative;
  border-radius: 18px;
  border: 1.4px solid rgba(255, 255, 255, 0.2);
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(15px);
  cursor: pointer;
  transition:
    box-shadow 0.2s,
    border-color 0.2s;
  @media (max-width: 900px) {
    width: 260px;
    height: 180px;
    padding: 24px 18px;
  }
  @media (max-width: 600px) {
    width: 90vw;
    height: 140px;
    padding: 16px 12px;
  }
`;

const CardTitle = styled.div`
  color: #fff;
  -webkit-text-stroke-width: 0.14px;
  -webkit-text-stroke-color: #fff;
  font-family: 'IBM Plex Mono';
  font-size: 15px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.144px;
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const CardAction = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
  font-family: 'IBM Plex Mono';
  font-size: 16px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.16px;
  @media (max-width: 900px) {
    font-size: 14px;
  }
  @media (max-width: 600px) {
    font-size: 13px;
  }
`;

const Participation = () => {
  const [showGuestbook, setShowGuestbook] = useState(false);
  const [showPreapply, setShowPreapply] = useState(false);

  return (
    <Container>
      <Header>
        <Title>PARTICIPATION</Title>
        <Subtitle>
          포럼에 참여하고 여러분의 소감을 방명록에 공유해 보세요.
        </Subtitle>
      </Header>
      <main>
        <CardRow>
          <Card onClick={() => setShowPreapply(true)}>
            <CardTitle>Pre-Apply</CardTitle>
            <CardAction>사전신청하기</CardAction>
          </Card>
          <Card onClick={() => setShowGuestbook(true)}>
            <CardTitle>Guestbook</CardTitle>
            <CardAction>방명록 작성하기</CardAction>
          </Card>
        </CardRow>
      </main>
      {showGuestbook && <Guestbook onClose={() => setShowGuestbook(false)} />}
      {showPreapply && <Preapply onClose={() => setShowPreapply(false)} />}
      <Footer />
    </Container>
  );
};

export default Participation;
